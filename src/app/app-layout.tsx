import { Header } from "@/widgets/header";
import { SideBar } from "@/widgets/sidebar";
import { ReactNode, createContext, useState } from "react";

export const SidebarContext = createContext<{
  isOpen: boolean;
  toggle: () => void;
}>({
  isOpen: false,
  toggle: () => null,
});

export function AppLayout({ children }: { children: ReactNode }) {
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false);

  return (
    <SidebarContext.Provider
      value={{
        isOpen: isSideBarOpen,
        toggle: () => setSideBarOpen(!isSideBarOpen),
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] min-h-screen lg:grid-cols-[300px_1fr] bg-[#f0f0f0] text-blackT dark:bg-pageBg dark:text-whiteT">
        <SideBar />
        <div className="px-4 sm:px-8 lg:px-12">
          <Header />
          <main className="mt-8">{children}</main>
        </div>
      </div>
    </SidebarContext.Provider>
  );
}
