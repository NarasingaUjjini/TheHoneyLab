import type { ReactNode, ButtonHTMLAttributes } from "react";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

interface ButtonLinkProps {
  to: string;
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  ghost: "btn btn-ghost",
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button type="button" className={`${variantClass[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({ to, variant = "primary", className = "", children }: ButtonLinkProps) {
  return (
    <Link to={to} className={`${variantClass[variant]} ${className}`}>
      {children}
    </Link>
  );
}
