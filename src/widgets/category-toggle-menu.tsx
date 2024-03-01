import { DotsIcon } from "@/shared/ui/icons/dots-icon";
import { TrashIcon } from "@/shared/ui/icons/trash-icon";
import { UiButton } from "@/shared/ui/ui-button";
import { UiToggleMenu } from "@/shared/ui/ui-toggle-menu";

export function CategoryToggleMenu() {
  return (
    <UiToggleMenu
      button={
        <span>
          <DotsIcon />
        </span>
      }
      menu={
        <div className="bg-whiteT p-5 rounded-2xl w-max dark:bg-sideBarBg shadow-lg">
          <ul className="flex flex-col gap-3 w-full">
            <li>
              <UiButton variant="lined">
                <TrashIcon />
                Remove
              </UiButton>
            </li>
          </ul>
        </div>
      }
    />
  );
}
