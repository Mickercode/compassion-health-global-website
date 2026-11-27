import { ButtonLink } from "@/components/ButtonLink";
import { ConnectedDiagram, Eyebrow, PageIntro, Prose } from "@/components/blocks";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import type { PhotoId } from "@/content/images";
import { ourWork, type WorkArea } from "@/content/our-work";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata(ourWork.title, ourWork.description, "/our-work");

/** The number, name and tagline that open every area, at a consistent hierarchy. */
function AreaHeading({ area, numeralClass = "text-brand-light" }: { area: WorkArea; numeralClass?: string }) {
  return (
    <>
      <p aria-hidden="true" className={`t-numeral text-[64px] md:text-[96px] ${numeralClass}`}>
        {area.number}
      </p>
      <h2 id={`${area.id}-heading`} className="t-section mt-4">
        {area.name}
      </h2>
      <p className="t-sub mt-3 text-brand">{area.tagline}</p>
    </>
  );
}

/** Image and text side by side; `flip` puts the image on the right. */
function SplitArea({ area, photo, flip = false, tone = "" }: { area: WorkArea; photo: PhotoId; flip?: boolean; tone?: string }) {
  return (
    <section id={area.id} aria-labelledby={`${area.id}-heading`} className={`section ${tone}`}>
      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
          <Photo id={photo} sizes="(min-width: 1024px) 48vw, 100vw" hover className="aspect-[4/3] rounded-lg" />
        </Reveal>
        <Reveal className={`lg:col-span-5 ${flip ? "lg:order-1" : "lg:col-start-8"}`} delay={120}>
          <AreaHeading area={area} />
          <Prose paragraphs={area.body} className="mt-6" />
        </Reveal>
      </div>
    </section>
  );
}

export default function OurWorkPage() {
  const [hospitals, clinics, outreach, training, governance, supplies, chaplaincy] = ourWork.areas;
  const { hero, connected } = ourWork;

  return (
    <>
      <section aria-labelledby="page-heading" className="pt-14 lg:pt-24">
        <div className="container-site">
          <PageIntro eyebrow={hero.eyebrow} heading={hero.heading} lead={hero.lead} />
        </div>
        <div className="container-site mt-12 lg:mt-16">
          <Photo id="workHero" priority sizes="(min-width: 1280px) 1200px, 100vw" className="aspect-[16/10] rounded-lg md:aspect-[21/9]" />
        </div>
      </section>

      {/* Index of the seven areas: jump links, sticky beneath the header on desktop. */}
      <nav aria-label={ourWork.areasHeading} className="sticky top-[var(--header-h)] z-30 mt-12 hidden border-y border-hairline bg-surface lg:block">
        <ol className="container-site flex justify-between">
          {ourWork.areas.map((a) => (
            <li key={a.id}>
              <a href={`#${a.id}`} className="flex min-h-14 items-center gap-2 t-secondary text-ink no-underline transition-colors hover:text-brand">
                <span className="t-marker">{a.number}</span>
                {a.short}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div className="container-site mt-12 lg:hidden">
        <Eyebrow as="h2">{ourWork.areasHeading}</Eyebrow>
      </div>

      {/* 01 Hospitals: the anchor of the network, the biggest image. */}
      <section id={hospitals.id} aria-labelledby={`${hospitals.id}-heading`} className="section">
        <div className="container-site grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <Photo id="workHospitals" sizes="(min-width: 1024px) 58vw, 100vw" hover className="aspect-[4/3] rounded-lg lg:aspect-[5/6]" />
          </Reveal>
          <Reveal className="lg:col-span-5 lg:self-end" delay={120}>
            <AreaHeading area={hospitals} />
            <Prose paragraphs={hospitals.body.slice(0, 2)} className="mt-6" />
            <p className="t-secondary mt-6 border-t border-hairline pt-5">{hospitals.body[2]}</p>
          </Reveal>
        </div>
      </section>

      {/* 02 Clinics: tinted, image on the right. */}
      <SplitArea area={clinics} photo="workClinics" flip tone="bg-surface-tint" />

      {/* 03 Outreach: full-bleed photograph with the text on a panel. */}
      <section id={outreach.id} aria-labelledby={`${outreach.id}-heading`} className="relative">
        <Photo id="workOutreach" sizes="100vw" className="h-[420px] md:h-[560px] lg:h-[640px]" />
        <div className="container-site relative -mt-24 pb-16 md:-mt-40 lg:pb-24">
          <Reveal className="rounded-lg bg-surface p-7 md:max-w-[640px] md:p-12">
            <AreaHeading area={outreach} />
            <Prose paragraphs={outreach.body} className="mt-6" />
          </Reveal>
        </div>
      </section>

      {/* 04 Training school: navy, text-led, the people who will serve. */}
      <section id={training.id} aria-labelledby={`${training.id}-heading`} className="tone-navy section">
        <div className="container-site grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <AreaHeading area={training} />
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7 lg:pt-6" delay={120}>
            <p className="t-statement">{training.body[0]}</p>
            <Prose paragraphs={training.body.slice(1)} className="mt-8 [&_p]:text-ink-muted" />
          </Reveal>
        </div>
      </section>

      {/* 05 Governance: typographic, the commitments set out in two columns. */}
      <section id={governance.id} aria-labelledby={`${governance.id}-heading`} className="section">
        <div className="container-site">
          <Reveal className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <AreaHeading area={governance} />
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-6">
              <p className="t-statement text-brand">{governance.body[0]}</p>
            </div>
          </Reveal>
          <Reveal className="mt-12 grid gap-8 border-t border-hairline pt-8 md:grid-cols-2" delay={120}>
            <p className="t-body">{governance.body[1]}</p>
            <p className="t-body text-ink-muted">{governance.body[2]}</p>
          </Reveal>
        </div>
      </section>

      {/* 06 Supplies: tinted, image on the left. */}
      <SplitArea area={supplies} photo="workSupplies" tone="bg-surface-tint" />

      {/* 07 Chaplaincy: quieter, a narrow portrait and generous space. */}
      <section id={chaplaincy.id} aria-labelledby={`${chaplaincy.id}-heading`} className="section">
        <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6 lg:col-start-1">
            <AreaHeading area={chaplaincy} />
            <Prose paragraphs={chaplaincy.body.slice(0, 2)} className="mt-6" />
            <p className="t-sub mt-8 border-t border-hairline pt-6 text-brand">{chaplaincy.body[2]}</p>
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={120}>
            <Photo id="workChaplaincy" sizes="(min-width: 1024px) 32vw, 100vw" hover className="aspect-[3/4] rounded-lg" />
          </Reveal>
        </div>
      </section>

      {/* One mission, seven connected areas. */}
      <section aria-labelledby="connected-heading" className="tone-navy section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <Eyebrow>{connected.eyebrow}</Eyebrow>
            <h2 id="connected-heading" className="t-statement mt-6">
              {connected.heading}
            </h2>
            <p className="t-body mt-8 text-ink-muted">{connected.body}</p>
            <p className="t-sub mt-6">{connected.closing}</p>
            <div className="mt-10">
              <ButtonLink href={connected.button.href}>{connected.button.label}</ButtonLink>
            </div>
          </Reveal>
          <Reveal className="hidden md:block lg:col-span-7" delay={120}>
            <ConnectedDiagram areas={ourWork.areas} centre={connected.centre} />
          </Reveal>
          {/* Phones: the same system as a linked list, each area tied to the next. */}
          <ol className="relative md:hidden" aria-label={connected.heading}>
            <span aria-hidden="true" className="absolute top-3 bottom-3 left-[11px] w-px bg-hairline" />
            {ourWork.areas.map((a) => (
              <li key={a.id} className="relative flex items-center gap-4 py-2.5">
                <span aria-hidden="true" className="relative z-10 size-6 rounded-pill border-[1.5px] border-brand bg-surface" />
                <a href={`#${a.id}`} className="t-body text-ink no-underline">
                  <span className="t-marker mr-2">{a.number}</span>
                  {a.short}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
