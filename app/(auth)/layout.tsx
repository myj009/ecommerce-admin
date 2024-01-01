import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center h-full items-center">{children}</div>
  );
};

export default AuthLayout;
