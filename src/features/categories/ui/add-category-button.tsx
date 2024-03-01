import { PlusIcon } from "@/shared/ui/icons/plus-icon";
import { UiModalLayout } from "@/shared/ui/layouts/ui-modal-layout";
import { UiButton } from "@/shared/ui/ui-button";
import { useState } from "react";
import { AddCategoryForm } from "./add-category-form";

export function AddCategoryButton({
  className,
  variant = "lined",
}: {
  className?: string;
  variant?: "lined" | "primary";
}) {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);

  const onClose = (e?: any) => {
    if (e) {
      e.preventDefault();
    }

    setModalOpen(false);
  };

  return (
    <>
      <UiButton
        className={className}
        onClick={() => setModalOpen(true)}
        variant={variant}
      >
        <PlusIcon />
        New category
      </UiButton>
      {isModalOpen && (
        <UiModalLayout className="w-1/3">
          <AddCategoryForm onClose={onClose} />
        </UiModalLayout>
      )}
    </>
  );
}
