import { LinkIcon, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";

export default function AboutPage() {
  return (
    <div className="p-4 space-y-6 w-full h-full">
      <Link href="/" className="flex gap-2 items-center">
        <Image src={logo} alt="Hyper Cinema logo" width={50} height={50} className="w-[48px] h-48px" />
        <h2 className="font-semibold">Hyper Cinema</h2>
      </Link>
      <div className="space-y-4">
        <div>
          <h1 className="text-red-500">Disclaimer</h1>
          <p>
            This application is <span className="text-red-500">not a real product</span>, but only a training project.{" "}
          </p>
          <p>
            When using Hyper Cinema,{" "}
            <span className="text-red-500">
              do not use confidential information or use it on your own risk (include Google & Github OAuth).
            </span>
            <p>If you provided confidential information, you may contact me to request deletion.</p>
          </p>
          <p>The author of the project is not responsible for the security of the data provided.</p>
        </div>
        <div className="text-lg">
          <h1>What kind of project is this?</h1>
          <p>
            Hyper Cinema is a full-stack web-application inspired by the idea and design of the web-application of one
            of the cinemas in my city. This is not the first project on my educational path, but it is the first one
            that I enjoyed.
          </p>
        </div>
        <div>
          <h1>Stack</h1>
          <p>
            Framework —{" "}
            <Link href="https://nextjs.org/" target="_blank" className="text-primary font-bold">
              Next.js
            </Link>
          </p>
          <p>
            Database —{" "}
            <Link href="https://www.postgresql.org/" target="_blank" className="text-primary font-bold">
              PostgreSQL
            </Link>
          </p>
          <p>
            ORM —{" "}
            <Link href="https://www.prisma.io/" target="_blank" className="text-primary font-bold">
              Prisma
            </Link>
          </p>
          <p className="w-full desktop-sm:w-2/3">
            To be honest, this is the second version of the app. The first version was developed with separate front-end
            and back-end parts. The backend was written in Nest.js + TypeORM. However, this application does not require
            complex calculations, only database queries. Because of this, I decided to simplify the architecture to use
            Prisma directly on the Next.js server in server-actions.
          </p>
        </div>
        <div>
          <h1>Contacts</h1>
          <div className="flex gap-4 mt-2">
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
              className="flex gap-2 items-center hover:text-primary hover-colors"
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
      </div>
    </div>
  );
}
