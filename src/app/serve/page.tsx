import { ButtonLink } from "@/components/ButtonLink";
import { Eyebrow, Pill, Prose } from "@/components/blocks";
import { JotformEmbed } from "@/components/forms/JotformEmbed";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { serve } from "@/content/serve";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(serve.title, serve.description, "/serve");

export default function ServePage() {
  const { hero, looking, meaning, steps, form } = serve;

  return (
    <>
      {/* Hero: type on the left, photograph bleeding off the right edge on desktop. */}
      <section aria-labelledby="serve-heading" className="relative overflow-hidden">
        <div className="container-site grid gap-10 pt-14 pb-16 lg:grid-cols-12 lg:gap-16 lg:pt-24 lg:pb-28">
          <div className="lg:col-span-6">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 id="serve-heading" className="t-title mt-5">
              {hero.heading}
            </h1>
            <p className="t-sub mt-8">{hero.lead}</p>
            <Prose paragraphs={hero.body} className="measure mt-5 [&_p]:text-ink-muted" />
            <div className="mt-9">
              <ButtonLink href={hero.button.href}>{hero.button.label}</ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Photo
              id="serveHero"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] rounded-lg lg:absolute lg:top-24 lg:right-0 lg:bottom-28 lg:aspect-auto lg:w-[46vw] lg:rounded-r-none"
            />
          </div>
        </div>
      </section>

      {/* Who we're looking for: a directory, one row per profession, registration body at the edge. */}
      <section aria-labelledby="looking-heading" className="section bg-surface-tint">
        <div className="container-site">
          <h2 id="looking-heading" className="t-statement">
            {looking.eyebrow}
          </h2>
          <ul className="mt-12 border-t border-hairline">
            {looking.roles.map((role, i) => (
              <Reveal
                as="li"
                key={role.name}
                delay={i * 60}
                className="grid gap-3 border-b border-hairline py-7 md:grid-cols-12 md:items-center md:gap-8"
              >
                <h3 className="t-sub md:col-span-4">{role.name}</h3>
                <p className="t-body text-ink-muted md:col-span-5">{role.body}</p>
                <p className="md:col-span-3 md:text-right">
                  {role.registration ? (
                    <>
                      <span className="t-secondary mr-2">{looking.registrationLabel}</span>
                      <Pill>{role.registration}</Pill>
                    </>
                  ) : null}
                </p>
              </Reveal>
            ))}
          </ul>
          <p className="t-secondary measure mt-8 text-ink">{looking.note}</p>
        </div>
      </section>

      {/* What serving means: a 2 x 2 of large numbered statements. */}
      <section aria-labelledby="meaning-heading" className="section">
        <div className="container-site">
          <Eyebrow as="h2" id="meaning-heading">
            {meaning.eyebrow}
          </Eyebrow>
          <ul className="mt-12 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {meaning.items.map((item, i) => (
              <Reveal as="li" key={item.heading} delay={(i % 2) * 120}>
                <h3 className="t-section">{item.heading}</h3>
                <p className="t-body measure mt-4 text-ink-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How to get involved: three steps joined by a line. */}
      <section aria-labelledby="steps-heading" className="tone-navy section">
        <div className="container-site">
          <Eyebrow as="h2" id="steps-heading">
            {steps.eyebrow}
          </Eyebrow>
          <ol className="relative mt-12 grid gap-12 md:grid-cols-3 md:gap-10">
            <span aria-hidden="true" className="absolute top-6 right-0 left-0 hidden h-px bg-hairline md:block" />
            {steps.items.map((step, i) => (
              <Reveal as="li" key={step.number} delay={i * 140} className="relative">
                <span
                  aria-hidden="true"
                  className="relative z-10 flex size-12 items-center justify-center rounded-pill border-[1.5px] border-brand bg-navy font-display text-[13px] font-bold text-brand"
                >
                  {step.number}
                </span>
                <h3 className="t-sub mt-6">{step.heading}</h3>
                <p className="t-body mt-3 text-ink-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Registration: intro stays in view while the form scrolls on desktop. */}
      <section id="register" aria-labelledby="register-heading" className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)]">
              <Eyebrow>{form.eyebrow}</Eyebrow>
              <h2 id="register-heading" className="t-statement mt-6">
                {form.heading}
              </h2>
              <p className="t-body mt-6 text-ink-muted">{form.body}</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg border border-hairline bg-surface lg:col-span-8">
            <JotformEmbed formId={form.jotformId} title={form.heading} />
          </div>
        </div>
      </section>
    </>
  );
}
