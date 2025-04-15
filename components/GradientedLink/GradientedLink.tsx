import classNames from "classnames";
import Link, { LinkProps as NextLinkProps } from "next/link";
import { forwardRef, ForwardRefRenderFunction } from "react";

type LinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> &
  NextLinkProps & {
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;

const Component: ForwardRefRenderFunction<HTMLAnchorElement, LinkProps> = ({ className, children, ...props }, ref) => {
  return (
    <Link
      ref={ref}
      {...props}
      className={classNames("bg-blue-to-fuchsia bg-clip-text transition-[colors_opacity] hover:text-transparent", className)}
    >
      {children}
    </Link>
  );
};

export const GradientedLink = forwardRef(Component);
