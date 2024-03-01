import { SignOutButton } from "@/features/auth/ui/sign-out-button";
import { ROUTES } from "@/shared/constants/routes";
import { UserIcon } from "@/shared/ui/icons/user-icon";
import { UiLink } from "@/shared/ui/ui-link";
import { UiToggleMenu } from "@/shared/ui/ui-toggle-menu";

export function HeaderToggleMenu() {
  return (
    <UiToggleMenu
      buttonClassName="w-6 h-6 rounded-md bg-whiteT dark:bg-sideBarBg shadow-lg flex items-center justify-center"
      button={
        <span className="text-terq rotate-90 w-4 h-4 flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"
            />
          </svg>
        </span>
      }
      menu={
        <div className="bg-whiteT p-5 rounded-2xl w-max dark:bg-sideBarBg shadow-lg">
          <ul className="flex flex-col gap-3 w-full">
            <li>
              <UiLink href={ROUTES.PROFILE} className="max-w-max">
                <UserIcon className="w-6 h-6" />
                Profile
              </UiLink>
            </li>
            <li>
              <SignOutButton />
            </li>
          </ul>
        </div>
      }
    />
  );
}
