import { UiSpinner } from "@/shared/ui/ui-spinner";
import { useTaskList } from "../model/use-task-list";
import { TaskBlock } from "./task-block";
import { UiTitle } from "@/shared/ui/ui-title";
import { UiPageSpinner } from "@/shared/ui/ui-page-spinner";
import { WarningIcon } from "@/shared/ui/icons/warning-icon";

export function TaskList() {
  const { inWorkTasks, completedTasks, isLoading, errorMessage } =
    useTaskList();

  const isEmptyTextForInWork = inWorkTasks.length === 0;
  const isEmptyTextForCompleted = completedTasks.length === 0;

  if (isLoading) return <UiPageSpinner />;

  if (errorMessage)
    return (
      <div className="flex gap-2 items-center text-rose-500 font-bold text-lg">
        <WarningIcon className="w-7" />
        {errorMessage}
      </div>
    );

  return (
    <div>
      <UiTitle className="text-lg mb-5">Active tasks</UiTitle>
      <div className="flex flex-col gap-2.5 mb-8">
        {isLoading && <UiSpinner className="w-10 h-10" />}
        {isEmptyTextForInWork && <div>List is empty...</div>}
        {inWorkTasks.map((task) => (
          <TaskBlock task={task} key={task.id} />
        ))}
      </div>

      <UiTitle className="text-lg mb-5">Completed tasks</UiTitle>
      <div className="flex flex-col gap-2.5">
        {isLoading && <UiSpinner className="w-10 h-10" />}
        {isEmptyTextForCompleted && <div>List is empty...</div>}
        {completedTasks.map((task) => (
          <TaskBlock task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
