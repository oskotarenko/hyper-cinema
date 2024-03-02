import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div>
      <h1>Aapp reached!</h1>
      {children}
    </div>
  );
}
