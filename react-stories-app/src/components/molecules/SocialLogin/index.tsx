import Divider from "../../atoms/Divider";
import Icon from "../../atoms/Icon";
import Button from "../../atoms/Button";

interface SocialOption {
  icon: string;
  label: string;
}

interface SocialLoginProps {
  options: SocialOption[];
  onSocialClick?: (label: string) => void;
  showSignupLink?: boolean;
  signupHref?: string;
  loginHref?: string;
  onLinkClick?: () => void;
  className?: string;
}

const SocialLogin = ({
  options,
  onSocialClick,
  showSignupLink = true,
  signupHref = "#",
  loginHref = "#",
  onLinkClick,
  className = "",
}: SocialLoginProps) => {
  return (
    <div className={["social-login", className].filter(Boolean).join(" ")}>
      <Divider label="Or" />

      <div className="social-login__buttons">
        {options.map((option) => (
          <Button
            key={option.label}
            label={option.label}
            fullWidth={false}
            variant="secondary"
            startIcon={<Icon src={option.icon} alt={option.label} width={22} height={22} />}
            onClick={() => onSocialClick?.(option.label)}
          />
        ))}
      </div>

      <p className="social-login__footer">
        {showSignupLink ? (
          <>
            Don't have an account?{" "}
            <a href={signupHref} onClick={onLinkClick}>
              Sign Up
            </a>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <a href={loginHref} onClick={onLinkClick}>
              Login
            </a>
          </>
        )}
      </p>
    </div>
  );
};

export default SocialLogin;
