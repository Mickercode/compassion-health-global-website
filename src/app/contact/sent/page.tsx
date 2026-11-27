import type { Metadata } from "next";
import { Confirmation } from "@/components/forms/Confirmation";
import { contactPage } from "@/content/contact";

/** Where the Contact form lands when it was sent without JavaScript. Not indexed. */
export const metadata: Metadata = { title: contactPage.title, robots: { index: false } };

export default function ContactSentPage() {
  return (
    <section className="section">
      <div className="container-site">
        <h1 className="t-title">{contactPage.hero.heading}</h1>
        <div className="mt-8">
          <Confirmation message={contactPage.form.success} />
        </div>
      </div>
    </section>
  );
}
