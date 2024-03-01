import {
  TaskDto,
  tasksControllerCreate,
  tasksControllerGetAll,
  tasksControllerPatch,
  tasksControllerRemove,
} from "@/shared/api/generated";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const queryKey = ["tasks"];

export function useTaskListQuery(categoryId: string) {
  return useQuery({
    queryKey: [`${queryKey[0]}_${categoryId}`],
    queryFn: () => tasksControllerGetAll(categoryId),
    enabled: categoryId.length > 0,
    staleTime: Infinity,
    placeholderData: [],
    retry: false,
  });
}

export function useAddTaskMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: tasksControllerCreate,
    async onSettled(data) {
      if (data) {
        await queryClient.invalidateQueries({
          queryKey: [`tasks_${data.ownerId}`],
        });
      }
    },
  });
}

export function useRemoveTaskMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: tasksControllerRemove,
    async onSettled(data) {
      if (data) {
        await queryClient.invalidateQueries({
          queryKey: [`tasks_${data.ownerId}`],
        });
      }
    },
  });
}

export function usePatchTaskMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: tasksControllerPatch,
    onSuccess(data) {
      queryClient.setQueryData([`tasks_${data.ownerId}`], (prevData: any) => {
        const updatedData = prevData.map((task: TaskDto) =>
          task.id === data.id ? data : task,
        );
        return updatedData;
      });
    },
    async onSettled(data) {
      if (data) {
        await queryClient.invalidateQueries({
          queryKey: [`tasks_${data.ownerId}`],
        });
      }
    },
  });
}
