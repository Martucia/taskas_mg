import { ReactNode } from "react";
import { UiTitle } from "../ui-title";

export function UiFormPageLayout({
  title,
  form,
}: {
  form?: ReactNode;
  title: string;
}) {
  return (
    <div className="min-h-screen flex justify-center items-center dark:bg-pageBg">
      <main className="grow flex flex-col">
        <div className="rounded-xl border border-slate-300 px-14 py-16 pb-14 w-full max-w-[400px] bg-white self-center dark:bg-sideBarBg">
          <UiTitle className="text-lg mb-5 text-center">{title}</UiTitle>
          {form}
        </div>
      </main>
    </div>
  );
}
