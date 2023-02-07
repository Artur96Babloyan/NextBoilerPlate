import React from "react";
import Link from "next/link";

export interface IExternalLinkProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
}

const ExternalLink = ({
  href,
  children,
  className,
  ...props
}: IExternalLinkProps) => {
  return (
    <div className={`${className ? ` ${className}` : ""}`} {...props}>
      <Link href={href} prefetch={false}>
        <a target="_blank" rel="noreferrer">
          {children}
        </a>
      </Link>
    </div>
  );
};

export default ExternalLink;
