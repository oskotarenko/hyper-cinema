"use client";

import { AtSign, Lock } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

import { login } from "../../services/auth/auth.service";
import { Button } from "../ui/button";
import { Divider } from "../ui/divider";
import { Form, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { OAuthButtons } from "./OAuthButtons";

export function LoginForm() {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email is already in use with different provider"
      : "";
  const callbackUrl = searchParams.get("callbackUrl");
  const [isPending, startPending] = useTransition();
  const [error, setError] = useState<string>("");

  const handleLogin = (formData: FormData) => {
    setError("");

    startPending(async () => {
      const response = await login(formData, callbackUrl);

      if ("error" in response) {
        setError(response.error);
      }
    });
  };

  return (
    <div className="w-[400px] p-2 flex flex-col gap-4">
      <Form action={handleLogin} title="Login">
        <Input Icon={AtSign} name="email" placeholder="Email" type="email" autoComplete="off" />
        <Input
          Icon={Lock}
          name="password"
          placeholder="Password"
          type="password"
          autoComplete="off"
        />
        <FormMessage type="error" message={error || urlError} />
        <Button variant="filled" type="submit">
          Login
        </Button>
      </Form>
      <Divider type="horizontal" color="white" />
      <OAuthButtons />
      <Link href={"/auth/register"}>
        <Button variant="link" disabled={isPending}>
          Don’t have an account?
        </Button>
      </Link>
    </div>
  );
}
