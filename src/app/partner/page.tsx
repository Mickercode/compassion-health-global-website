import { Arcs } from "@/components/Arcs";
import { ButtonLink } from "@/components/ButtonLink";
import { Eyebrow, Prose } from "@/components/blocks";
import { JotformEmbed } from "@/components/forms/JotformEmbed";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { partner } from "@/content/partner";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(partner.title, partner.description, "/partner");

export default function PartnerPage() {
  const { hero, why, opportunities, principles, final } = partner;

  return (
    <>
      {/* Hero: tinted panel with the invitation, wide photograph beneath, overlapping. */}
      <section aria-labelledby="partner-heading" className="bg-surface-tint pt-14 lg:pt-24">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 id="partner-heading" className="t-title mt-5">
              {hero.heading}
            </h1>
          </div>
          <div className="lg:col-span-5 lg:pt-10">
            <Prose paragraphs={hero.body} className="[&_p:last-child]:text-ink-muted" />
            <div className="mt-8">
              <ButtonLink href={hero.button.href}>{hero.button.label}</ButtonLink>
            </div>
          </div>
        </div>
        <div className="container-site relative mt-14 translate-y-0 lg:mt-20">
          <Photo id="partnerHero" priority sizes="(min-width: 1280px) 1200px, 100vw" className="aspect-[16/10] rounded-t-lg md:aspect-[21/8]" />
        </div>
      </section>

      {/* Why partner with us */}
      <section aria-labelledby="why-heading" className="section">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <Eyebrow as="h2" id="why-heading">
              {why.eyebrow}
            </Eyebrow>
            <p className="t-statement mt-6">{why.lead}</p>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-14" delay={120}>
            <Prose paragraphs={why.body} className="[&_p]:text-ink-muted" />
          </Reveal>
        </div>
      </section>

      {/* Opportunities: a ruled six-part schedule, numbered like an institutional prospectus. */}
      <section aria-labelledby="opps-heading" className="section pt-0 lg:pt-0">
        <div className="container-site">
          <Eyebrow as="h2" id="opps-heading">
            {opportunities.eyebrow}
          </Eyebrow>
          <ul className="mt-10 grid border-t border-l border-hairline md:grid-cols-2 lg:grid-cols-3">
            {opportunities.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.heading}
                delay={(i % 3) * 100}
                className="group flex flex-col border-r border-b border-hairline p-7 transition-colors hover:bg-surface-tint md:p-9"
              >
                <span aria-hidden="true" className="t-numeral text-[44px] text-brand-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="t-sub mt-8">{item.heading}</h3>
                <p className="t-body mt-3 text-ink-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Principles: navy, the seriousness of how we work. */}
      <section aria-labelledby="principles-heading" className="tone-navy section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <Eyebrow as="h2" id="principles-heading">
              {principles.eyebrow}
            </Eyebrow>
            <Arcs variant="small" className="mt-8" />
          </div>
          <dl className="border-t border-hairline lg:col-span-8">
            {principles.items.map((p, i) => (
              <Reveal key={p.heading} delay={i * 80} className="grid gap-2 border-b border-hairline py-7 md:grid-cols-12 md:gap-8">
                <dt className="t-sub md:col-span-5">{p.heading}</dt>
                <dd className="t-body text-ink-muted md:col-span-7">{p.body}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Final call, with the partnership form. The invitation stays in view while the form scrolls. */}
      <section id="partner-form" aria-labelledby="final-heading" className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)]">
              <h2 id="final-heading" className="t-statement text-brand">
                {final.heading}
              </h2>
              <p className="t-body mt-6 text-ink-muted">{final.body}</p>
              <div className="mt-8">
                <ButtonLink href={final.button.href} variant="secondary">
                  {final.button.label}
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-hairline bg-surface lg:col-span-8">
            <JotformEmbed formId={final.jotformId} title={final.heading} />
          </div>
        </div>
      </section>
    </>
  );
}
