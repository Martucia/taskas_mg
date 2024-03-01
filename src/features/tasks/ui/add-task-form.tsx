import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiTitle } from "@/shared/ui/ui-title";
import { useAddTaskForm } from "../model/use-add-task-form";
import { UiButton } from "@/shared/ui/ui-button";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { useCategoriesQuery } from "@/entities/categories";

export function AddTaskForm({ onClose }: { onClose: () => void }) {
  const { register, errorMessage, handleSubmit, isLoading } = useAddTaskForm();

  const { data } = useCategoriesQuery();

  const categoryOptions = data
    ? data?.map((category) => {
        return {
          value: category.id,
          label: category.name,
        };
      })
    : [];

  return (
    <div>
      <UiTitle className="mb-5 text-xl">Add new task</UiTitle>
      <form onSubmit={handleSubmit(onClose)} className="flex flex-col gap-3">
        <UiTextField
          label="What need to do?"
          inputProps={{
            ...register("name", { required: true }),
            className: "bg-transparent",
          }}
        />

        <UiSelectField
          selectProps={{
            ...register("ownerId", { required: true }),
            className: "bg-transparent",
          }}
          options={categoryOptions}
          label="Category"
        />

        {errorMessage && (
          <div className="text-rose-400 text-sm">{errorMessage}</div>
        )}

        <div className="flex items-center justify-between mt-5">
          <UiButton variant="danger" className="text-whiteT" onClick={onClose}>
            Cancel
          </UiButton>

          <UiButton
            type="submit"
            className="text-whiteT"
            disabled={isLoading}
            variant="primary"
          >
            Add
          </UiButton>
        </div>
      </form>
    </div>
  );
}
