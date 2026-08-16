import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Dhawal Nayak. Own what you build.</span>
        <Link href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-accent">
          {CONTACT_EMAIL}
        </Link>
      </div>
    </footer>
  );
}
