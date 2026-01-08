"use client";

import { Github, Menu, X } from "lucide-react";
import NavLinks from "./navlinks";
import NavLinks_Mobile from "./navlinks-mobile";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-card border-b-sidebar-border border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        {/* top bar */}
        <div className="h-16 flex justify-between items-center">
          {/* logo */}
          <div className="text-lg font-semibold tracking-wide">
            <span className="text-white">Ghofur</span>
            <span className="text-primary">.backend</span>
          </div>

          {/* TABLET - DESKTOP MENU */}
          {/* menu */}
          <div className="flex justify-center">
            <NavLinks />
          </div>

          {/* action */}
          <div className="items-center gap-3 hidden md:flex px-2">
            <a href="https://github.com/Ghofur102">
              <Button
                variant="default"
                size="icon"
                className="rounded-full text-black bg-white "
              >
                <Github className="w-5 h-5" />
              </Button>
            </a>

            <Button variant="outline" size="sm" className="rounded-full px-4">
              NIGHT
            </Button>
          </div>

          {/* MOBILE MENU */}
          <Button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md  hover:bg-accent"
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-6">
            <NavLinks_Mobile onNavigate={() => setOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}
