import clsx from "clsx";
import { ReactNode } from "react";

export function UiModalLayout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-slate-700 bg-opacity-80 w-screen h-screen flex items-center justify-center z-10">
      <div className={clsx(className, "p-5 rounded-2xl bg-whiteT dark:bg-sideBarBg relative w-[90vw] sm:max-w-[400px]")}>
        {children}
      </div>
    </div>
  );
}
