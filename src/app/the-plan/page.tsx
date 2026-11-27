import { Arcs } from "@/components/Arcs";
import { ButtonLink } from "@/components/ButtonLink";
import { Eyebrow, Prose, VisionField } from "@/components/blocks";
import { Reveal } from "@/components/Reveal";
import { plan } from "@/content/the-plan";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(plan.title, plan.description, "/the-plan");

export default function ThePlanPage() {
  const { hero, numbers, phases, growth, journey } = plan;
  const [lgas, states, years, school] = numbers.items;

  return (
    <>
      {/* Opening: navy, large arcs, the ambition and the discipline side by side. */}
      <section aria-labelledby="plan-heading" className="tone-navy relative overflow-hidden">
        <Arcs variant="large" className="pointer-events-none absolute -right-28 bottom-0 w-[460px] md:w-[720px]" />
        <div className="container-site relative pt-16 pb-20 lg:pt-28 lg:pb-32">
          <div className="max-w-[900px]">
            <Arcs variant="small" className="mb-6" />
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 id="plan-heading" className="t-display mt-6">
              {hero.heading}
            </h1>
            <p className="t-lead measure-wide mt-8 text-ink-muted">{hero.lead}</p>
            <p className="t-sub mt-8">
              {hero.closing[0]} <span className="text-brand">{hero.closing[1]}</span>
            </p>
          </div>
        </div>
      </section>

      {/* The vision in numbers: one dominant figure, three supporting, drawn to scale. */}
      <section aria-labelledby="numbers-heading" className="section">
        <div className="container-site">
          <Eyebrow as="h2" id="numbers-heading">
            {numbers.eyebrow}
          </Eyebrow>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="t-numeral text-[120px] text-brand md:text-[200px] lg:text-[240px]">{lgas.value}</p>
              <h3 className="t-sub mt-4">{lgas.label}</h3>
              <p className="t-body mt-2 max-w-[44ch] text-ink-muted">{lgas.body}</p>
              <VisionField className="mt-10 h-auto w-full" />
            </Reveal>

            <ul className="flex flex-col lg:col-span-5">
              {[states, years, school].map((item, i) => (
                <Reveal as="li" key={item.label} delay={i * 120} className="border-t border-hairline py-8 first:pt-8 lg:first:pt-10">
                  <p className="t-numeral text-[64px] text-ink md:text-[80px]">{item.value}</p>
                  <h3 className="t-item mt-3">{item.label}</h3>
                  <p className="t-body mt-2 text-ink-muted">{item.body}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How we intend to build: a four-phase roadmap on a vertical rail. No dates are implied. */}
      <section aria-labelledby="phases-heading" className="section bg-surface-tint">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+48px)]">
              <h2 id="phases-heading" className="t-statement">
                {plan.phasesHeading}
              </h2>
            </div>
          </div>
          <ol className="relative lg:col-span-8">
            <span aria-hidden="true" className="absolute top-2 bottom-2 left-[15px] w-px bg-brand-light/40 md:left-[19px]" />
            {phases.map((phase, i) => (
              <Reveal as="li" key={phase.number} delay={i * 60} className="relative grid grid-cols-[32px_1fr] gap-6 pb-14 last:pb-0 md:grid-cols-[40px_1fr] md:gap-10">
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-1 flex size-8 items-center justify-center rounded-pill border-[1.5px] border-brand bg-surface font-display text-[11px] font-bold text-brand md:size-10 md:text-[12px]"
                >
                  {phase.number}
                </span>
                <div>
                  <p className="t-eyebrow">
                    Phase {phase.number} &middot; {phase.name}
                  </p>
                  <h3 className="t-sub mt-3">{phase.heading}</h3>
                  <Prose paragraphs={phase.body} className="measure mt-4 [&_p]:text-ink-muted" />
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Our principle of growth: three short lines, set as large as the page allows. */}
      <section aria-labelledby="growth-heading" className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Eyebrow>{growth.eyebrow}</Eyebrow>
            <h2 id="growth-heading" className="mt-8">
              {growth.heading.map((line, i) => (
                <span
                  key={line}
                  className={`t-numeral block text-[48px] leading-[1.05] md:text-[80px] ${i === 2 ? "text-brand" : "text-ink"}`}
                >
                  {line}
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9 lg:self-end" delay={150}>
            <Prose paragraphs={growth.body} className="[&_p:not(:first-child)]:text-ink-muted" />
          </Reveal>
        </div>
      </section>

      {/* The journey ahead */}
      <section aria-labelledby="journey-heading" className="tone-navy section-tight relative overflow-hidden">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <Eyebrow as="h2" id="journey-heading">
              {journey.eyebrow}
            </Eyebrow>
            <p className="t-lead mt-6 text-ink-muted">{journey.body}</p>
            <p className="t-sub mt-6">{journey.closing}</p>
          </Reveal>
          <div className="lg:col-span-4 lg:justify-self-end">
            <ButtonLink href={journey.button.href}>{journey.button.label}</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
