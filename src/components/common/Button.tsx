import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "quiet";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return <button className={cn("button", `button--${variant}`, className)} {...props}>{children}</button>;
}

interface ButtonLinkProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  to: string;
  variant?: ButtonVariant;
}

export function ButtonLink({ children, className, onClick, to, variant = "primary" }: ButtonLinkProps) {
  return <Link className={cn("button", `button--${variant}`, className)} to={to} onClick={onClick}>{children}</Link>;
}
