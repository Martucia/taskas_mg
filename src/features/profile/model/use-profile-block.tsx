import {
  useAccountQuery,
  useUpdateAccountMutation,
} from "@/entities/account/queries";
import { AccountDto } from "@/shared/api/generated";
import { useForm } from "react-hook-form";

export function useProfileBlock(account: AccountDto) {
  const { register, handleSubmit } = useForm<{
    userName: string;
  }>({
    defaultValues: {
      userName: account?.userName,
    },
  });

  const updateAccountMutation = useUpdateAccountMutation();

  const errorMessage = updateAccountMutation.error
    ? "Update profile failed"
    : undefined;

  return {
    handleSubmit: handleSubmit((data) =>
      updateAccountMutation.mutate(data),
    ),
    errorMessage,
    register,
    isLoading: updateAccountMutation.isPending
  };
}
