'use client';

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href='/'>
          <MenuItem setActive={setActive} active={active} item="Home" >
            <div className="flex flex-col space-y-4 text-sm">
              
            </div>

          </MenuItem>
        </Link>

        <MenuItem setActive={setActive} active={active} item="Products&Services">
        <HoveredLink href='/Product&Services'>Our services</HoveredLink>
        </MenuItem>
        <Link href='/'>
          <MenuItem setActive={setActive} active={active} item="contact US">
            <HoveredLink href='/contactUs'>contact US</HoveredLink>
          </MenuItem>
        </Link>

      </Menu>
    </div>
  )
}

export { Navbar };