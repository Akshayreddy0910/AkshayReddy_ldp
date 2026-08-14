import { useState } from "react";

import LoginForm from "./components/molecules/LoginForm";
import SocialLogin from "./components/molecules/SocialLogin";

import google from "./assets/icons/google.svg";
import stripe from "./assets/icons/stripe.svg";
import xero from "./assets/icons/xero.svg";

const socialOptions = [
  { icon: google, label: "Google" },
  { icon: stripe, label: "Stripe" },
  { icon: xero, label: "Xero" },
];

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="app">
      <LoginForm
        email={email}
        password={password}
        showPassword={showPassword}
        onEmailChange={(event) => setEmail(event.target.value)}
        onPasswordChange={(event) => setPassword(event.target.value)}
        onToggleShowPassword={() => setShowPassword((prev) => !prev)}
        onSubmit={(event) => event.preventDefault()}
      />

      <SocialLogin options={socialOptions} />
    </div>
  );
};

export default App;
