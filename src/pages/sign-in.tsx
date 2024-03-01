import { SignInForm } from "@/features/auth/ui/sign-in-form";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";

export function SignInPage() {
  return <UiFormPageLayout title="Sign In" form={<SignInForm />} />;
}
