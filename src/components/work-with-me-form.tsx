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
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-2 focus:border-accent focus:outline-none";

const labelClasses = "mb-2 block text-sm font-medium text-muted";

export function WorkWithMeForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "",
      subject: "New project inquiry from mico.",
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
      <div className="glass-card rounded-3xl p-8">
        <h2 className="text-base font-semibold text-foreground">Got it — thanks.</h2>
        <p className="text-body-loose mt-2 text-muted">
          I&apos;ll read through what you sent and get back to you within a couple of days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={labelClasses}>Name*</span>
          <input required name="name" type="text" className={inputClasses} />
        </label>
        <label className="block">
          <span className={labelClasses}>Email*</span>
          <input required name="email" type="email" className={inputClasses} />
        </label>
      </div>

      <label className="block">
        <span className={labelClasses}>Phone (optional)</span>
        <input name="phone" type="tel" className={inputClasses} />
      </label>

      <label className="block">
        <span className={labelClasses}>Tell me about the project*</span>
        <textarea
          required
          name="project_info"
          rows={4}
          placeholder="What are you trying to build or fix?"
          className={inputClasses}
        />
      </label>

      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className={labelClasses}>Approximate budget</span>
          <select name="budget" defaultValue={BUDGET_OPTIONS[0]} className={inputClasses}>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelClasses}>Timeline</span>
          <select name="timeline" defaultValue={TIMELINE_OPTIONS[0]} className={inputClasses}>
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="block">
        <span className={labelClasses}>Anything else? (optional)</span>
        <textarea name="comments" rows={3} className={inputClasses} />
      </label>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-glass-bevel w-full rounded-2xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send it over"}
      </button>

      {status === "error" && (
        <p className="text-sm text-muted">
          Something went wrong sending that. Please email me directly at{" "}
          <Link href={`mailto:${CONTACT_EMAIL}`} className="text-foreground underline">
            {CONTACT_EMAIL}
          </Link>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
