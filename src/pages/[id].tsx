import { TaskList } from "@/features/tasks/ui/task-list";
import { UiBlockLayout } from "@/shared/ui/layouts/ui-block-layout";

export function KanbanPage() {
  return (
    <div>
      <UiBlockLayout>
        <TaskList />
      </UiBlockLayout>
    </div>
  );
}
