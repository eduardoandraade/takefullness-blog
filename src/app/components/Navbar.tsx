"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import TakeLogo from "../assets/logo-takefullness.png";
import { useState } from "react";
import { Button } from "@/components/ui/button"; // Do shadcn/ui
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"; // Drawer do shadcn/ui

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-5 bg-white dark:bg-zinc-950 shadow-md">
      {/* Logo e Nome */}
      <div className="flex items-center space-x-1">
        <Image
          src={TakeLogo}
          alt="TakeFullness Logo"
          width={40}
          height={40}
          priority
        />
        <Link href="/" className="font-bold text-2xl">
          <span>Take</span><span className="text-primary">Fullness</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-6">
        <Link href="/" className="text-lg font-medium hover:text-primary">
          Início
        </Link>
        <Link href="/blog" className="text-lg font-medium hover:text-primary">
          Blog
        </Link>
        <Link
          href="/contact"
          className="text-lg font-medium hover:text-primary"
        >
          Deixe sua mensagem
        </Link>
        <ModeToggle />
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center">
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" aria-label="Abrir menu">
              {/* Ícone de Hambúrguer */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-white">
            <SheetHeader>
              <nav className="flex flex-col items-end space-y-4 py-5">
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Início
                </Link>
                <Link href="/blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </Link>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Deixe sua mensagem
                </Link>
                <div className="mt-4">
                  <ModeToggle />
                </div>
              </nav>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
