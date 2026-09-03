import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  useAppDispatch,
  useAppSelector,
} from "../app/hooks";

import { logout } from "../features/auth/authSlice";

function Navbar() {
  const user = useAppSelector(
    (state) => state.auth.user
  );

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav>
      <h2>Redux Auth Practice</h2>

      <div>
        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/profile">
          Profile
        </Link>

        {user && (
          <span>
            Welcome, {user.name}
          </span>
        )}

        {user && (
          <button onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;