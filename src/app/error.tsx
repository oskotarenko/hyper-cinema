"use client";

import { RotateCcw } from "lucide-react";
import Link from "next/link";

import { Button } from "@/shared/ui/button";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[400px] h-fit flex flex-col gap-2 justify-center items-center text-center z-10">
        <h1>Something went wrong</h1>
        <Button variant="outline" icon={RotateCcw} onClick={reset}>
          Try Again
        </Button>
        <p>
          If you are unable to resolve the error, please send us an
          <Link href="mailto:oleksii.skotarenko@gmail.com" className="text-primary hover:text-primary/70">
            {" "}
            email{" "}
          </Link>
          or contact us via
          <Link href="https://t.me/oskotarenko" target="_blank" className="text-primary hover:text-primary/70">
            {" "}
            Telegram
          </Link>
        </p>
      </div>
    </div>
  );
}
