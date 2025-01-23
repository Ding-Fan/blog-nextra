import Link, { LinkProps } from "next/link";
import { FC, ReactNode } from "react";

interface BaseLinkProps extends LinkProps {
  /** Additional Tailwind classes for customization */
  className?: string;
  /** Children to be rendered inside the link */
  children: ReactNode;
}

/**
 * A wrapper around Next.js Link component that applies a base style
 * and optionally accepts additional className for customization.
 */
const BaseLink: FC<BaseLinkProps> = ({
  href,
  children,
  className = "",
  ...props
}) => {
  return (
    <Link
      href={href}
      // Use the new Link style signature (Next.js 13+)
      className={`
        inline-flex items-center justify-center
        text-sm font-medium 
        text-blue-600
        border-b border-blue-600
        hover:border-blue-300 hover:text-purple-600 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${className}
      `}
      {...props}
    >
      {children}
    </Link>
  );
};

export default BaseLink;
