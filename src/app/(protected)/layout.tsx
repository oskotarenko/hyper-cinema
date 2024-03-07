import { ReactNode } from "react";

import Header from "./_module/components/header/Header";
import { AppNavigation } from "./_module/components/navigation/Navigation";

type Props = {
  children: ReactNode;
};

export default function ProtectedLayout({ children }: Props) {
  return (
    <div className="app-layout">
      <AppNavigation />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-2">{children}</div>
      </main>
    </div>
  );
}
