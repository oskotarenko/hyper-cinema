import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavRoute } from "@/config/routes";

type Props = {
  route: NavRoute;
};

export function AppNavigationListItem({ route }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={route.href}
      className={clsx(
        "flex gap-2 px-3 py-2 sm:px-6 md:px-5 rounded-lg hover-colors hover:bg-primary hover:text-black",
        route.href.startsWith(pathname) && "bg-primary text-black",
      )}
    >
      <route.icon />
      <p className="hidden md:block">{route.title}</p>
    </Link>
  );
}
