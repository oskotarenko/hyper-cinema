"use client";

import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

import { DEFAULT_LOGGED_IN_REDIRECT } from "@/config/routes";
import { Button } from "@/shared/ui/button";

export function OAuthButton() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const onClick = () => {
    signIn("google", {
      callbackUrl: callbackUrl || DEFAULT_LOGGED_IN_REDIRECT,
    });
  };

  return (
    <div className="flex items-center w-full gap-x-2">
      <Button variant="outline" onClick={() => onClick()}>
        <FcGoogle className="h-5 w-5" /> Google
      </Button>
    </div>
  );
}
