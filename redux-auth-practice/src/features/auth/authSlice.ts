import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import api from "../../api/axios";

import type {
  AuthState,
  LoginResponse,
  User,
} from "./authTypes";

const storedToken = localStorage.getItem("token");
const storedUser = localStorage.getItem("user");

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  token: storedToken,
  isAuthenticated: Boolean(storedToken),
  loading: false,
  error: null,
};

// Login API request
export const loginUser = createAsyncThunk<
  LoginResponse,
  { email: string; password: string }
>("auth/loginUser", async (credentials) => {
  const response = await api.post<LoginResponse>(
    "/login",
    credentials
  );

  return response.data;
});

// Get current logged-in user
export const fetchCurrentUser = createAsyncThunk<User>(
  "auth/fetchCurrentUser",
  async () => {
    const response = await api.get<{ user: User }>(
      "/me"
    );

    return response.data.user;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  },

  extraReducers: (builder) => {
    builder
      // Login
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(
        loginUser.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.loading = false;
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isAuthenticated = true;
          state.error = null;

          localStorage.setItem(
            "token",
            action.payload.token
          );

          localStorage.setItem(
            "user",
            JSON.stringify(action.payload.user)
          );
        }
      )

      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.error = "Invalid email or password";
      })

      // Restore current user
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;

        localStorage.setItem(
          "user",
          JSON.stringify(action.payload)
        );
      })

      .addCase(fetchCurrentUser.rejected, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        state.error = "Session expired";

        localStorage.removeItem("token");
        localStorage.removeItem("user");
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;