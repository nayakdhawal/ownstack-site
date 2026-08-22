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

          <div className="mt-16 border-t border-border pt-8">
            <Link
              href="/work-with-me"
              className="text-sm text-accent transition hover:opacity-80"
            >
              Want something like this? Let&apos;s talk →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
