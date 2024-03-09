import { Session, } from "next-auth";
import { useSession, } from "next-auth/react";

export const useUser = (): Session["user"] | null => {
  const session = useSession();
  return session.data.user || null;
}