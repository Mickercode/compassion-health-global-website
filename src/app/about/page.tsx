import { Cormorant } from "next/font/google";
import { Arcs } from "@/components/Arcs";
import { ButtonLink } from "@/components/ButtonLink";
import { Eyebrow, Prose } from "@/components/blocks";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { about } from "@/content/about";
import { pageMetadata } from "@/lib/metadata";

// The scripture face, loaded on this page only.
const cormorant = Cormorant({
  subsets: ["latin"],
  weight: "500",
  style: "italic",
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata = pageMetadata(about.title, about.description, "/about");

export default function AboutPage() {
  const { hero, who, vision, mission, values, faith } = about;

  return (
    <div className={cormorant.variable}>
      {/* Hero: title left, tall photograph right, overlapping into the next section. */}
      <section aria-labelledby="about-heading" className="pt-14 lg:pt-24">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:pb-24">
            <Arcs variant="small" className="mb-6" />
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <h1 id="about-heading" className="t-title mt-5">
              {hero.heading}
            </h1>
            <p className="t-lead measure mt-8 text-ink-muted">{hero.lead}</p>
          </div>
          <div className="lg:col-span-5">
            <Photo id="aboutHero" priority sizes="(min-width: 1024px) 40vw, 100vw" className="aspect-[4/5] rounded-lg lg:-mb-24" />
          </div>
        </div>
      </section>

      {/* Who we are: a pull-statement carries the belief; the rest reads beside it. */}
      <section aria-labelledby="who-heading" className="section">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <Eyebrow as="h2" id="who-heading">
              {who.eyebrow}
            </Eyebrow>
            <p className="t-statement mt-6 text-brand">{who.belief}</p>
            <p className="t-sub mt-6">{who.change}</p>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8 lg:pt-16" delay={120}>
            <Prose paragraphs={[who.intro, who.rooted]} />
            <Photo id="aboutWho" sizes="(min-width: 1024px) 35vw, 100vw" className="mt-10 aspect-[16/10] rounded-lg" />
          </Reveal>
        </div>
      </section>

      {/* Vision: tinted band; the five long-term goals as a numbered list. */}
      <section aria-labelledby="vision-heading" className="section bg-surface-tint">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>{vision.eyebrow}</Eyebrow>
            <h2 id="vision-heading" className="t-statement mt-6">
              {vision.heading}
            </h2>
            <p className="t-body mt-6 text-ink-muted">{vision.body}</p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="t-label text-ink-muted">{vision.listIntro}</p>
            <ol className="mt-4 border-t border-hairline">
              {vision.items.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 80} className="grid grid-cols-[48px_1fr] gap-4 border-b border-hairline py-5">
                  <span aria-hidden="true" className="t-marker pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="t-body">{item}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Mission: the strongest statement on the page, on navy. */}
      <section aria-labelledby="mission-heading" className="tone-navy section relative overflow-hidden">
        <Arcs variant="large" className="pointer-events-none absolute -right-32 bottom-0 w-[420px] md:w-[600px]" />
        <div className="container-site relative">
          <Reveal className="max-w-[920px]">
            <Eyebrow>{mission.eyebrow}</Eyebrow>
            <h2 id="mission-heading" className="t-display mt-8">
              {mission.heading}
            </h2>
            <p className="t-lead measure-wide mt-8 text-ink-muted">{mission.body}</p>
          </Reveal>
        </div>
      </section>

      {/* Values: an editorial index. Large serif words, the meaning beside each. */}
      <section aria-labelledby="values-heading" className="section">
        <div className="container-site">
          <Eyebrow as="h2" id="values-heading">
            {values.eyebrow}
          </Eyebrow>
          <ol className="mt-10 border-t border-hairline">
            {values.items.map((v, i) => (
              <Reveal
                as="li"
                key={v.name}
                className="group grid gap-2 border-b border-hairline py-7 md:grid-cols-12 md:items-baseline md:gap-8 md:py-9"
              >
                <span aria-hidden="true" className="t-marker md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[36px] leading-[40px] font-semibold text-ink transition-colors group-hover:text-brand md:col-span-5 md:text-[52px] md:leading-[56px]">
                  {v.name}
                </h3>
                <p className="t-body text-ink-muted md:col-span-6">{v.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Faith: warm and restrained. The scripture in its own face, the welcome made plain. */}
      <section aria-labelledby="faith-heading" className="section bg-surface-tint">
        <div className="container-site grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <Eyebrow>{faith.eyebrow}</Eyebrow>
            <h2 id="faith-heading" className="t-statement mt-6">
              {faith.heading}
            </h2>
            <Prose paragraphs={faith.body} className="measure mt-8" />
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={120}>
            <Photo id="faith" sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[4/3] rounded-lg" />
            <figure className="mt-10">
              <blockquote className="font-scripture text-[30px] leading-[38px] font-medium text-brand italic md:text-[34px] md:leading-[42px]">
                <p>{faith.quote}</p>
              </blockquote>
              <figcaption className="t-eyebrow mt-3 text-ink-muted">{faith.quoteRef}</figcaption>
            </figure>
            <div className="mt-10 border-t border-hairline pt-6">
              <p className="t-label">{faith.ministry}</p>
              <p className="t-body mt-3 text-ink-muted">{faith.forEveryone}</p>
            </div>
            <div className="mt-8">
              <ButtonLink href={faith.button.href}>{faith.button.label}</ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
