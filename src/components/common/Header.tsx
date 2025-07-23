import React from "react";
import MobileNav from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenuItems } from "../NavigationMenuItems";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <>
      <header className="">
        <div className="flex items-center justify-between gap-5 max-w-[1600px] mx-auto px-5 py-4">
          {/* Left: Logo and MobileNav */}
          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <MobileNav />
            </div>
            <Link href="/">
              <Image src="/logo.png" alt="Upmesh" width={80} height={80} />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <NavigationMenuItems />
            </div>
          </div>
          {/* Right: Auth Buttons */}
          <div className="items-center gap-5 hidden md:flex">
            <Button variant="link">Log in</Button>
            <Button>Sign up</Button>
          </div>
          <div className="block md:hidden">
            <Button variant={"link"}>Sign up</Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
