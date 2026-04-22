import { ArrowRight } from "./Icons";

const Button = ({ variant = "default", onClick, children, icon = true, href, target }) => {
  const cls = `btn${variant !== "default" ? ` ${variant}` : ""}`;

  if (href) {
    return (
      <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={cls}>
        {children}
        {icon && <span className="arrow"><ArrowRight /></span>}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick}>
      {children}
      {icon && <span className="arrow"><ArrowRight /></span>}
    </button>
  );
};

export default Button;
