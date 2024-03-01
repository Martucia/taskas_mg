import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode, useState } from "react";

export type UiToggleMenuProps = {
  button: ReactNode;
  menu: ReactNode;
  buttonClassName?: string;
};

export function UiToggleMenu({
  button,
  menu,
  buttonClassName,
}: UiToggleMenuProps) {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button className={clsx(buttonClassName, isOpen && "rotate-180")} onClick={() => setOpen(!isOpen)}>{button}</button>

      {isOpen && (
        <div className="absolute top-10 right-0">{menu}</div>
      )}
    </div>
  );
}
