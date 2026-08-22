import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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

      <main className="flex flex-col">
        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-6 pt-20 pb-20 md:pt-28 md:pb-24">
          <p className="font-mono text-sm text-accent">for small & medium businesses</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Simplicity of the process. You tell me, I build it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
            I design and build focused micro apps, automations, and internal
            tools for small businesses. You own the code outright — no
            subscriptions, no lock-in.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work-with-me"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Work with me
            </Link>
            <Link
              href="/#work"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              See the work
            </Link>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <p className="font-mono text-sm text-accent">services</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              What I build.
            </h2>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="font-medium">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our work */}
        <section id="work" className="border-t border-border bg-card/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <p className="font-mono text-sm text-accent">our work</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              What a micro app looks like.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Concept builds showing the kind of focused, single-purpose tools I
              build. Real case studies are coming soon.
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition hover:border-accent/60"
                >
                  <span className="w-fit rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted">
                    Concept build
                  </span>
                  <h3 className="mt-4 font-medium">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted">{project.tagline}</p>
                  <span className="mt-4 text-sm text-accent opacity-0 transition group-hover:opacity-100">
                    View project →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <p className="font-mono text-sm text-accent">about</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Hi, I&apos;m Dhawal.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              I build software for small and medium businesses — fast, focused,
              and built to be owned, not rented. I work with AI-assisted tools
              like Claude Code, which means I move at a pace traditional
              development can&apos;t match, without cutting corners on the code
              itself. Every build ships reviewed, tested, and handed to you in
              full.
            </p>
            <p className="mt-4 max-w-2xl text-muted">
              If you&apos;re stitching together five subscriptions to do the job
              of one, that&apos;s exactly the gap I fill.
            </p>
            <Link
              href="/work-with-me"
              className="mt-6 inline-block text-sm text-accent transition hover:opacity-80"
            >
              Have a project in mind? Let&apos;s talk →
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
