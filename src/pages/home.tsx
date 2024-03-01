import { useCategoriesQuery } from "@/entities/categories";
import { AddCategoryButton } from "@/features/categories/ui/add-category-button";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { UiTitle } from "@/shared/ui/ui-title";
import { useRouter } from "next/router";

export default function HomePage() {
  const { data, isPending } = useCategoriesQuery();

  const router = useRouter();

  if (isPending) return <UiPageSpinner />;

  if (data && data?.length > 0) {
    router.replace("/" + data[0].id);
  }

  return (
    <main className="w-full flex flex-col items-center h-full justify-center pt-[30vh]">
      <UiTitle className="text-3xl">Has no category yet</UiTitle>
      <div className="mt-2 text-slate-500 text-xl">
        Don&apos;t want to add more?
      </div>
      <AddCategoryButton variant="primary" className="mt-4" />
    </main>
  );
}
