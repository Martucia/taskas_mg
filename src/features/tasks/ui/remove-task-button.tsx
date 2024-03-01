import { TrashIcon } from "@/shared/ui/icons/trash-icon";
import { useRemoveTaskMutation } from "@/entities/tasks/queries";

export function RemoveTaskButton({ id }: { id: string }) {
  const removeTaskMutation = useRemoveTaskMutation();

  const handleRemove = () => removeTaskMutation.mutate(id);
  return (
    <button
      type="button"
      disabled={removeTaskMutation.isPending}
      onClick={handleRemove}
      className="text-rose-600 w-7 h-7"
    >
      <TrashIcon />
    </button>
  );
}
