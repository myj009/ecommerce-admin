import { UserButton } from "@clerk/nextjs";
import React from "react";
import { MainNav } from "./main-nav";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div className="">Store Switcher</div>
        <MainNav className="" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
