const BASE_URL = "http://localhost:4000";

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export const loginUser = async (email: string, password: string): Promise<User> => {
  const response = await fetch(`${BASE_URL}/users?email=${encodeURIComponent(email)}`);

  if (!response.ok) {
    throw new Error("Something went wrong. Please try again.");
  }

  const matchedUsers: User[] = await response.json();

  const user = matchedUsers[0];

  if (!user || user.password !== password) {
    throw new Error("Invalid email or password");
  }

  return user;
};

export const signupUser = async (name: string, email: string, password: string): Promise<User> => {
  const trimmedName = name.trim();
  const trimmedEmail = email.trim();

  // fetch ALL users once — needed for name/email duplicate checks and next id
  const allUsersResponse = await fetch(`${BASE_URL}/users`);

  if (!allUsersResponse.ok) {
    throw new Error("Something went wrong. Please try again.");
  }

  const allUsers: User[] = await allUsersResponse.json();

  // check 1: email already used
  const emailTaken = allUsers.some(
    (user) => user.email.trim().toLowerCase() === trimmedEmail.toLowerCase()
  );

  if (emailTaken) {
    throw new Error("An account with this email already exists");
  }

  // check 2: name already used (trimmed so "Sunny1 " and "Sunny1" count as the same)
  const nameTaken = allUsers.some(
    (user) => user.name.trim().toLowerCase() === trimmedName.toLowerCase()
  );

  if (nameTaken) {
    throw new Error("This name is already taken. Please use a different name");
  }

  // work out the next sequential id: highest existing id + 1
  const nextId =
    allUsers.length > 0 ? Math.max(...allUsers.map((user) => Number(user.id))) + 1 : 1;

  const createResponse = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: nextId, name: trimmedName, email: trimmedEmail, password }),
  });

  if (!createResponse.ok) {
    throw new Error("Something went wrong. Please try again.");
  }

  return createResponse.json();
};