import { UiModalLayout } from "@/shared/ui/layouts/ui-modal-layout";
import { UiButton } from "@/shared/ui/ui-button";
import { useState } from "react";
import { AddTaskForm } from "./add-task-form";
import { PlusIcon } from "@/shared/ui/icons/plus-icon";

type AddTaskButtonVariant = "primary" | "lined";

export function AddTaskButton({
  variant,
  className,
}: {
  variant: AddTaskButtonVariant;
  className?: string;
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
        onClick={() => setModalOpen(true)}
        className={className}
        variant={variant}
      >
        <PlusIcon />
        <span className="hidden sm:block">New task</span>
      </UiButton>
      {isModalOpen && (
        <UiModalLayout className="w-1/3">
          <AddTaskForm onClose={onClose} />
        </UiModalLayout>
      )}
    </>
  );
}
