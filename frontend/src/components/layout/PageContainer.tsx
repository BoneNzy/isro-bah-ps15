import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className="px-5 py-5">{children}</div>;
};

export default PageContainer;