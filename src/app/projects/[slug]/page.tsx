import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ScreenshotPlaceholder } from "@/components/screenshot-placeholder";
import { getProjectBySlug, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ownstack`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="flex min-h-full flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto w-full max-w-4xl px-6 py-20 md:py-28">
          <Link href="/#work" className="text-sm text-muted transition hover:text-accent">
            ← Back to work
          </Link>

          <span className="mt-8 inline-block rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
            Concept build — illustrative example
          </span>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-muted">{project.summary}</p>

          <ul className="mt-8 space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm">
                <span className="text-accent">—</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {project.screenshots.map((screenshot) => (
              <ScreenshotPlaceholder key={screenshot.label} {...screenshot} />
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-card p-8 text-center">
            <h2 className="text-xl font-semibold">Want something like this?</h2>
            <p className="mt-2 text-sm text-muted">
              Tell me about your project and I&apos;ll tell you what it would take to build.
            </p>
            <Link
              href="/work-with-me"
              className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Work with me
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
