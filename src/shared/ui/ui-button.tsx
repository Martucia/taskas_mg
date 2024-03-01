import clsx from "clsx";
import { ButtonHTMLAttributes } from "react";

type UiButtonVariant =
  | "primary"
  | "secondary"
  | "premium"
  | "danger"
  | "outlined"
  | "lined";
type UiButtonProps = {
  variant: UiButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function UiButton({ className, variant, ...props }: UiButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        className,
        "rounded-lg font-semibol cursor-pointer flex gap-2 items-center justify-center hover:bg-opacity-90 transition-all",
        {
          primary: "px-8 py-2.5 bg-terq text-whiteT dark:text-whiteT",
          premium: "px-8 py-2.5 bg-gold",
          danger: "px-8 py-2.5 bg-dang",
          outlined:
            "px-8 py-2.5 border border-dang text-dang hover:bg-dang hover:text-whiteT",
          secondary:
            "px-8 py-2.5 border border-terq text-terq hover:bg-terq hover:text-whiteT",
          lined: "lined",
        }[variant],
      )}
    />
  );
}
