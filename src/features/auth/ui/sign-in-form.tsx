import { UiTextField } from "@/shared/ui/ui-text-field";
import { UiButton } from "@/shared/ui/ui-button";
import { ROUTES } from "@/shared/constants/routes";
import { UiLink } from "@/shared/ui/ui-link";
import { useSignInForm } from "../model/use-sign-in-form";

export function SignInForm() {
  const { handleSubmit, isLoading, register, errorMessage } = useSignInForm();

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
      <UiButton type="submit" disabled={isLoading} className="text-whiteT" variant="primary">
        Sign In
      </UiButton>
      {errorMessage && <div className="text-rose-500">{errorMessage}</div>}

      <UiLink className="justify-center text-terq" href={ROUTES.SIGN_UP}>
        Sign Up
      </UiLink>
    </form>
  );
}
