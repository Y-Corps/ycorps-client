import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-screen items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8576FF] to-[#1C1678]">
    {children}
    </div>;
};
export default layout;
