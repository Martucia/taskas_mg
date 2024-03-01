import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, ReactNode } from "react";

type UiFileFieldProps = {
  className?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>;
  children?: ReactNode;
};

export function UiFileField({
  children,
  className,
  inputProps,
}: UiFileFieldProps) {
  return (
    <div className={clsx(className, "relative cursor-pointer max-w-max")}>
      {children}
      <input
        className="opacity-0 absolute left-0 top-0 w-full h-full cursor-pointer right-0 bottom-0 file:cursor-pointer"
        type="file"
        {...inputProps}
      />
    </div>
  );
}
