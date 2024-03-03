import { ReactNode } from "react";

import Header from "../../components/layout/app-header/Header";
import { AppNav } from "../../components/layout/app-nav/AppNav";

type Props = {
  children: ReactNode;
};

export default function ProtectedLayout({ children }: Props) {
  return (
    <div className="app-layout">
      <AppNav />
      <main className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-2">{children}</div>
      </main>
    </div>
  );
}
