import { Logo } from "@/shared/ui/logo";

import { AppNavigationList } from "./NavigationList";

export function AppNavigation() {
  return (
    <div className="flex justify-center sticky top-full bg-background p-2 z-[100] tablet:flex-col tablet:h-full">
      <Logo href="/home" />
      <AppNavigationList />
    </div>
  );
}
