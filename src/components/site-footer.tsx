import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-[86.4rem] px-4 pb-4 md:px-8 md:pb-6">
      <div className="section-card flex flex-col gap-2 px-6 py-8 text-sm text-muted-2 md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Dhawal Nayak. Own what you build.</span>
        <Link href={`mailto:${CONTACT_EMAIL}`} className="text-foreground transition hover:text-muted">
          {CONTACT_EMAIL}
        </Link>
      </div>
    </footer>
  );
}
