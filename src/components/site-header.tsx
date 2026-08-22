"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE_NAME } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const onWorkWithMe = pathname === "/work-with-me";

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
          {SITE_NAME}
          <span className="text-accent">.</span>
        </Link>
        <nav className="hidden gap-8 text-sm text-muted md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
        {!onWorkWithMe && (
          <Link
            href="/work-with-me"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            Work with me
          </Link>
        )}
      </div>
    </header>
  );
}
