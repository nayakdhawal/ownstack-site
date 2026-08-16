"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

const BUDGET_OPTIONS = [
  "Not sure yet",
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $15,000",
  "$15,000+",
];

const TIMELINE_OPTIONS = [
  "ASAP",
  "Within a month",
  "1–3 months",
  "Flexible / not sure",
];

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none";

export function WorkWithMeForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
      subject: "New project inquiry from ownstack.dev",
      from_name: formData.get("name"),
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      project_info: formData.get("project_info"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
      comments: formData.get("comments"),
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <h2 className="text-xl font-semibold">Got it — thanks.</h2>
        <p className="mt-2 text-sm text-muted">
          I&apos;ll read through what you sent and get back to you within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-muted">Name*</span>
          <input required name="name" type="text" className={inputClasses} />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-muted">Email*</span>
          <input required name="email" type="email" className={inputClasses} />
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-2 block text-muted">Phone (optional)</span>
        <input name="phone" type="tel" className={inputClasses} />
      </label>

      <label className="block text-sm">
        <span className="mb-2 block text-muted">Tell me about the project*</span>
        <textarea
          required
          name="project_info"
          rows={5}
          placeholder="What are you trying to build or fix?"
          className={inputClasses}
        />
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block text-muted">Approximate budget</span>
          <select name="budget" defaultValue={BUDGET_OPTIONS[0]} className={inputClasses}>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-2 block text-muted">Timeline</span>
          <select name="timeline" defaultValue={TIMELINE_OPTIONS[0]} className={inputClasses}>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="mb-2 block text-muted">Anything else? (optional)</span>
        <textarea name="comments" rows={3} className={inputClasses} />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send it over"}
      </button>

      {status === "error" && (
        <p className="text-sm text-muted">
          Something went wrong sending that. Please email me directly at{" "}
          <Link href={`mailto:${CONTACT_EMAIL}`} className="text-accent">
            {CONTACT_EMAIL}
          </Link>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
