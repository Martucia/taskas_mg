import { AddTaskButton } from "@/features/tasks/ui/add-task-button";
import { ThemeToggle } from "./theme-toggle";
import { HeaderToggleMenu } from "./header-toggle-menu";
import { useAccountQuery } from "@/entities/account/queries";
import { UiHamburger } from "@/shared/ui/ui-hamburger";
import { useContext } from "react";
import { SidebarContext } from "@/app/app-layout";

export function Header() {
  const { data: account } = useAccountQuery();
  const { isOpen, toggle } = useContext(SidebarContext);

  if (!account) return null;

  return (
    <header className="grid grid-cols-2 sm:grid-cols-[1fr_24px_1fr] items-center justify-between pt-5 gap-3">
      <AddTaskButton variant="primary" className="max-w-max" />

      <ThemeToggle className="hidden sm:block" />

      <div className="hidden sm:flex items-center gap-4 justify-end">
        {account.userName}
        <HeaderToggleMenu />
      </div>

      <div className="flex justify-end sm:hidden">
        <UiHamburger isOpen={isOpen} toggle={toggle} />
      </div>
    </header>
  );
}
