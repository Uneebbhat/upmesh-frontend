import Header from "@/components/common/Header";
import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
