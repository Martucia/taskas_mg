import { UiButton } from "@/shared/ui/ui-button";
import { UiTextField } from "@/shared/ui/ui-text-field";
import { useProfileBlock } from "../model/use-profile-block";
import { AccountDto } from "@/shared/api/generated";

export function ProfileBlock({ account }: { account: AccountDto }) {
  const { register, errorMessage, handleSubmit, isLoading } =
    useProfileBlock(account);

  if (!account) return null;

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-[1fr_3fr] gap-10">
      <div>
        <UiTextField
          label="Your username"
          inputProps={{ ...register("userName", { required: true }) }}
        />

        {errorMessage && <div className="text-rose-500">{errorMessage}</div>}

        <UiButton
          disabled={isLoading}
          type="submit"
          className="mt-8"
          variant="primary"
        >
          Save updates
        </UiButton>
      </div>
    </form>
  );
}
