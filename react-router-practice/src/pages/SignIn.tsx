import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");

  const from =
    (location.state as { from?: string } | null)?.from ?? "/overview";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(from, { replace: true });
  };

  return (
    <section className="view">
      <h1>Sign in</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form-field">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label className="form-field">
          Password
          <input type="password" required />
        </label>
        <button type="submit">Continue</button>
      </form>
    </section>
  );
};

export default SignIn;
