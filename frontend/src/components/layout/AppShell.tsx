import type { ReactNode } from "react";
import TopNav from "./TopNav";

type AppShellProps = {
  children: ReactNode;
};

const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <TopNav />
      <div className="mx-auto w-full max-w-[1920px] px-0">{children}</div>
    </div>
  );
};

export default AppShell;