import { UiTitle } from "@/shared/ui/ui-title";
import { useAddCategoryForm } from "../model/use-add-category-form";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { UiSelectField } from "@/shared/ui/ui-select-field";
import { ICONS } from "@/shared/constants/category-icons";

export function AddCategoryForm({ onClose }: { onClose: () => void }) {
  const { register, errorMessage, handleSubmit, isLoading } =
    useAddCategoryForm();

  const iconOptions = ICONS.map((icon) => {
    return {
      label: icon,
      icon,
      value: icon,
    };
  });

  return (
    <div>
      <UiTitle className="mb-5 text-xl">Add new category</UiTitle>
      <form onSubmit={handleSubmit(onClose)} className="flex flex-col gap-3">
        <UiTextField
          label="Category name"
          inputProps={{
            ...register("name", { required: true }),
            className: "bg-transparent",
          }}
        />

        <UiSelectField
          label="Icon"
          selectProps={{
            ...register("iconPath", { required: true }),
            className: "bg-transparent",
          }}
          options={iconOptions}
        />

        {errorMessage && (
          <div className="text-rose-400 text-sm">{errorMessage}</div>
        )}

        <div className="flex items-center justify-between mt-5">
          <UiButton className="text-whiteT" variant="danger" onClick={onClose}>
            Cancel
          </UiButton>

          <UiButton
            className="text-whiteT"
            disabled={isLoading}
            variant="primary"
            type="submit"
          >
            Add
          </UiButton>
        </div>
      </form>
    </div>
  );
}
