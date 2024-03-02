"use client";

import { AtSign, Lock, Pen } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import toast from "react-hot-toast";

import { register } from "../../services/auth/auth.service";
import { Button } from "../ui/button";
import { Divider } from "../ui/divider";
import { Form } from "../ui/form";
import { Input } from "../ui/input";
import { OAuthButtons } from "./OAuthButtons";

export function RegisterForm() {
  const [isPending, startPending] = useTransition();

  const handleRegister = (formData: FormData) => {
    startPending(async () => {
      const response = await register(formData);

      if ("error" in response) {
        toast.error(response.error);
        return;
      }
    });
  };

  return (
    <div className="w-[400px] p-2 flex flex-col gap-4">
      <Form action={handleRegister} title="Register">
        <Input Icon={AtSign} name="email" placeholder="Email" type="text" autoComplete="off" />
        <Input
          Icon={Lock}
          name="password"
          placeholder="Password"
          type="password"
          autoComplete="off"
        />
        <Input Icon={Pen} name="name" placeholder="Name" type="text" autoComplete="off" />
        <Button variant="filled" type="submit">
          Create an account
        </Button>
      </Form>
      <Divider type="horizontal" color="white" />
      <OAuthButtons />
      <Link href={"/auth/login"}>
        <Button variant="link" disabled={isPending}>
          Already have an account?
        </Button>
      </Link>
    </div>
  );
}
