import { RegisterForm } from "../_module/components/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Register | Hyper Cinema',
  robots: {
    index: false
  }
}


export default function RegisterPage() {
  return <RegisterForm />;
}
