import { DetailedHTMLProps, FC, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, useId } from "react";

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label: string;
  error?: string;
}

const Component: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ label, id, error, ...props }, ref) => {
  const internalId = useId();

  const componentId = id ?? internalId;

  return (
    <div className="grid grid-cols-[1fr_2fr] gap-x-4 gap-y-1">
      <label htmlFor={componentId} className="text-end">
        {label}
      </label>
      <input {...props} id={componentId} />
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
