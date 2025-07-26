import Header from "@/components/common/Header";
import React from "react";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1600px] mx-auto px-5">
      <Header />
      {children}
    </div>
  );
};

export default PageLayout;
