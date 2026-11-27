/** Our Work page (/our-work) copy. Source: supplied website copy, section 3. */

export type WorkArea = {
  id: string;
  number: string;
  name: string;
  /** Short name used in the connected-areas diagram. */
  short: string;
  tagline: string;
  body: string[];
};

export const ourWork = {
  title: "Our Work | Compassion Health Global",
  description:
    "Explore Compassion Health Global's vision for hospitals, community clinics, medical missions, healthcare training and sustainable medical services.",

  hero: {
    eyebrow: "Our Work",
    heading: "Building a healthcare network that reaches further.",
    lead: "From community clinics to hospitals, medical missions to professional training, our work is centred on bringing healthcare closer and building systems that can serve communities for generations.",
  },

  areasHeading: "Our seven areas of work",

  areas: [
    {
      id: "hospitals",
      number: "01",
      name: "Hospitals",
      short: "Hospitals",
      tagline: "Comprehensive care. Compassionate service.",
      body: [
        "We envision hospitals equipped to deliver essential and specialised healthcare services, bringing clinical excellence, patient dignity and dependable care together under one roof.",
        "Our hospital network will form the backbone of a wider healthcare system, connecting patients to quality medical attention, diagnostics, treatment, pharmacy services and referral care.",
        "Planned services may include outpatient care, inpatient care, maternity, diagnostics, laboratory services, pharmacy and specialised clinical departments, subject to facility capacity and approvals.",
      ],
    },
    {
      id: "clinics-network",
      number: "02",
      name: "Clinics Network",
      short: "Clinics",
      tagline: "Quality care, closer to home.",
      body: [
        "Distance should not be a barrier to basic healthcare.",
        "Our planned clinics network will bring essential medical services closer to communities, offering accessible primary healthcare and connecting patients to hospitals when more advanced care is needed.",
        "The vision is to establish a clinic in every local government area in Nigeria.",
      ],
    },
    {
      id: "community-health-outreach",
      number: "03",
      name: "Community Health Outreach",
      short: "Outreach",
      tagline: "Taking healthcare beyond the hospital walls.",
      body: [
        "Not everyone can make it to a healthcare facility. Our community health initiatives will extend medical attention, preventive care, health education and screening into communities.",
        "Through medical missions and community-based programmes, we aim to identify health needs earlier, encourage preventive practices and connect people to appropriate care.",
      ],
    },
    {
      id: "training-school",
      number: "04",
      name: "Missionary Health Training School",
      short: "Training",
      tagline: "Preparing people to serve.",
      body: [
        "Healthcare needs skilled professionals. Mission needs people who are prepared.",
        "Our vision for a healthcare training institution is to equip healthcare professionals with the competence, character, knowledge and compassion required for effective medical service.",
        "We aim to develop professionals who combine clinical excellence with a heart for service.",
      ],
    },
    {
      id: "clinical-governance",
      number: "05",
      name: "Clinical Governance & Quality",
      short: "Quality",
      tagline: "Every patient deserves quality care.",
      body: [
        "Compassion must be supported by systems.",
        "Our clinical governance framework will focus on patient safety, professional standards, clinical accountability, ethical practice, continuous learning and quality improvement.",
        "We are committed to building healthcare facilities where quality is not left to chance but supported by policies, training, oversight and accountability.",
      ],
    },
    {
      id: "medical-supplies",
      number: "06",
      name: "Medical Supplies & Equipment",
      short: "Supplies",
      tagline: "The right resources. The right standard.",
      body: [
        "Quality healthcare requires dependable medicines, equipment, consumables and infrastructure.",
        "Our medical supply and equipment initiative will focus on supporting healthcare facilities with the resources required to deliver safe, effective and consistent care.",
        "Through responsible sourcing, supply coordination and strategic partnerships, we aim to strengthen the operational capacity of our facilities and programmes.",
      ],
    },
    {
      id: "chaplaincy",
      number: "07",
      name: "Chaplaincy & Patient Support",
      short: "Chaplaincy",
      tagline: "Care for the person, not only the condition.",
      body: [
        "Illness can affect more than the body. It can touch emotions, families, relationships, hope and faith.",
        "Our chaplaincy initiative will provide spiritual encouragement, prayer, pastoral support and compassionate listening for patients, families and healthcare workers who desire it.",
        "Spiritual care will always be offered freely and respectfully, never imposed.",
      ],
    },
  ] satisfies WorkArea[],

  connected: {
    eyebrow: "Our work is connected",
    heading: "One mission. Seven connected areas.",
    body: "Our clinics bring care closer. Our hospitals provide deeper treatment. Our outreach programmes extend our reach. Our training school prepares the people who serve. Our quality systems protect patients. Our supply systems support care. Our chaplaincy cares for the whole person.",
    closing: "Together, they form the foundation of a healthcare mission designed to grow and endure.",
    centre: "One mission",
    button: { label: "Explore Our Ten-Year Vision", href: "/the-plan" },
  },
};
