import Link from "next/link";

const CONTACT_EMAIL = "nayakdhawal@gmail.com";

const comparison = [
  {
    renting: "Pay every single month, forever, whether you use it or not",
    owning: "Pay once to have it built. It's yours after that.",
  },
  {
    renting: "One tool for invoices, another for bookings, another for stock",
    owning: "One app, built for exactly the job you need done",
  },
  {
    renting: "Your data lives on someone else's servers under their terms",
    owning: "Your data, your app, your rules",
  },
  {
    renting: "Price goes up, features get paywalled, the product changes on you",
    owning: "It works the way it did the day you got it — unless you ask for a change",
  },
  {
    renting: "You're locked into whatever the vendor decided to build",
    owning: "It's built around your actual workflow, not a generic one",
  },
];

const steps = [
  {
    number: "01",
    title: "Tell me what's eating your time",
    description:
      "A spreadsheet you re-do every week, a booking process held together by texts and calls, stock counts nobody trusts. We talk it through — 20 minutes, no pitch deck.",
  },
  {
    number: "02",
    title: "I build it, fast",
    description:
      "I build with Claude Code, so a focused micro app comes together in days, not months — and that speed shows up as a lower price for you, not a lower bar for quality.",
  },
  {
    number: "03",
    title: "You own it. Fully.",
    description:
      "You get the app and the source code. No monthly invoice, no seat limits, no 'upgrade to unlock this'. If you want changes later, that's a separate, optional conversation.",
  },
];

const examples = [
  {
    title: "Inventory & stock tracker",
    description: "Know what you have, what's low, and what to reorder — without a spreadsheet nobody trusts.",
  },
  {
    title: "Booking & scheduling tool",
    description: "Let customers book time with you, built around your actual calendar and rules.",
  },
  {
    title: "Client intake & mini-CRM",
    description: "Capture leads and track where each one stands, without paying per seat for a CRM.",
  },
  {
    title: "Invoice & quote generator",
    description: "Turn a job into a professional invoice or quote in seconds, branded as yours.",
  },
  {
    title: "Internal dashboard",
    description: "One screen that pulls together the numbers you actually check every day.",
  },
  {
    title: "Order & delivery tracker",
    description: "Track an order from placed to delivered, visible to you and your customer.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="font-mono text-sm font-semibold tracking-tight">
            ownstack<span className="text-accent">.</span>
          </span>
          <nav className="hidden gap-8 text-sm text-muted md:flex">
            <Link href="#problem" className="transition hover:text-foreground">
              Why owning wins
            </Link>
            <Link href="#how-it-works" className="transition hover:text-foreground">
              How it works
            </Link>
            <Link href="#examples" className="transition hover:text-foreground">
              Examples
            </Link>
            <Link href="#about" className="transition hover:text-foreground">
              About
            </Link>
          </nav>
          <Link
            href="#contact"
            className="rounded-full border border-border px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
          >
            Get in touch
          </Link>
        </div>
      </header>

      <main className="flex flex-col">
        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-6 pt-20 pb-24 md:pt-28 md:pb-32">
          <p className="font-mono text-sm text-accent">for small & medium businesses</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Stop renting your software.{" "}
            <span className="text-accent">Own it.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">
            I build small, focused apps for the one job that’s costing you the most
            time — using AI-assisted development to build fast and pass the savings
            to you. You get the app and the code. No subscription, no renewal, no
            chasing five different products to run your business.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
            >
              Tell me what’s slowing you down
            </Link>
            <Link
              href="#examples"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              See example apps
            </Link>
          </div>
        </section>

        {/* Problem / Renting vs Owning */}
        <section id="problem" className="border-t border-border bg-card/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <p className="font-mono text-sm text-accent">the subscription trap</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              You’re renting a dozen tiny tools to run one business.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              A booking tool here, a form builder there, an inventory app, a CRM you
              only use for one list. Each one is a few dollars a month — until you
              add them up.
            </p>

            <div className="mt-14 overflow-hidden rounded-2xl border border-border">
              <div className="grid grid-cols-2 divide-x divide-border">
                <div className="bg-card px-6 py-4">
                  <span className="font-mono text-sm text-muted">Renting a tool</span>
                </div>
                <div className="bg-accent/10 px-6 py-4">
                  <span className="font-mono text-sm text-accent">Owning your app</span>
                </div>
              </div>
              {comparison.map((row) => (
                <div
                  key={row.renting}
                  className="grid grid-cols-2 divide-x divide-border border-t border-border"
                >
                  <div className="px-6 py-5 text-sm text-muted">{row.renting}</div>
                  <div className="px-6 py-5 text-sm">{row.owning}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <p className="font-mono text-sm text-accent">how it works</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Three steps. No sales process.
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="rounded-2xl border border-border bg-card p-6">
                  <span className="font-mono text-sm text-accent">{step.number}</span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm text-muted">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Examples */}
        <section id="examples" className="border-t border-border bg-card/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <p className="font-mono text-sm text-accent">what a micro app looks like</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Small, sharp, and built for one job.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              These are starting points, not a menu. If it’s a repetitive, manual
              part of running your business, it’s probably a good fit.
            </p>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {examples.map((example) => (
                <div
                  key={example.title}
                  className="rounded-2xl border border-border bg-card p-6 transition hover:border-accent/60"
                >
                  <h3 className="font-medium">{example.title}</h3>
                  <p className="mt-2 text-sm text-muted">{example.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why AI-assisted */}
        <section className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              <div>
                <p className="font-mono text-sm text-accent">how I build</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                  Built with Claude Code. Owned entirely by you.
                </h2>
              </div>
              <p className="text-muted">
                I build with Claude Code, an AI coding tool, which means a focused
                micro app that would normally take weeks gets built in days. That
                speed is the whole reason a one-time build can replace a monthly
                subscription. It doesn’t mean corners get cut — you still get real,
                working code, reviewed and tested, that you can hand to any
                developer in the future. It’s just built faster, so it costs you
                less.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border bg-card/40">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <p className="font-mono text-sm text-accent">about</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              Hi, I’m Dhawal.
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              I build small software for small and medium businesses that are tired
              of paying for a dozen tools to do one job each. If you’re chasing
              renewals, hitting seat limits, or paying for features you never use —
              that’s the problem I build for.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border">
          <div className="mx-auto w-full max-w-6xl px-6 py-24">
            <p className="font-mono text-sm text-accent">get in touch</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
              What’s the one thing eating your time every week?
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Tell me what it is and how you handle it today. I’ll tell you plainly
              whether a micro app makes sense — and roughly what it would take to
              build.
            </p>
            <div className="mt-8">
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
              >
                Email {CONTACT_EMAIL}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-muted md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Dhawal Nayak. Own what you build.</span>
          <Link href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-accent">
            {CONTACT_EMAIL}
          </Link>
        </div>
      </footer>
    </div>
  );
}
