import clsx from "clsx";
import { ReactNode } from "react";

export function UiTitle({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <h3 className={clsx(className, "text-terq font-semibold")}>{children}</h3>
  );
}
