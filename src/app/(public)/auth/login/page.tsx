import { Metadata } from "next";

import { LoginForm } from "../_module/components/LoginForm";

export const metadata: Metadata = {
  title: "Login | Hyper Cinema",
  robots: {
    index: false,
  },
};

export default function LoginPage() {
  return <LoginForm />;
}
