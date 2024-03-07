"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { DEFAULT_LOGGED_IN_REDIRECT } from "@/config/routes";
import { Button } from "@/shared/ui/button";

export function OAuthButtons() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = (provider: "google" | "github") => {
    signIn(provider, {
      callbackUrl: callbackUrl || DEFAULT_LOGGED_IN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button variant="outline" onClick={() => onClick("google")}>
        <FcGoogle className="h-5 w-5" /> Google
      </Button>
      <Button variant="outline" onClick={() => onClick("github")}>
        <FaGithub className="h-5 w-5" /> Github
      </Button>
    </div>
  );
}
