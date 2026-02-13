import type { ContactPageContent } from "@/content/schema";

interface ContactFormProps {
  form: ContactPageContent["form"];
}

export function ContactForm({ form }: ContactFormProps) {
  return (
    <form
      className="grid gap-5 rounded-2xl border border-brand-100 bg-white p-6 shadow-panel"
      action="#"
      method="post"
    >
      <label className="grid gap-2 text-sm font-semibold text-ink" htmlFor="name">
        {form.nameLabel}
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-md border border-brand-200 bg-brand-50/60 px-3 py-2 text-sm font-normal text-ink placeholder:text-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-ink" htmlFor="email">
        {form.emailLabel}
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-md border border-brand-200 bg-brand-50/60 px-3 py-2 text-sm font-normal text-ink placeholder:text-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-ink" htmlFor="institution">
        {form.institutionLabel}
        <input
          id="institution"
          name="institution"
          type="text"
          className="rounded-md border border-brand-200 bg-brand-50/60 px-3 py-2 text-sm font-normal text-ink placeholder:text-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
        />
      </label>

      <label className="grid gap-2 text-sm font-semibold text-ink" htmlFor="message">
        {form.messageLabel}
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="resize-y rounded-md border border-brand-200 bg-brand-50/60 px-3 py-2 text-sm font-normal text-ink placeholder:text-muted/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300"
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-fit items-center justify-center rounded-md bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        {form.submitLabel}
      </button>
    </form>
  );
}
