import { TaskDto } from "@/shared/api/generated";
import { UiCheckbox } from "@/shared/ui/ui-checkbox";
import { RemoveTaskButton } from "./remove-task-button";
import { EditIcon } from "@/shared/ui/icons/edit-icon";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { FormKeyTypes, useTaskBlock } from "../model/use-task-block";
import { DoneIcon } from "@/shared/ui/icons/done-icon";

export function TaskBlock({ task }: { task: TaskDto }) {
  const {
    isLoading,
    register,
    handleSubmit,
    getValues,
    toggleIsCompleted,
    isEditing,
    setEditing,
  } = useTaskBlock(task);

  return (
    <form
      className="h-16 flex items-center justify-between gap-5 border border-slate-300 border-opacity-40 rounded-xl p-4 cursor-pointer w-full group transition-all duration-300"
      onSubmit={handleSubmit(() => setEditing(false))}
    >
      <div className="flex items-center gap-2 sm:gap-4 w-full">
        {!isEditing && (
          <UiCheckbox
            inputProps={{
              ...register("isCompleted", {
                onChange: () => toggleIsCompleted(),
              }),
            }}
            getValue={(name: FormKeyTypes) => getValues(name)}
            className="flex sm:hidden sm:group-hover:flex"
          />
        )}

        {isEditing ? (
          <UiTextField
            className="w-full"
            inputProps={{
              ...register("name", { required: true }),
              className: "bg-transparent w-full block py-0 border-0",
            }}
          />
        ) : (
          <div
            onDoubleClick={() => setEditing(true)}
            className={`${task.isCompleted && "line-through opacity-70"} line-clamp-1 w-full`}
          >
            {task.name}
          </div>
        )}
      </div>

      {isEditing ? (
        <button
          type="submit"
          disabled={isLoading}
          className="w-7 h-7 flex items-center text-terq"
        >
          <DoneIcon />
        </button>
      ) : (
        <div className="items-center gap-2 sm:gap-3.5 flex sm:hidden sm:group-hover:flex">
          <button
            onClick={() => setEditing(true)}
            className=" w-6 h-6"
          >
            <EditIcon />
          </button>
          <RemoveTaskButton id={task.id} />
        </div>
      )}
    </form>
  );
}
