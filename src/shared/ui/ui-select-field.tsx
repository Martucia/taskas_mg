import clsx from "clsx";
import Image from "next/image";
import { PropsWithRef, SelectHTMLAttributes, useId } from "react";

export type UiSelectOption = {
  value: string | number;
  label: string;
  icon?: string;
};

export type UiSelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options: UiSelectOption[];
};

export function UiSelectField({
  className,
  label,
  error,
  selectProps,
  options,
}: UiSelectFieldProps) {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block text-terq">
          {label}
        </label>
      )}

      <select
        {...selectProps}
        id={id}
        className={clsx(
          selectProps?.className,
          "rounded border border-slate-300 focus:border-teal-600 px-2 h-10 outline-none",
        )}
      >
        {options?.map((option, i) => (
          <option
            className="bg-whiteT dark:bg-sideBarBg"
            key={i}
            value={option.value}
          >
            {option.icon && (
              <Image
                alt="icon"
                width={20}
                height={20}
                src={`/icons/` + option.icon}
              />
            )}
            {option.label}
          </option>
        ))}
      </select>

      {error && <div className="text-rose-400 text-sm">{error}</div>}
    </div>
  );
}
