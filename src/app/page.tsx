import { Arcs } from "@/components/Arcs";
import { ButtonLink } from "@/components/ButtonLink";
import { Eyebrow, Prose, VisionField } from "@/components/blocks";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { home } from "@/content/home";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(home.title, home.description, "/");

export default function HomePage() {
  const { hero, conviction, vision, building, approach, people, partnership, final } = home;

  return (
    <>
      {/* A. Hero: full-bleed documentary photograph, type set into its darker side. */}
      <section aria-labelledby="hero-heading" className="relative">
        <Photo
          id="homeHero"
          priority
          sizes="100vw"
          scrim="left"
          className="tone-photo min-h-[640px] md:min-h-[680px] lg:min-h-[min(820px,calc(100svh-var(--header-h)))]"
        >
          <div className="relative z-10 flex h-full min-h-[inherit] items-end lg:items-center">
            <div className="container-site pt-40 pb-12 lg:py-24">
              <div className="max-w-[700px]">
                <Eyebrow className="text-brand">{hero.eyebrow}</Eyebrow>
                <h1 id="hero-heading" className="t-display mt-6">
                  {hero.heading}
                </h1>
                <Prose paragraphs={hero.body} className="measure mt-6 [&_p]:text-ink-muted" />
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={hero.primary.href}>{hero.primary.label}</ButtonLink>
                  <ButtonLink href={hero.secondary.href} variant="secondary">
                    {hero.secondary.label}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </Photo>
      </section>

      {/* C. The conviction: slowed down. Big serif line, one human image, quiet text. */}
      <section aria-labelledby="conviction-heading" className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Photo id="conviction" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] rounded-lg" />
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>{conviction.eyebrow}</Eyebrow>
              <h2 id="conviction-heading" className="t-display mt-6 text-brand">
                {conviction.heading}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <Prose paragraphs={conviction.body} className="measure mt-8" />
              <p className="t-sub measure mt-8 border-t border-hairline pt-6 text-brand">{conviction.closing}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* D. The vision: navy band, the real scale of 774 drawn dot by dot. */}
      <section aria-labelledby="vision-heading" className="tone-navy section relative overflow-hidden">
        <div className="container-site">
          <div className="grid gap-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-6">
              <Eyebrow>{vision.eyebrow}</Eyebrow>
              <h2 id="vision-heading" className="t-statement mt-6">
                {vision.heading}
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-12" delay={120}>
              <p className="t-body text-ink-muted">{vision.body}</p>
            </Reveal>
          </div>

          <Reveal className="mt-14">
            <VisionField className="h-auto w-full max-w-[1200px]" />
          </Reveal>

          <ul className="mt-14 grid gap-10 border-t border-hairline pt-10 md:grid-cols-3 md:gap-8">
            {vision.targets.map((t, i) => (
              <Reveal as="li" key={t.label} delay={i * 100}>
                <p className="t-numeral text-[72px] text-ink md:text-[88px]">{t.value}</p>
                <h3 className="t-item mt-4">{t.label}</h3>
                <p className="t-secondary mt-2 max-w-[34ch]">{t.body}</p>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="t-secondary max-w-[60ch] font-serif text-[16px] italic">{vision.note}</p>
            <ButtonLink href={vision.button.href} variant="secondary">
              {vision.button.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* E. What we are building: an asymmetric composition, four pillars, four treatments. */}
      <section aria-labelledby="building-heading" className="section">
        <div className="container-site">
          <div className="grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-7">
              <Eyebrow>{building.eyebrow}</Eyebrow>
              <h2 id="building-heading" className="t-statement mt-6">
                {building.heading}
              </h2>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:pt-14" delay={120}>
              <p className="t-body text-ink-muted">{building.body}</p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:grid-rows-[auto_auto] lg:gap-8">
            {/* Hospitals: the largest, image-led */}
            <Reveal as="article" className="lg:col-span-7 lg:row-span-2">
              <Photo
                id="pillarHospitals"
                sizes="(min-width: 1024px) 58vw, 100vw"
                hover
                scrim="bottom"
                className="tone-photo aspect-[4/5] rounded-lg md:aspect-[16/11] lg:h-full lg:min-h-[560px] lg:aspect-auto"
              >
                <div className="absolute inset-x-0 bottom-0 z-10 p-6 md:p-10">
                  <p className="t-marker">01</p>
                  <h3 className="t-section mt-3">{building.pillars[0].heading}</h3>
                  <p className="t-body mt-3 max-w-[46ch] text-ink-muted">{building.pillars[0].body}</p>
                </div>
              </Photo>
            </Reveal>

            {/* Clinics: image above, text below */}
            <Reveal as="article" className="lg:col-span-5" delay={100}>
              <Photo id="pillarClinics" sizes="(min-width: 1024px) 40vw, 100vw" hover className="aspect-[16/10] rounded-lg" />
              <p className="t-marker mt-6">02</p>
              <h3 className="t-sub mt-2">{building.pillars[1].heading}</h3>
              <p className="t-body mt-2 text-ink-muted">{building.pillars[1].body}</p>
            </Reveal>

            {/* Community health: text-led on a tinted panel, small image */}
            <Reveal as="article" className="grid grid-cols-[1fr_120px] gap-5 rounded-lg bg-surface-tint p-6 md:grid-cols-[1fr_180px] md:p-8 lg:col-span-5" delay={200}>
              <div>
                <p className="t-marker">03</p>
                <h3 className="t-sub mt-2">{building.pillars[2].heading}</h3>
                <p className="t-secondary mt-2 text-ink">{building.pillars[2].body}</p>
              </div>
              <Photo id="pillarCommunity" sizes="180px" className="aspect-[3/4] self-start rounded-md" />
            </Reveal>

            {/* Training: a wide horizontal strip */}
            <Reveal as="article" className="grid items-center gap-6 border-t border-hairline pt-8 md:grid-cols-12 lg:col-span-12">
              <Photo id="pillarTraining" sizes="(min-width: 768px) 33vw, 100vw" hover className="aspect-[16/9] rounded-lg md:col-span-4" />
              <div className="md:col-span-6 md:col-start-6">
                <p className="t-marker">04</p>
                <h3 className="t-sub mt-2">{building.pillars[3].heading}</h3>
                <p className="t-body mt-2 text-ink-muted">{building.pillars[3].body}</p>
              </div>
            </Reveal>
          </div>

          <div className="mt-12">
            <ButtonLink href={building.button.href}>{building.button.label}</ButtonLink>
          </div>
        </div>
      </section>

      {/* F. Our approach: tinted band, two-line serif statement, numbered editorial grid. */}
      <section aria-labelledby="approach-heading" className="section bg-surface-tint">
        <div className="container-site">
          <Reveal>
            <Eyebrow>{approach.eyebrow}</Eyebrow>
            <h2 id="approach-heading" className="t-statement mt-6 max-w-[26ch]">
              {approach.heading[0]} <span className="text-brand">{approach.heading[1]}</span>
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-x-12 md:grid-cols-2">
            {approach.items.map((item, i) => (
              <Reveal as="li" key={item.heading} delay={(i % 2) * 120} className="grid grid-cols-[56px_1fr] gap-4 border-t border-hairline py-8 md:grid-cols-[72px_1fr]">
                <span aria-hidden="true" className="t-numeral text-[40px] text-brand-light md:text-[48px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="t-item">{item.heading}</h3>
                  <p className="t-body mt-3 text-ink-muted">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* G. The people: photo mosaic with the roll call of roles. */}
      <section aria-labelledby="people-heading" className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="grid grid-cols-2 gap-4 md:gap-6 lg:col-span-6">
            <Reveal className="col-span-2">
              <Photo id="people1" sizes="(min-width: 1024px) 45vw, 100vw" hover className="aspect-[16/10] rounded-lg" />
            </Reveal>
            <Reveal delay={100}>
              <Photo id="people2" sizes="(min-width: 1024px) 22vw, 50vw" hover className="aspect-square rounded-lg" />
            </Reveal>
            <Reveal delay={200} className="pt-10">
              <Photo id="people3" sizes="(min-width: 1024px) 22vw, 50vw" hover className="aspect-square rounded-lg" />
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:self-center">
            <Reveal>
              <Eyebrow>{people.eyebrow}</Eyebrow>
              <h2 id="people-heading" className="t-statement mt-6">
                {people.heading}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 font-serif text-[22px] leading-[34px] font-semibold text-brand md:text-[26px] md:leading-[40px]">
                {people.roles.join(" ")}
              </p>
              <p className="t-body measure mt-6 text-ink-muted">{people.body}</p>
              <div className="mt-8">
                <ButtonLink href={people.button.href}>{people.button.label}</ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* H. Partnership: a framed invitation with arcs, image to the side. */}
      <section aria-labelledby="partner-heading" className="section pt-0 lg:pt-0">
        <div className="container-site">
          <Reveal className="relative grid overflow-hidden rounded-lg bg-surface-tint lg:grid-cols-12">
            <div className="relative p-8 md:p-12 lg:col-span-7 lg:p-16">
              <Arcs variant="small" className="mb-6" />
              <Eyebrow>{partnership.eyebrow}</Eyebrow>
              <h2 id="partner-heading" className="t-section mt-5 max-w-[20ch]">
                {partnership.heading}
              </h2>
              <Prose paragraphs={partnership.body} className="measure mt-6" />
              <div className="mt-8">
                <ButtonLink href={partnership.button.href}>{partnership.button.label}</ButtonLink>
              </div>
            </div>
            <Photo id="partnership" sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[16/10] lg:col-span-5 lg:aspect-auto lg:h-full" />
          </Reveal>
        </div>
      </section>

      {/* I. Final call: navy, large arcs, flows into the navy footer. */}
      <section aria-labelledby="final-heading" className="tone-navy relative overflow-hidden border-b border-hairline">
        <Arcs variant="large" className="pointer-events-none absolute -right-24 bottom-0 w-[420px] md:w-[640px]" />
        <div className="container-site relative section">
          <Reveal className="max-w-[760px]">
            <h2 id="final-heading" className="t-display">
              {final.heading}
            </h2>
            <p className="t-lead mt-6 text-ink-muted">{final.body}</p>
            <p className="t-sub mt-6 text-brand">{final.invitation}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={final.primary.href}>{final.primary.label}</ButtonLink>
              <ButtonLink href={final.secondary.href} variant="secondary">
                {final.secondary.label}
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

