import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1>There wil be home page</h1>

      <Link href={"/auth/login"} className="bg-primary text-[#000000] p-3 rounded-lg">
        Login
      </Link>
    </div>
  );
}
