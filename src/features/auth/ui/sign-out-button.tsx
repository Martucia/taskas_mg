import { UiButton } from "@/shared/ui/ui-button";
import Image from "next/image";
import { useSignOut } from "../model/use-sign-out";
import { LogoutIcon } from "@/shared/ui/icons/logout-icon";

export function SignOutButton({ className }: { className?: string }) {
  const { signOut, isLoading } = useSignOut();

  return (
    <UiButton
      onClick={() => signOut({})}
      variant='lined'
      disabled={isLoading}
      className={className}
    >
      <LogoutIcon className="w-6 h-6"/>
      Log Out
    </UiButton>
  );
}

