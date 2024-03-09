import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className="space-y-2 p-2">
      <h1>Contacts</h1>
      <div className="flex flex-wrap gap-2 mt-2">
        <Link
          href="https://t.me/oskotarenko"
          target="_blank"
          className="flex gap-2 items-center hover:text-primary hover-colors"
        >
          <LinkIcon /> Telegram
        </Link>
        <Link
          href="https://github.com/oskotarenko"
          target="_blank"
          className="flex gap-2 items-center hover:text-primary hover-colors text-nowrap"
        >
          <LinkIcon /> Github repo
        </Link>
        <Link
          href="https://oskotarenko.dev"
          target="_blank"
          className="flex gap-2 items-center hover:text-primary hover-colors"
        >
          <LinkIcon /> Website
        </Link>
      </div>
    </div>
  );
}
