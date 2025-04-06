import classNames from "classnames";
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

interface GradientedButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const GradientedButton: FC<GradientedButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      {...props}
      className={classNames("bg-blue-to-fuchsia bg-clip-text transition-[colors_opacity] hover:text-transparent", className)}
    >
      {children}
    </button>
  );
};
