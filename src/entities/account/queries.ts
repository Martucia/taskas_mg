import {
  accountControllerGetAccount,
  accountControllerPatch,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const queryKey = ["account"];

export function useAccountQuery() {
  return useQuery({
    queryKey,
    queryFn: accountControllerGetAccount,
  });
}

export function useUpdateAccountMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: accountControllerPatch,
    onSuccess(data) {
      queryClient.setQueryData(queryKey, data);
    },
    async onSettled() {
      queryClient.invalidateQueries({ queryKey });
    },
  });
}
