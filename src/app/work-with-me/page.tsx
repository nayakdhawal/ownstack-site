import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WorkWithMeForm } from "@/components/work-with-me-form";

export const metadata: Metadata = {
  title: "Work with me — ownstack",
  description: "Tell me about your project, budget, and timeline.",
};

export default function WorkWithMePage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-2xl px-6 py-20 md:py-28">
          <p className="font-mono text-sm text-accent">work with me</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Tell me about your project.
          </h1>
          <p className="mt-4 text-muted">
            A few details on what you need, your budget range, and your timeline. I&apos;ll
            read it myself and get back to you within a couple of days — no sales team,
            no auto-responder.
          </p>

          <div className="mt-12">
            <WorkWithMeForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
