import { FormKeyTypes } from "@/features/tasks/model/use-task-block";
import clsx from "clsx";
import { InputHTMLAttributes, PropsWithRef, useId, useRef } from "react";

export function UiCheckbox({
  className,
  inputProps,
  getValue,
}: {
  className?: string;
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>> & {
    name: FormKeyTypes;
  };
  getValue: (val: FormKeyTypes) => string | boolean;
}) {
  const id = useId();

  const isChecked = inputProps?.name ? getValue(inputProps.name) : false;

  return (
    <label
      htmlFor={id}
      className={clsx("flex items-center cursor-pointer", className)}
    >
      <span className="w-5 h-5 border border-terq rounded-md cursor-pointer text-terq">
        <input id={id} className="hidden" {...inputProps} type="checkbox" />
        {isChecked && (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"
            />
          </svg>
        )}
      </span>
    </label>
  );
}
