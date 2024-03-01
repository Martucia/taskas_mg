import { usePatchTaskMutation } from "@/entities/tasks/queries";
import { TaskDto } from "@/shared/api/generated";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormTypes = {
  name: string;
  isCompleted: boolean;
};

export type FormKeyTypes = keyof FormTypes;

export function useTaskBlock(task: TaskDto) {
  const [isEditing, setEditing] = useState<boolean>(false);

  const { register, handleSubmit, setValue, getValues, setFocus } =
    useForm<FormTypes>({
      defaultValues: {
        name: task.name,
        isCompleted: task.isCompleted,
      },
    });

  const updateTaskMutation = usePatchTaskMutation();

  const errorMessage = updateTaskMutation.error
    ? "Update task failed"
    : undefined;

  useEffect(() => {
    setFocus("name");
  }, [setFocus, isEditing]);

  return {
    isLoading: updateTaskMutation.isPending,
    register,
    handleSubmit: (onClose: () => void) =>
      handleSubmit((data) =>
        updateTaskMutation.mutate(
          { ...data, id: task.id },
          {
            onSuccess() {
              onClose();
            },
          },
        ),
      ),
    toggleIsCompleted: handleSubmit((data) =>
      updateTaskMutation.mutate({ ...data, id: task.id }),
    ),
    errorMessage,
    setValue,
    getValues,
    isEditing,
    setEditing,
  };
}
