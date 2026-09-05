import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BOOKING_URL } from "@/lib/site";
import { projects } from "@/lib/projects";

const services = [
  {
    title: "n8n Automation & Workflows",
    description: "Your tools, connected. The manual handoffs between them disappear.",
  },
  {
    title: "IT Infrastructure Setup",
    description: "Servers, domains, email, cloud — set up right, handed over to you.",
  },
  {
    title: "Customized Internal SaaS",
    description: "A private tool built around how your team actually works.",
  },
  {
    title: "MVP Development",
    description: "An idea turned into a working product, fast enough to still matter.",
  },
  {
    title: "Ideation & Discovery",
    description: "Not sure what to build yet? We find the right first version together.",
  },
  {
    title: "Product Consulting",
    description: "An outside technical read on what to build next — and what to cut.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-[104rem] flex-col gap-4 px-4 py-4 md:px-6 md:py-6">
        {/* Hero */}
        <section className="section-card flex min-h-[calc(100vh-7rem)] flex-col items-start justify-center px-6 py-16 text-left md:px-12 md:py-24">
          <p className="text-body-loose max-w-xl text-muted">
            We design and build focused micro apps, automations, and internal
            tools for businesses. You own the app outright, no
            subscriptions, no lock-in, no user limits.
          </p>
          <h1 className="text-hero-display mt-4 text-foreground">Your Idea, Your App</h1>
          <div className="mt-10 flex flex-wrap items-center justify-start gap-4">
            <Link
              href="/work-with-me"
              className="btn-glass-bevel rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Let&apos;s build it
            </Link>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl px-6 py-3 text-sm font-medium text-foreground transition hover:bg-card"
            >
              Book a call
            </Link>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="section-card px-6 py-16 md:px-12 md:py-20">
          <h2 className="text-section-heading text-foreground">What I build.</h2>
          <p className="text-body-loose mt-4 max-w-md text-muted">
            Six ways I plug into a small business that&apos;s outgrown its
            spreadsheets and subscriptions.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="glass-card rounded-3xl p-6">
                <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our work */}
        <section id="work" className="section-card px-6 py-16 md:px-12 md:py-20">
          <h2 className="text-section-heading text-foreground">
            What a micro app looks like.
          </h2>
          <p className="text-body-loose mt-4 max-w-md text-muted">
            Concept builds showing the kind of focused, single-purpose tools I
            build. Real case studies are coming soon.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-background transition hover:border-border-mid"
              >
                <div className="glass-card flex aspect-[4/3] items-center justify-center">
                  <span className="text-xs font-medium text-muted-2">
                    {project.category}
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-muted-2">Concept build</span>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{project.tagline}</p>
                  <span className="mt-4 inline-block text-sm font-medium text-foreground opacity-0 transition group-hover:opacity-100">
                    View project →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="section-card px-6 py-16 md:px-12 md:py-20">
          <h2 className="text-section-heading text-foreground">Hi, I&apos;m Dhawal.</h2>
          <p className="text-body-loose mt-6 max-w-xl text-muted">
            I build software for small and medium businesses — fast, focused,
            and built to be owned, not rented. I work with AI-assisted tools
            like Claude Code, which means I move at a pace traditional
            development can&apos;t match, without cutting corners on the code
            itself. Every build ships reviewed, tested, and handed to you in
            full.
          </p>
          <p className="text-body-loose mt-4 max-w-xl text-muted">
            If you&apos;re stitching together five subscriptions to do the job
            of one, that&apos;s exactly the gap I fill.
          </p>
          <Link
            href="/work-with-me"
            className="mt-8 inline-block text-sm font-semibold text-foreground transition hover:text-muted"
          >
            Have a project in mind? Let&apos;s talk →
          </Link>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
