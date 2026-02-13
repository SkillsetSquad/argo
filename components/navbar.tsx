"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Phone, Mail } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info - hidden on mobile */}
        <div className="hidden lg:flex items-center justify-end py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center gap-6">
            <a href="tel:+971501234567" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 9324286042</span>
            </a>
            <a href="mailto:info@carmineagroexports.com" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@carmineagroexports.com</span>
            </a>
          </div>
        </div>

        {/* Main navbar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold text-xl">
            <Image src="/logo.png" alt="Carmine Agro Exports" width={130} height={90} className="rounded-xl object-cover" />
            {/* <span className="hidden sm:inline">Carmine Agro Exports</span>
            <span className="sm:hidden">Carmine</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
            {/* <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-xl">
              Get Started
            </Button> */}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-xl">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <Image src="/logo.png" alt="Carmine Agro" width={28} height={28} className="rounded-md object-cover" />
                  Carmine Agro
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium text-gray-700 hover:text-emerald-600 transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t space-y-4">
                  <a href="tel:+971501234567" className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600">
                    <Phone className="h-4 w-4" />
                    <span>+91 9324286042</span>
                  </a>
                  <a href="mailto:info@carmineagroexports.com" className="flex items-center gap-2 text-sm text-gray-600 hover:text-emerald-600">
                    <Mail className="h-4 w-4" />
                    <span>info@carmineagroexports.com</span>
                  </a>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-xl mt-4 w-full">
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
