import { useCategoriesQuery } from "@/entities/categories";

export function useCategoryList() {
  const categoryListQuery = useCategoriesQuery();

  const categories = categoryListQuery.data ?? [];

  return { categories, isLoading: categoryListQuery.isLoading };
}
