import { SidebarContext } from "@/app/app-layout";
import { SignOutButton } from "@/features/auth/ui/sign-out-button";
import { CategoryList } from "@/features/categories/ui/category-list";
import { UiLogo } from "@/shared/ui/ui-logo";
import clsx from "clsx";
import { useContext } from "react";
import { ThemeToggle } from "./theme-toggle";

export function SideBar() {
  const { isOpen } = useContext(SidebarContext);

  return (
    <div
      className={clsx(
        `${
          isOpen ? "right-0" : "right-full"
        } transition-all duration-300 ease-out fixed top-0 bottom-0 w-full sm:right-auto sm:left-0 flex flex-col gap-16 bg-white text-blackT dark:bg-sideBarBg dark:text-whiteT h-screen p-5 pr-0 sm:relative shadow-xl`,
      )}
    >
      <div className="flex items-center">
        <UiLogo />

        <ThemeToggle className="absolute left-1/2 translate-x-[-50%] sm:hidden" />
      </div>

      <CategoryList />

      <SignOutButton className="absolute left-5 bottom-16 sm:bottom-5 text-inherit flex items-center gap-2.5" />
    </div>
  );
}
