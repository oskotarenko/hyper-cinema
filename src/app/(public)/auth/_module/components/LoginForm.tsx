"use client";

import { AtSign, Lock } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTransition } from "react";

import { login } from "@/actions/auth/login";
import { AppRoutes } from "@/config/routes";
import { extractResponse } from "@/shared/services/response.service";
import { Button } from "@/shared/ui/button";
import { Divider } from "@/shared/ui/divider";
import { Form, FormMessage } from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { OAuthButton } from "./OAuthButton";

export function LoginForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked" ? "Email is already in use with different provider" : "";
  const callbackUrl = searchParams.get("callbackUrl");
  const [isPending, startPending] = useTransition();

  const handleLogin = (formData: FormData) => {
    startPending(async () => {
      const response = await login(formData, callbackUrl);
      extractResponse(response);
    });
  };

  return (
    <div className="w-[400px] p-2 flex flex-col gap-4">
      <Form action={handleLogin} title="Login">
        <Input Icon={AtSign} name="email" placeholder="Email" type="email" autoComplete="off" />
        <Input Icon={Lock} name="password" placeholder="Password" type="password" autoComplete="off" />
        <FormMessage type="error" message={urlError} />
        <Button variant="filled" type="submit">
          Login
        </Button>
      </Form>
      <Divider type="horizontal" color="white" />
      <OAuthButton />
      <Link href={AppRoutes.Register}>
        <Button variant="link" disabled={isPending}>
          Don’t have an account?
        </Button>
      </Link>
    </div>
  );
}
