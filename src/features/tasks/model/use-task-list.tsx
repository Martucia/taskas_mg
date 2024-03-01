import { useTaskListQuery } from "@/entities/tasks/queries";
import { useRouter } from "next/router";

export function useTaskList() {
  const router = useRouter();
  const { id } = router.query;

  const taskListQuery = useTaskListQuery(id ? String(id) : "");

  const completedTasks = taskListQuery.data
    ? taskListQuery.data.filter((task) => task.isCompleted)
    : [];
  const inWorkTasks = taskListQuery.data
    ? taskListQuery.data.filter((task) => !task.isCompleted)
    : [];


  const errorMessage = taskListQuery.error ? "Сategory was not found" : undefined;

  return { completedTasks, inWorkTasks, isLoading: taskListQuery.isPending, errorMessage };
}
