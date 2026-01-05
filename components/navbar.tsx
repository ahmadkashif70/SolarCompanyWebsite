"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { Home } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Always clickable to home */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#18181b] to-accent rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold text-white">ED</span>
            </div>
            <span className="text-xl font-semibold tracking-tight">
              EngiDev<span className="text-accent">.</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {/* Home Icon */}
            <Link
              href="/"
              className={cn(
                "p-2 transition-colors hover:text-foreground",
                pathname === "/" ? "text-foreground" : "text-muted-foreground"
              )}
              aria-label="Home"
            >
              <Home className="h-5 w-5" />
            </Link>

            {/* Other Links */}
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
