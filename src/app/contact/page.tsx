import { Copy } from "@/components/Copy";
import { Eyebrow, PageIntro } from "@/components/blocks";
import { EmailLink, PhoneLink } from "@/components/Contact";
import { ContactForm } from "@/components/forms/ContactForm";
import { contactPage } from "@/content/contact";
import { contact } from "@/content/shared";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(contactPage.title, contactPage.description, "/contact");

export default function ContactPage() {
  const { hero, paths, form, notice } = contactPage;

  const cards = [
    { ...paths.serve, value: <EmailLink email={contact.servingEmail} /> },
    { ...paths.partnerships, value: <EmailLink email={contact.partnershipsEmail} /> },
    {
      ...paths.general,
      value: (
        <span className="flex flex-col gap-1">
          <span>
            <PhoneLink phone={contact.phone} whatsapp={contact.whatsapp} />
          </span>
          <EmailLink email={contact.generalEmail} />
        </span>
      ),
    },
    { heading: paths.office.heading, body: null, value: <Copy text={contact.office} /> },
  ];

  return (
    <>
      <section aria-labelledby="page-heading" className="pt-14 pb-12 lg:pt-24 lg:pb-16">
        <div className="container-site">
          <PageIntro eyebrow={hero.eyebrow} heading={hero.heading} lead={hero.lead} />
        </div>
      </section>

      {/* Four contact paths, ruled like a directory. */}
      <section aria-labelledby="paths-heading" className="pb-12 lg:pb-16">
        <div className="container-site">
          <Eyebrow as="h2" id="paths-heading">
            {paths.eyebrow}
          </Eyebrow>
          <ul className="mt-8 grid border-t border-l border-hairline md:grid-cols-2">
            {cards.map((card) => (
              <li key={card.heading} className="flex min-w-0 flex-col border-r border-b border-hairline p-7 md:p-9">
                <h3 className="t-sub">{card.heading}</h3>
                {card.body ? <p className="t-body mt-3 text-ink-muted">{card.body}</p> : null}
                <div className="t-body mt-6 font-semibold [overflow-wrap:anywhere]">{card.value}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Emergency notice: prominent, before the form, never missed. */}
      <section aria-labelledby="notice-heading" className="pb-12 lg:pb-16">
        <div className="container-site">
          <div role="note" className="tone-navy grid gap-4 rounded-lg p-7 md:grid-cols-12 md:gap-8 md:p-10">
            <h2 id="notice-heading" className="t-sub md:col-span-4">
              {notice.heading}
            </h2>
            <div className="flow md:col-span-8">
              <p className="t-body text-ink-muted">{notice.body[0]}</p>
              <p className="t-body font-semibold">{notice.body[1]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="message" aria-labelledby="form-heading" className="section bg-surface-tint">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow>{form.eyebrow}</Eyebrow>
            <h2 id="form-heading" className="t-statement mt-6">
              {form.heading}
            </h2>
          </div>
          <div className="rounded-lg bg-surface p-6 md:p-10 lg:col-span-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
