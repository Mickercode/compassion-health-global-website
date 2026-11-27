/** Serve page (/serve) copy. Source: supplied website copy, section 5. */

export const serve = {
  title: "Serve With Compassion Health Global | Medical Volunteers",
  description:
    "Join Compassion Health Global as a healthcare professional, medical volunteer or support volunteer and help extend compassionate healthcare.",

  hero: {
    eyebrow: "Serve With Us",
    heading: "Your expertise can reach someone who needs it.",
    lead: "Behind every healthcare mission is a person willing to serve.",
    body: [
      "We are building a community of healthcare professionals and volunteers who believe their skills can make a difference beyond the walls of their workplaces.",
      "Whether you are a clinician, a healthcare professional, a student or someone with skills that support healthcare delivery, there may be a place for you in this mission.",
    ],
    button: { label: "Register Your Interest", href: "#register" },
  },

  looking: {
    eyebrow: "Who we’re looking for",
    registrationLabel: "Professional registration:",
    roles: [
      {
        name: "Doctors & Dentists",
        body: "Help provide medical care, consultations, diagnosis, treatment and professional clinical support.",
        registration: "MDCN",
      },
      {
        name: "Nurses & Midwives",
        body: "Support patient care, nursing services, maternal health and community healthcare programmes.",
        registration: "NMCN",
      },
      {
        name: "Pharmacists",
        body: "Support safe medication practices, pharmaceutical care, dispensing and medicine management.",
        registration: "PCN",
      },
      {
        name: "Optometrists",
        body: "Help expand access to vision screening, eye health education and optometric care.",
        registration: "ODORBN",
      },
      {
        name: "Medical Laboratory Scientists",
        body: "Support laboratory investigations, diagnostic services and quality laboratory practices.",
        registration: "MLSCN",
      },
      {
        name: "Healthcare & Community Volunteers",
        body: "Help with patient registration, community engagement, coordination, interpretation, logistics and non-clinical support.",
        registration: null,
      },
    ],
    note: "Clinical responsibilities will only be assigned to appropriately qualified and authorised professionals.",
  },

  meaning: {
    eyebrow: "What serving with us means",
    items: [
      {
        heading: "Purposeful Service",
        body: "Use your professional skills to serve people and communities that need access to healthcare.",
      },
      {
        heading: "A Shared Mission",
        body: "Work alongside other professionals and volunteers committed to compassion, quality and service.",
      },
      {
        heading: "Meaningful Contribution",
        body: "Contribute to medical missions, community programmes, facility development and the growth of our healthcare mission.",
      },
      {
        heading: "A Place to Make a Difference",
        body: "Your contribution does not have to be large to matter. Time, skill, experience and commitment all have a place.",
      },
    ],
  },

  steps: {
    eyebrow: "How to get involved",
    items: [
      {
        number: "01",
        heading: "Tell Us About Yourself",
        body: "Share your profession, experience, interests and the kind of service you would like to offer.",
      },
      {
        number: "02",
        heading: "We’ll Connect With You",
        body: "Our team will review your information and contact you about relevant opportunities.",
      },
      {
        number: "03",
        heading: "Get Ready to Serve",
        body: "Where appropriate, we will verify credentials, discuss your availability and provide details of the service opportunity.",
      },
    ],
  },

  form: {
    eyebrow: "Volunteer registration",
    heading: "Take the first step.",
    body: "Tell us a little about yourself and how you would like to serve.",
    /** Volunteer registration is collected by Jotform (form "Let’s Build Together."). */
    jotformId: "263300882928058",
  },
};
