import axios from "axios";

import apiClient from "./apiClient";

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

const getErrorMessage = (error: unknown, fallback: string): string => {
  if (axios.isAxiosError(error)) {
    if (error.code === "ECONNABORTED") {
      return "Request timed out. Please try again.";
    }

    if (!error.response) {
      return "Cannot reach the server. Please try again.";
    }
  }

  return fallback;
};

export const loginUser = async (email: string, password: string): Promise<User> => {
  try {
    const { data: matchedUsers } = await apiClient.get<User[]>(
      `/users?email=${encodeURIComponent(email)}`
    );

    const user = matchedUsers[0];

    if (!user || user.password !== password) {
      throw new Error("Invalid email or password");
    }

    return user;
  } catch (error) {
    if (error instanceof Error && error.message === "Invalid email or password") {
      throw error;
    }

    throw new Error(getErrorMessage(error, "Something went wrong. Please try again."), {
      cause: error,
    });
  }
};

export const signupUser = async (
  name: string,
  email: string,
  password: string
): Promise<User> => {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();

  try {
    // fetch ALL users once — needed for name/email duplicate checks and next id
    const { data: allUsers } = await apiClient.get<User[]>("/users");

    const emailTaken = allUsers.some(
      (user) => user.email.trim().toLowerCase() === trimmedEmail.toLowerCase()
    );

    if (emailTaken) {
      throw new Error("An account with this email already exists");
    }

    const nameTaken = allUsers.some(
      (user) => user.name.trim().toLowerCase() === trimmedName.toLowerCase()
    );

    if (nameTaken) {
      throw new Error("This name is already taken. Please use a different name");
    }

    // work out the next sequential id: highest existing id + 1
    const nextId =
      allUsers.length > 0 ? Math.max(...allUsers.map((user) => Number(user.id))) + 1 : 1;

    const { data: createdUser } = await apiClient.post<User>("/users", {
      id: nextId,
      name: trimmedName,
      email: trimmedEmail,
      password,
    });

    return createdUser;
  } catch (error) {
    if (
      error instanceof Error &&
      (error.message === "An account with this email already exists" ||
        error.message === "This name is already taken. Please use a different name")
    ) {
      throw error;
    }

    throw new Error(getErrorMessage(error, "Something went wrong. Please try again."), {
      cause: error,
    });
  }
};