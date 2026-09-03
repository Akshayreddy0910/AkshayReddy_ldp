import {
  Navigate,
  Outlet,
} from "react-router-dom";

import { useAppSelector } from "../app/hooks";

function ProtectedRoute() {
  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated
  );

  const loading = useAppSelector(
    (state) => state.auth.loading
  );

  if (loading) {
    return <p>Checking authentication...</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;