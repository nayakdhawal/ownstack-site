import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { projects } from "@/lib/projects";

const services = [
  {
    title: "n8n Automation & Workflows",
    description:
      "Connect the tools you already use and automate the busywork between them, so manual handoffs stop eating your week.",
  },
  {
    title: "IT Infrastructure Setup",
    description:
      "Servers, domains, email, and cloud accounts set up correctly the first time, with access handed over to you.",
  },
  {
    title: "Customized Internal SaaS",
    description:
      "A private tool built around how your team actually works, not a generic template you have to work around.",
  },
  {
    title: "MVP Development",
    description:
      "Turn an idea into a working product you can put in front of real users, fast enough to still matter.",
  },
  {
    title: "Ideation & Discovery",
    description:
      "Not sure what to build yet? We work through the problem together and land on the right first version.",
  },
  {
    title: "Product Consulting",
    description:
      "An outside technical read on what you're building — what to prioritize, what to cut, what's overbuilt.",
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
            Simplicity of the process — you tell me, I build it.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
            I build focused micro apps, automations, and internal tools for your
            business. You own the code — not a subscription.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work-with-me"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Work with me
            </Link>
            <Link
              href="/#services"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              See services
            </Link>
          </div>
        </section>

        {/* Work with me banner */}
        <section className="border-t border-border bg-card/40">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-6 py-14 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-sm text-accent">have a project in mind?</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Tell me what you need. I&apos;ll tell you what it takes.
              </h2>
              <p className="mt-2 text-sm text-muted">
                Project details, budget range, timeline — takes about two minutes.
              </p>
            </div>
            <Link
              href="/work-with-me"
              className="shrink-0 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Work with me
            </Link>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <p className="font-mono text-sm text-accent">services</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Where I can help.
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
              A look at what a micro app can be.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              These are concept builds that show the kind of focused, single-purpose
              tools I build. Real case studies are on the way.
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
              I build software for small and medium businesses that are tired of
              paying for a dozen tools to do one job each. I build with AI-assisted
              tools like Claude Code, which means a focused app or automation comes
              together in days instead of months — and that speed is what lets a
              one-time build replace a monthly subscription.
            </p>
            <p className="mt-4 max-w-2xl text-muted">
              If you&apos;re chasing renewals, hitting seat limits, or stitching
              together five tools to do the job of one, that&apos;s the problem I
              build for.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
