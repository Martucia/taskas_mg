import { useAddTaskMutation } from "@/entities/tasks/queries";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export function useAddTaskForm() {
  const router = useRouter();
  const { id } = router.query;

  const { register, handleSubmit, reset, setFocus } = useForm<{
    name: string;
    ownerId: string;
  }>({
    defaultValues: {
      ownerId: String(id),
    },
  });

  const addTaskMutation = useAddTaskMutation();

  const errorMessage = addTaskMutation.error
    ? "Task creating failed"
    : undefined;

  useEffect(() => {
    setFocus("name");
  }, [setFocus]);

  return {
    register,
    errorMessage,
    handleSubmit: (onClose: () => void) =>
      handleSubmit((data) =>
        addTaskMutation.mutate(data, {
          onSuccess() {
            reset();
            onClose();
          },
        }),
      ),
    isLoading: addTaskMutation.isPending,
  };
}
