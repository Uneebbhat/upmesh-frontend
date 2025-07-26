import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

import { Button } from "../ui/button";
import { NavigationMenuItems } from "../NavigationMenuItems";

const Header = () => {
  return (
    <>
      <header className="">
        <div className="flex items-center justify-between gap-5 py-4">
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
            <Button variant="link" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href={"/signup"}>Sign up</Link>
            </Button>
          </div>
          <div className="block md:hidden">
            <Button variant={"link"} asChild>
              <Link href={"/signup"}>Sign up</Link>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
