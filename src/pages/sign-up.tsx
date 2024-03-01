import { SignUpForm } from "@/features/auth/ui/sign-up-form";
import { UiFormPageLayout } from "@/shared/ui/layouts/ui-form-page-layout";

export function SignUpPage() {
  return <UiFormPageLayout title="Sign Up" form={<SignUpForm />} />;
}
