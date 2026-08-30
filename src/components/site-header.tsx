"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogoMark } from "@/components/logo-mark";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const onWorkWithMe = pathname === "/work-with-me";

  return (
    <header className="glass sticky top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
          <LogoMark className="h-6 w-6" />
          {SITE_NAME}
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-muted-2 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        {!onWorkWithMe && (
          <Link
            href="/work-with-me"
            className="btn-glass-bevel rounded-2xl bg-accent px-5 py-2 text-sm font-medium text-accent-foreground transition hover:opacity-30"
          >
            Get in touch
          </Link>
        )}
      </div>
    </header>
  );
}
