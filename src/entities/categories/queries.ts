import {
  categoryControllerCreate,
  categoryControllerGetAll,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const queryKey = ["categories"];

export function useCategoriesQuery() {
  return useQuery({
    queryKey,
    queryFn: () => categoryControllerGetAll(),
    staleTime: Infinity,
  });
}

export function useAddCategoryMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: categoryControllerCreate,
    async onSettled() {
      await queryClient.invalidateQueries({ queryKey });
    },
  });
}

