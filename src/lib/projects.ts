export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  tech: string[];
  summary: string;
  highlights: string[];
  screenshots: { label: string; description: string }[];
};

// Concept builds illustrating the kind of micro apps this site sells —
// not real client work. Swap these out once real case studies exist.
export const projects: Project[] = [
  {
    slug: "field-service-dispatch",
    title: "Field Service Booking & Dispatch",
    tagline: "Book, assign, and track field jobs from one screen.",
    category: "MVP Development",
    tech: ["Next.js", "n8n", "Postgres"],
    summary:
      "A concept build for a small field-service business juggling bookings over text, calls, and a shared spreadsheet. Customers book a slot online, jobs land on a dispatch board, and each technician sees only their own schedule for the day.",
    highlights: [
      "Customer-facing booking form with real availability, not a generic calendar widget",
      "Dispatch board for assigning jobs to technicians and tracking status",
      "Automatic SMS/email reminders the day before a job",
    ],
    screenshots: [
      { label: "Booking calendar", description: "Customer view for picking an available slot" },
      { label: "Dispatch board", description: "Jobs grouped by technician and status" },
      { label: "Job detail", description: "Single job view with notes and customer info" },
    ],
  },
  {
    slug: "order-to-invoice-automation",
    title: "Order-to-Invoice Automation",
    tagline: "Orders flow straight into invoices — no manual re-entry.",
    category: "n8n Automation",
    tech: ["n8n", "Webhooks", "Stripe API"],
    summary:
      "A concept automation for a business re-typing every order into their invoicing tool by hand. An order webhook triggers an n8n workflow that generates the invoice, emails it to the customer, and logs the payment status back into a shared sheet.",
    highlights: [
      "Order data mapped automatically into a branded invoice template",
      "Payment status synced back without anyone checking manually",
      "Failed or unusual orders flagged for a human to review",
    ],
    screenshots: [
      { label: "Workflow map", description: "The n8n automation from order to invoice" },
      { label: "Generated invoice", description: "Branded invoice sent to the customer" },
      { label: "Status log", description: "Payment status synced back automatically" },
    ],
  },
  {
    slug: "internal-inventory-dashboard",
    title: "Internal Inventory & Reorder Dashboard",
    tagline: "One dashboard for stock levels, low-stock alerts, and reorder points.",
    category: "Customized Internal SaaS",
    tech: ["Next.js", "SQLite", "Cron jobs"],
    summary:
      "A concept internal tool replacing a stock spreadsheet nobody fully trusted. Stock counts update as items move, low-stock items are flagged automatically, and a weekly digest lists exactly what needs reordering.",
    highlights: [
      "Live stock view instead of a spreadsheet that's always a week out of date",
      "Automatic low-stock flags based on each item's reorder point",
      "Weekly reorder digest emailed without anyone having to compile it",
    ],
    screenshots: [
      { label: "Stock overview", description: "Current stock levels across all items" },
      { label: "Low-stock alerts", description: "Items flagged for reorder" },
      { label: "Reorder digest", description: "Weekly summary email" },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
