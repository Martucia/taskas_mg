import { useAccountQuery } from "@/entities/account/queries";
import { ProfileBlock } from "@/features/profile/ui/profile-block";
import { UiBlockLayout } from "@/shared/ui/layouts/ui-block-layout";
import { UiSpinner } from "@/shared/ui/ui-spinner";

export default function ProfilePage() {
  const { data } = useAccountQuery();

  return (
    <div>
      <UiBlockLayout>
        {!data ? (
          <div className="w-full py-10 flex justify-center">
            <UiSpinner className="w-10 h-10" />
          </div>
        ) : (
          <ProfileBlock account={data} />
        )}
      </UiBlockLayout>
    </div>
  );
}
