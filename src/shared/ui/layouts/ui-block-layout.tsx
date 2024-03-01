import clsx from "clsx";
import { ReactNode } from "react";

export function UiBlockLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={clsx(
        className,
        "bg-whiteT dark:bg-sideBarBg px-4 py-5 sm:p-5 rounded-lg shadow-lg",
      )}
    >
      {children}
    </main>
  );
}
