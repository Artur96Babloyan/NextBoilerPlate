import * as React from "react";
import Link from "next/link";
import ExternalLink from "@components/ExternalLink/ExternalLink";
import styles from "./Button.module.scss";

export interface IButtonProps {
  href?: string;
  id?: string;
  type?: "button" | "submit";
  color?: string;
  size?: "large" | "normal" | "small";
  className?: string;
  rounded?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

const Button = ({
  href,
  type = "button",
  color = "primary",
  className = "",
  id,
  size = "normal",
  rounded = false,
  disabled,
  onClick,
  children,
  ...props
}: IButtonProps) => {
  let themeName = styles.primary;
  if (color === "secondary") themeName = styles.secondary;
  else if (color === "dark") themeName = styles.dark;
  else if (color === "dark-secondary") themeName = styles.darkSecondary;
  else if (color === "light") themeName = styles.light;
  else if (color === "outlineLight") themeName = styles.outlineLight;
  else if (color === "static-dark") themeName = styles.darkWithoutHover;
  else if (color === "light-primary") themeName = styles.lightPrimary;
  else if (color === "dark-primary") themeName = styles.darkPrimary;


  let roundedClass = rounded ? styles.rounded : "";
  const sizeClass =
    size === "small" ? styles.small : size === "large" ? styles.large : "";

  if (!href) {
    return (
      <button
        type={type}
        id={id}
        className={`${styles.button}${
          className ? ` ${className}` : ""
        } ${themeName} ${roundedClass} ${sizeClass}`}
        onClick={onClick}
        {...props}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }

  const external = href.indexOf("https://") > -1;
  if (external) {
    return (
      <ExternalLink href={href}>
        <button
          id={id}
          className={`${styles.button}${
            className ? ` ${className}` : ""
          } ${themeName} ${roundedClass} ${sizeClass}`}
          {...props}
        >
          {children}
        </button>
      </ExternalLink>
    );
  }

  return (
    <Link {...{ href }} prefetch={false}>
      <button
        id={id}
        className={`${styles.button}${
          className ? ` ${className}` : ""
        } ${themeName} ${roundedClass} ${sizeClass}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
