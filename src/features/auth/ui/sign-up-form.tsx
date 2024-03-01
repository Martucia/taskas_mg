import { UiTextField } from "@/shared/ui/ui-text-field";
import { useSignUpForm } from "../model/use-sign-up-form";
import { UiButton } from "@/shared/ui/ui-button";
import { ROUTES } from "@/shared/constants/routes";
import { UiLink } from "@/shared/ui/ui-link";

export function SignUpForm() {
  const { handleSubmit, isLoading, register, errorMessage } = useSignUpForm();

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
      <UiTextField
        label="User Name"
        inputProps={{ ...register("accountData.userName", { required: true }) }}
      />
      <UiTextField
        label="Email"
        inputProps={{ type: "email", ...register("email", { required: true }) }}
      />
      <UiTextField
        label="Password"
        inputProps={{
          type: "password",
          ...register("password", { required: true }),
        }}
      />
      <UiButton
        type="submit"
        disabled={isLoading}
        className="text-whiteT"
        variant="primary"
      >
        Sign Up
      </UiButton>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}

      <UiLink className="justify-center text-terq" href={ROUTES.SIGN_IN}>
        Sign In
      </UiLink>
    </form>
  );
}
