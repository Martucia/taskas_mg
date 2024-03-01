import { useAddCategoryMutation } from "@/entities/categories";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function useAddCategoryForm() {
  const { register, handleSubmit, reset, setFocus } = useForm<{
    name: string;
    iconPath: string;
  }>();

  const addCategoryMutation = useAddCategoryMutation();
  const router = useRouter();

  const errorMessage = addCategoryMutation.error
    ? "Category creating failed"
    : undefined;

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return {
    register,
    errorMessage,
    handleSubmit: (onClose: () => void) =>
      handleSubmit((data) =>
        addCategoryMutation.mutate(data, {
          onSuccess(data) {
            reset();
            onClose();
            router.replace("/" + data.id);
          },
        }),
      ),
    isLoading: addCategoryMutation.isPending,
  };
}
