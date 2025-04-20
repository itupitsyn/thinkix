import classNames from "classnames";
import { DetailedHTMLProps, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, useId } from "react";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  error?: string;
}

const Component: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, id, error, className, ...props }, ref) => {
  const internalId = useId();

  const componentId = id ?? internalId;

  return (
    <div className="grid gap-x-4 gap-y-1 sm:grid-cols-[1fr_2fr]">
      <label htmlFor={componentId} className="text-end">
        {label}
      </label>
      <input {...props} className={classNames("text-black", className)} ref={ref} id={componentId} />
      {error && (
        <>
          <div />
          <div className="text-xs text-red-500">{error}</div>
        </>
      )}
    </div>
  );
};

export const Input = forwardRef(Component);
