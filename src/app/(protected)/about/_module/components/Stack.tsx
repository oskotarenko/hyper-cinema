import Link from "next/link";

export default function Stack() {
  return (
    <div className="p-2 border rounded-lg space-y-2">
      <h1>Stack</h1>
      <div>
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
      </div>
      <p>
        To be honest, this is the second version of the app. The first version was developed with separate front-end and
        back-end parts. The backend was written in Nest.js + TypeORM. However, this application does not require complex
        calculations, only database queries. Because of this, I decided to simplify the architecture to use Prisma
        directly on in server-actions.
      </p>
    </div>
  );
}
