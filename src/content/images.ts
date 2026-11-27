import type { StaticImageData } from "next/image";
import aboutHero from "@/assets/photos/about-hero.jpg";
import aboutWho from "@/assets/photos/about-who.jpg";
import conviction from "@/assets/photos/conviction.jpg";
import faith from "@/assets/photos/faith.jpg";
import homeHero from "@/assets/photos/home-hero.jpg";
import partnerHero from "@/assets/photos/partner-hero.jpg";
import partnership from "@/assets/photos/partnership.jpg";
import people1 from "@/assets/photos/people-1.jpg";
import people2 from "@/assets/photos/people-2.jpg";
import people3 from "@/assets/photos/people-3.jpg";
import pillarClinics from "@/assets/photos/pillar-clinics.jpg";
import pillarCommunity from "@/assets/photos/pillar-community.jpg";
import pillarHospitals from "@/assets/photos/pillar-hospitals.jpg";
import pillarTraining from "@/assets/photos/pillar-training.jpg";
import serveHero from "@/assets/photos/serve-hero.jpg";
import workChaplaincy from "@/assets/photos/work-chaplaincy.jpg";
import workClinics from "@/assets/photos/work-clinics.jpg";
import workHero from "@/assets/photos/work-hero.jpg";
import workHospitals from "@/assets/photos/work-hospitals.jpg";
import workOutreach from "@/assets/photos/work-outreach.jpg";
import workSupplies from "@/assets/photos/work-supplies.jpg";

/**
 * Every photograph on the site, in one place.
 *
 * STAND-IN PHOTOGRAPHY. These are free-licence stock photos (Pexels and Unsplash licences:
 * free for commercial use, no attribution required). They are NOT photos of Compassion
 * Health Global's own work, staff or patients. Replace each with your own consented
 * photography as it becomes available: put the file in src/assets/photos/, import it here,
 * and update `alt` and `credit`. `brief` describes the shot each slot is designed for.
 *
 * `src: null` renders a clearly marked empty slot.
 */
export type Photo = {
  src: StaticImageData | null;
  alt: string;
  brief: string;
  credit?: string;
  /** Focal point for cropping, as CSS object-position. */
  position?: string;
};

export const photos = {
  homeHero: {
    src: homeHero,
    alt: "A nurse tends a young boy on a hospital ward while his father looks on.",
    brief: "Nigerian clinician caring for a patient, natural light, landscape",
    credit: "Speak Media Uganda / Pexels 34185202",
    position: "65% center",
  },
  conviction: {
    src: conviction,
    alt: "A mother in a blue print dress and gele holds her newborn.",
    brief: "Parent and child, dignified, portrait",
    credit: "sultan photography / Pexels 35136015",
    position: "center 35%",
  },
  pillarHospitals: {
    src: pillarHospitals,
    alt: "A health worker attends to newborns in incubators in a neonatal unit.",
    brief: "Clinical team on a hospital ward",
    credit: "Speak Media Uganda / Pexels 34185199",
  },
  pillarClinics: {
    src: pillarClinics,
    alt: "A clinician fits a blood pressure cuff on a seated patient.",
    brief: "Primary-care consultation",
    credit: "Ninthgrid / Pexels 30688589",
  },
  pillarCommunity: {
    src: pillarCommunity,
    alt: "An older woman has her blood pressure taken at a community health check.",
    brief: "Community health screening",
    credit: "mk_photoz / Pexels 33127869",
  },
  pillarTraining: {
    src: pillarTraining,
    alt: "A group of health students in navy scrubs stand together outdoors.",
    brief: "Health workers in training",
    credit: "Ab Pixels / Pexels 38451629",
    position: "center 35%",
  },
  people1: {
    src: people1,
    alt: "A doctor points to a tablet held by a seated colleague as they review information together.",
    brief: "Doctors and nurses working together",
    credit: "Tima Miroshnichenko / Pexels 5452224",
    position: "center 30%",
  },
  people2: {
    src: people2,
    alt: "A laboratory scientist in goggles and gloves runs a test at the bench.",
    brief: "Pharmacist or lab professional at work",
    credit: "RF studio / Pexels 3825434",
  },
  people3: {
    src: people3,
    alt: "Two nurses in green scrubs on a hospital ward.",
    brief: "Nurses or volunteers",
    credit: "Joseph Oti Nyametease / Pexels 29941468",
  },
  partnership: {
    src: partnership,
    alt: "Professionals around a meeting table, planning together.",
    brief: "Professionals meeting and planning together",
    credit: "Ninthgrid / Pexels 30677714",
  },
  aboutHero: {
    src: aboutHero,
    alt: "A surgeon in blue scrubs stands in an operating theatre.",
    brief: "Health worker, warm and documentary, portrait",
    credit: "David Akinwale / Unsplash",
    position: "center 25%",
  },
  aboutWho: {
    src: aboutWho,
    alt: "A health worker takes an older woman's blood pressure at an open-air health post.",
    brief: "Community health moment",
    credit: "Lagos Food Bank Initiative / Pexels 8248433",
  },
  faith: {
    src: faith,
    alt: "One person gently holds an older person's hand.",
    brief: "Someone comforting a patient",
    credit: "Kwaku Griffin / Pexels 14346824",
  },
  workHero: {
    src: workHero,
    alt: "A doctor gives a health talk to a gathering of older women.",
    brief: "Wide shot of healthcare work in a community",
    credit: "Lagos Food Bank Initiative / Pexels 8248290",
  },
  workHospitals: {
    src: workHospitals,
    alt: "A surgeon in cap, mask and gloves during a procedure.",
    brief: "Hospital clinicians",
    credit: "Shedrack Salami / Pexels 16903231",
  },
  workClinics: {
    src: workClinics,
    alt: "A clinician takes a seated patient's blood pressure in a clinic.",
    brief: "Clinic consultation",
    credit: "Ninthgrid / Pexels 30678208",
  },
  workOutreach: {
    src: workOutreach,
    alt: "Two health workers attend to an older man at an outdoor health outreach.",
    brief: "Medical outreach in a community",
    credit: "mk_photoz / Pexels 33127835",
    position: "center 40%",
  },
  workSupplies: {
    src: workSupplies,
    alt: "Two people read a medicine box beside well-stocked pharmacy shelves.",
    brief: "Pharmacy shelves or medical equipment",
    credit: "Ninthgrid / Pexels 30678215",
  },
  workChaplaincy: {
    src: workChaplaincy,
    alt: "A volunteer holds an older man's hands in his own.",
    brief: "Comforting a patient, listening",
    credit: "RDNE Stock project / Pexels 6646816",
  },
  serveHero: {
    src: serveHero,
    alt: "A young scientist in a lab coat and goggles works with a flask in a laboratory.",
    brief: "Health professionals serving together",
    credit: "RF studio / Pexels 3825414",
    position: "center 30%",
  },
  partnerHero: {
    src: partnerHero,
    alt: "Professionals in conversation around a boardroom table.",
    brief: "Professionals collaborating",
    credit: "Ninthgrid / Pexels 30688592",
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;
