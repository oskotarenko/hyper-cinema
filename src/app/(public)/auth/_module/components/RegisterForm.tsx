"use client";

import { AtSign, Lock, Pen } from "lucide-react";
import Link from "next/link";

import { register } from "@/actions/auth/register";
import { AppRoutes } from "@/config/routes";
import { extractResponse } from "@/shared/services/response.service";
import { Button } from "@/shared/ui/button";
import { Divider } from "@/shared/ui/divider";
import { Form } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { OAuthButton } from "./OAuthButton";

export function RegisterForm() {
  const handleRegister = async (formData: FormData) => {
    const response = await register(formData);
    extractResponse(response);
  };

  return (
    <div className="max-w-[400px] w-full p-2 flex flex-col gap-4">
      <Form action={handleRegister} title="Register">
        <Input Icon={AtSign} name="email" placeholder="Email" type="text" autoComplete="off" />
        <Input Icon={Lock} name="password" placeholder="Password" type="password" autoComplete="off" />
        <Input Icon={Pen} name="name" placeholder="Name" type="text" autoComplete="off" />
        <Button variant="filled" type="submit">
          Create an account
        </Button>
      </Form>
      <Divider type="horizontal" color="white" />
      <OAuthButton />
      <Link href={AppRoutes.Login}>
        <Button variant="link">Already have an account?</Button>
      </Link>
    </div>
  );
}
