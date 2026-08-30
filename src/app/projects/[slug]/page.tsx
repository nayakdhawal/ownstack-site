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
    title: `${project.title} — CRUNCH`,
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
      <main className="mx-auto w-full max-w-[67.2rem] flex-1 px-4 py-8 md:px-8 md:py-10">
        <section className="section-card px-6 py-16 md:px-12 md:py-20">
          <Link
            href="/#work"
            className="text-sm font-medium text-muted transition hover:text-foreground"
          >
            ← Back to work
          </Link>

          <span className="glass-card mt-8 inline-block rounded-full px-3 py-1 text-xs font-medium text-muted-2">
            Concept build — illustrative example
          </span>

          <h1 className="text-section-heading mt-4 text-foreground">{project.title}</h1>
          <p className="text-body-loose mt-4 max-w-2xl text-muted">{project.tagline}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-2"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-body-loose mt-10 max-w-2xl text-muted">{project.summary}</p>

          <ul className="mt-8 space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm text-foreground">
                <span className="text-muted-2">—</span>
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
              className="text-sm font-semibold text-foreground transition hover:text-muted"
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
