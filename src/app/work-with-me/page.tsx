import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WorkWithMeForm } from "@/components/work-with-me-form";

export const metadata: Metadata = {
  title: "Work with me — mico.",
  description: "Tell me about your project, budget, and timeline.",
};

export default function WorkWithMePage() {
  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[50.4rem] flex-1 px-4 py-8 md:px-8 md:py-10">
        <section className="section-card px-6 py-16 md:px-12 md:py-20">
          <h1 className="text-section-heading text-foreground">
            Tell me about your project.
          </h1>
          <p className="text-body-loose mt-4 text-muted">
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
