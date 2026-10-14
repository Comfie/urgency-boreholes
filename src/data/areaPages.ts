// ─────────────────────────────────────────────────────────────
// Location pages: /areas/<slug>
//
// Each page must be genuinely useful on its own, not the same text with the town
// name swapped (Google treats that as doorway pages). What makes each one different
// is verified local information: which municipality's rules apply, dolomite
// restrictions, the consent process and local context.
//
// Regulatory facts were checked in October 2026 against the sources listed per page.
// Re-check them at least every six months; municipal rules change.
//
// TODO (Paul): add 1-3 real jobs per area to `projects` (suburb, what was done,
// photo file from src/assets/work). Real local projects are the strongest content
// these pages can have. Never add a project that did not happen.
// ─────────────────────────────────────────────────────────────

export type AreaSection = { heading: string; paragraphs: string[]; list?: string[] };
export type AreaProject = { suburb: string; summary: string; image?: string };

export type AreaPage = {
  slug: string;
  name: string;
  municipality: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  waMessage: string;
  sections: AreaSection[];
  suburbsHeading: string;
  suburbs: string[];
  suburbsNote: string;
  projects: AreaProject[];
  faqs: { q: string; a: string }[];
  sources: { label: string; href: string }[];
  nearby: string[]; // other area slugs
};

const checked = 'October 2026';
export const rulesCheckedNote = `Rules last checked ${checked}. Municipal requirements change, so always confirm the current position with your municipality before drilling.`;

export const areaPages: AreaPage[] = [
  // ── Centurion (home base) ──────────────────────────────────
  {
    slug: 'centurion',
    name: 'Centurion',
    municipality: 'City of Tshwane',
    metaTitle: 'Borehole Drilling & Pump Repairs in Centurion',
    metaDescription:
      'Centurion borehole drillers based in Thatchfield Ridge. Drilling, pump installation and 24/7 repairs, filtration and plumbing, with advice on Tshwane rules and dolomite.',
    h1: 'Borehole drilling and pump repairs in Centurion',
    intro:
      'Centurion is home. We are based in Thatchfield Ridge, so most Centurion addresses are close by for site visits, drilling and pump call-outs, day or night.',
    image: 'drilling-rig-residential.jpg',
    imageAlt: 'Urgency Boreholes drilling rig and crew drilling a borehole at a family home',
    waMessage: "Hi Urgency Boreholes, I'm in Centurion and need help with a borehole. My suburb is: ",
    sections: [
      {
        heading: 'Drilling in Centurion: check the ground first',
        paragraphs: [
          'Parts of Centurion lie on dolomite, a rock that can dissolve over time and form sinkholes. Pumping large amounts of groundwater from dolomite can make that worse, so the City of Tshwane restricts drilling in these areas.',
          'According to the City, boreholes are not allowed in Bronberrick and Eldoraigne. In other suburbs underlain by dolomite, including Valhalla, Hennopspark, Irene and Lyttelton, a proposed borehole must first be certified by a registered specialist.',
          'We check your address before we quote. If your property is in a restricted area, we tell you straight away rather than after a site visit. Where new drilling is not allowed, we can still repair and service an existing borehole, pump, filtration system or plumbing.',
        ],
      },
      {
        heading: 'Tshwane rules that apply in Centurion',
        paragraphs: [
          'Centurion falls under the City of Tshwane, so the metro’s Water Supply By-laws apply to every borehole. National registration is a separate matter: in July 2026 the Department of Water and Sanitation confirmed that reasonable household use does not need to be registered.',
        ],
        list: [
          'Notify the metro before drilling a new borehole where required',
          'Borehole water may only be used on the property where it is drilled, and may not be sold',
          'The borehole system may not be connected directly to the municipal network',
          'Test the water before using it for drinking',
          'Display a visible sign where a borehole exists',
        ],
      },
      {
        heading: 'Estates and complexes',
        paragraphs: [
          'Many Centurion homes are in estates or sectional-title complexes, where the home owners’ association or body corporate may have its own rules about boreholes, drilling rigs and where tanks can stand. Check with them early. We are happy to explain to the estate exactly what the work involves and how the rig will get in.',
        ],
      },
    ],
    suburbsHeading: 'Centurion suburbs we cover',
    suburbs: [
      'Thatchfield', 'Rooihuiskraal', 'Wierda Park', 'Heuweloord', 'Olievenhoutbosch', 'Irene',
      'Midstream', 'Lyttelton', 'Zwartkop', 'Highveld', 'Clubview', 'Doringkloof', 'The Reeds', 'Eldoraigne',
    ],
    suburbsNote: 'Drilling is restricted in some dolomite suburbs (see above). Pump repairs, filtration and plumbing are available everywhere.',
    projects: [],
    faqs: [
      {
        q: 'Can I drill a borehole in Eldoraigne?',
        a: 'The City of Tshwane does not allow new boreholes in Eldoraigne or Bronberrick because they are underlain by dolomite. If you already have a borehole there, we can still repair the pump, filtration and plumbing.',
      },
      {
        q: 'How do I know if my Centurion property is on dolomite?',
        a: 'Tell us your suburb and street when you contact us. We check it before quoting. In suburbs such as Valhalla, Hennopspark, Irene and Lyttelton, a registered specialist has to certify the borehole position before drilling.',
      },
      {
        q: 'How quickly can you get to me in Centurion?',
        a: 'We are based in Thatchfield Ridge and available 24/7. Send your suburb on WhatsApp and we will give you an honest time for a site visit or call-out.',
      },
      {
        q: 'Do I need to register my borehole in Centurion?',
        a: 'Not nationally, if the water is for reasonable household use. The Tshwane by-laws still apply, including notifying the metro before drilling where required. We explain what applies to your property.',
      },
    ],
    sources: [
      { label: 'Rekord: Are you allowed to drill a borehole in Pretoria? (Jan 2024)', href: 'https://citizen.co.za/rekord/?p=479980' },
      { label: 'Rekord: Tshwane borehole rules after DWS clarification (Jul 2026)', href: 'https://www.citizen.co.za/rekord/?p=575940' },
      { label: 'OUTA: DWS confirms most household borehole users do not need to register (Jul 2026)', href: 'https://www.outa.co.za/blog/newsroom-1/dws-confirms-most-household-borehole-users-do-not-need-to-register-says-outa-1510' },
    ],
    nearby: ['midrand', 'pretoria', 'johannesburg'],
  },

  // ── Midrand ────────────────────────────────────────────────
  {
    slug: 'midrand',
    name: 'Midrand',
    municipality: 'City of Johannesburg',
    metaTitle: 'Borehole Drilling & Pump Repairs in Midrand',
    metaDescription:
      'Borehole drilling, pump installation and 24/7 repairs, filtration and plumbing in Midrand. We explain Johannesburg’s consent rules before we drill. WhatsApp for a quote.',
    h1: 'Borehole drilling and pump repairs in Midrand',
    intro:
      'Midrand borders Centurion, which makes it one of the easiest areas for us to reach. We drill, equip and repair boreholes for homes, estates and businesses across Midrand.',
    image: 'drilling-rig-city.jpg',
    imageAlt: 'Urgency Boreholes truck-mounted drilling rig working on a paved commercial site',
    waMessage: "Hi Urgency Boreholes, I'm in Midrand and need help with a borehole. My suburb is: ",
    sections: [
      {
        heading: 'Midrand follows Johannesburg’s rules, not Tshwane’s',
        paragraphs: [
          'Midrand sits between Pretoria and Johannesburg, but it falls under the City of Johannesburg. That matters, because Johannesburg requires written consent from the City before a borehole is drilled.',
          'The application goes to the City’s Land Use Management department and is circulated to Johannesburg Water, the Johannesburg Roads Agency and City Power, with a geologist checking for dolomite risk. The City aims to decide within 28 days, but delays are common, so build that time into your plans. Our <a href="/areas/johannesburg">Johannesburg page</a> sets out the full process.',
          'Once the borehole is in, Johannesburg Water requires a backflow preventer so borehole water can never flow back into the municipal network. We install the plumbing with that in mind.',
        ],
      },
      {
        heading: 'Estates, complexes and business parks',
        paragraphs: [
          'Much of Midrand is made up of estates and sectional-title complexes. Their home owners’ associations often have rules about drilling rigs, noise and where tanks can stand, so check with them before you book.',
          'For business parks and commercial properties, the national rules are different from homes: commercial, agricultural and other high-volume groundwater use must be registered with the relevant Catchment Management Agency. Household use for reasonable domestic purposes does not need registration.',
        ],
      },
      {
        heading: 'Pump repairs in Midrand',
        paragraphs: [
          'If you already have a borehole and the pump has stopped, trips the electricity or delivers weak pressure, we can help 24/7. We check the control box and electrics first, so you only pay for pulling the pump when the fault is down the hole. See <a href="/services/borehole-pump-repairs">borehole pump repairs</a>.',
        ],
      },
    ],
    suburbsHeading: 'Midrand areas we cover',
    suburbs: [
      'Halfway House', 'Vorna Valley', 'Noordwyk', 'Carlswald', 'Kyalami', 'Blue Hills',
      'Glen Austin', 'Waterfall', 'President Park', 'Erand Gardens',
    ],
    suburbsNote: 'Not on the list? Send us your suburb. Everywhere in Midrand is well within our service area.',
    projects: [],
    faqs: [
      {
        q: 'Do I need permission to drill a borehole in Midrand?',
        a: 'Yes. Midrand is part of the City of Johannesburg, which requires written consent before a borehole is drilled. Drilling without it can lead to fines or prosecution.',
      },
      {
        q: 'How long does Johannesburg’s borehole consent take?',
        a: 'The City aims for about 28 days, but delays are common. Start the application early if you want the borehole by a particular date.',
      },
      {
        q: 'What is a backflow preventer and do I need one?',
        a: 'It is a valve that stops water flowing back from your borehole system into the municipal pipes. Johannesburg Water requires one, so it is part of how we connect boreholes in Midrand.',
      },
      {
        q: 'Do you repair borehole pumps in Midrand estates?',
        a: 'Yes. We repair and replace borehole pumps, control boxes and pressure systems across Midrand, 24/7. Let us know if the estate needs our details for access.',
      },
    ],
    sources: [
      { label: 'Daily Maverick: Thinking of drilling a borehole in Joburg? (Feb 2025)', href: 'https://www.dailymaverick.co.za/article/2025-02-28-thinking-of-drilling-a-borehole-in-joburg-heres-what-you-need-to-know/' },
      { label: 'OUTA: DWS confirms most household borehole users do not need to register (Jul 2026)', href: 'https://www.outa.co.za/blog/newsroom-1/dws-confirms-most-household-borehole-users-do-not-need-to-register-says-outa-1510' },
    ],
    nearby: ['centurion', 'johannesburg', 'pretoria'],
  },

  // ── Pretoria ───────────────────────────────────────────────
  {
    slug: 'pretoria',
    name: 'Pretoria',
    municipality: 'City of Tshwane',
    metaTitle: 'Borehole Drilling & Pump Repairs in Pretoria',
    metaDescription:
      'Borehole drilling, pump installation and 24/7 repairs, water filtration and plumbing in Pretoria, from our Centurion base. What Tshwane’s by-laws require, explained.',
    h1: 'Borehole drilling and pump repairs in Pretoria',
    intro:
      'We work across Pretoria from our base in Centurion, on the city’s southern side. Homes, smallholdings and businesses call us for new boreholes, pump repairs and water treatment.',
    image: 'filtration-system-tank.jpg',
    imageAlt: 'Borehole water tank with blue filtration vessels and a three-stage filter beside a house',
    waMessage: "Hi Urgency Boreholes, I'm in Pretoria and need help with a borehole. My suburb is: ",
    sections: [
      {
        heading: 'What Tshwane’s by-laws require',
        paragraphs: [
          'Pretoria falls under the City of Tshwane. Homeowners may drill and use boreholes, but they must follow the metro’s Water Supply By-laws, which are separate from national registration. In practice, that means:',
        ],
        list: [
          'Notify the metro before drilling a new borehole where required, with details of the installation',
          'An environmental impact assessment may be needed where there are environmental risks',
          'Existing boreholes may have to be declared if the municipality asks',
          'Use the water only on your own property; it may not be sold',
          'Never connect the borehole system directly to the municipal network',
          'Using borehole water for drinking may need municipal approval, and the water should be tested first',
          'Display a visible sign where the borehole is',
        ],
      },
      {
        heading: 'Dolomite in parts of Tshwane',
        paragraphs: [
          'Some Tshwane suburbs are underlain by dolomite, where drilling is restricted or needs a specialist’s certification first. The suburbs named in the City’s guidance include several in Centurion; see our <a href="/areas/centurion">Centurion page</a> for details. We check every address before quoting.',
        ],
      },
      {
        heading: 'Smallholdings and businesses',
        paragraphs: [
          'On smallholdings around Pretoria, a borehole is often the main water supply rather than a backup. If the water is used for farming, a business or other high-volume purposes, it must be registered with the relevant Catchment Management Agency. Reasonable household use and a small, non-commercial garden do not need registration.',
          'For commercial properties that need treated water, we also install <a href="/services/water-filtration-purification">reverse osmosis and multi-stage treatment</a>.',
        ],
      },
    ],
    suburbsHeading: 'Pretoria areas we cover',
    suburbs: [
      'Pretoria East', 'Faerie Glen', 'Garsfontein', 'Moreleta Park', 'Waterkloof', 'Lynnwood',
      'Menlyn', 'Brooklyn', 'Hatfield', 'Montana', 'Wonderboom', 'Pretoria North',
    ],
    suburbsNote: 'All of Pretoria is within our service area. If your suburb is not listed, send it to us on WhatsApp.',
    projects: [],
    faqs: [
      {
        q: 'Do I need to register my borehole in Pretoria?',
        a: 'For reasonable household use, no national registration is needed; the Department of Water and Sanitation confirmed this in July 2026. Tshwane’s by-laws still apply, including notifying the metro before drilling where required.',
      },
      {
        q: 'Can I drink borehole water in Pretoria?',
        a: 'Only once it has been tested and, if needed, treated. Tshwane may require approval for drinking use. We install filtration and purification matched to the test results.',
      },
      {
        q: 'Do you work in Pretoria East and Pretoria North?',
        a: 'Yes. We work across Pretoria, including the east and north. Send your suburb and we will confirm a time for a site visit.',
      },
      {
        q: 'I have a smallholding. Do I need to register?',
        a: 'If the borehole water is only for the household and a small non-commercial garden, no. If you use it for farming or a business, register it with the relevant Catchment Management Agency.',
      },
    ],
    sources: [
      { label: 'Rekord: Tshwane borehole rules after DWS clarification (Jul 2026)', href: 'https://www.citizen.co.za/rekord/?p=575940' },
      { label: 'Rekord: Are you allowed to drill a borehole in Pretoria? (Jan 2024)', href: 'https://citizen.co.za/rekord/?p=479980' },
      { label: 'OUTA: DWS confirms most household borehole users do not need to register (Jul 2026)', href: 'https://www.outa.co.za/blog/newsroom-1/dws-confirms-most-household-borehole-users-do-not-need-to-register-says-outa-1510' },
    ],
    nearby: ['centurion', 'midrand', 'johannesburg'],
  },

  // ── Johannesburg ───────────────────────────────────────────
  {
    slug: 'johannesburg',
    name: 'Johannesburg',
    municipality: 'City of Johannesburg',
    metaTitle: 'Borehole Drilling & Repairs in Johannesburg North',
    metaDescription:
      'Borehole drilling, pump installation and 24/7 repairs in Sandton, Fourways, Randburg and Johannesburg North, with Joburg’s borehole consent process explained.',
    h1: 'Borehole drilling and pump repairs in Johannesburg',
    intro:
      'We work in Johannesburg’s northern suburbs, including Sandton, Fourways and Randburg, within about 100 km of our Centurion base. Elsewhere in Joburg? Send us your suburb and we will confirm.',
    image: 'tank-filtration-stone-wall.jpg',
    imageAlt: 'Water tank with blue filter vessels and a pump cover installed on a brick base',
    waMessage: "Hi Urgency Boreholes, I'm in Johannesburg and need help with a borehole. My suburb is: ",
    sections: [
      {
        heading: 'Why Joburg is strict about drilling',
        paragraphs: [
          'In February 2025, a property owner drilled a borehole without permission above the Gautrain tunnel between Park and Rosebank stations. Water and soil seeped into the tunnel and disrupted Gautrain services for most of that month. The City has since warned that drilling without consent can lead to fines and prosecution.',
          'Underground rail tunnels, water and sewer pipes, and power cables run beneath many Johannesburg properties. That is why the City checks every borehole application with its utilities before approving it.',
        ],
      },
      {
        heading: 'The City of Johannesburg consent process',
        paragraphs: ['Before drilling, the property owner needs written consent from the City. As reported in 2025, the process works like this:'],
        list: [
          'Apply for consent under Section 14(1) of the City’s 2018 Land Use Scheme, to Land Use Management',
          'Include the application form, title deed, zoning details, a short motivation and a drawing showing where the borehole will go',
          'Pay the City’s application fee (check the current amount with the City)',
          'Johannesburg Water, the Johannesburg Roads Agency and City Power review it, and a geologist checks for dolomite risk',
          'The City aims to decide within 28 days, but delays are common',
          'Once you receive the consent letter, drilling can go ahead',
          'Johannesburg Water requires a backflow preventer between the borehole system and the municipal supply',
        ],
      },
      {
        heading: 'National registration',
        paragraphs: [
          'Separately from the City, in July 2026 the Department of Water and Sanitation confirmed that boreholes used for reasonable household purposes do not need national registration. Commercial and other high-volume users must register with the relevant Catchment Management Agency.',
        ],
      },
    ],
    suburbsHeading: 'Johannesburg areas we cover',
    suburbs: ['Sandton', 'Bryanston', 'Sunninghill', 'Fourways', 'Lonehill', 'Douglasdale', 'Randburg', 'Northriding'],
    suburbsNote: 'Our main Johannesburg area is the northern suburbs. For other parts of the city, send us your suburb and we will confirm.',
    projects: [],
    faqs: [
      {
        q: 'Do I need consent to drill a borehole in Johannesburg?',
        a: 'Yes. The City of Johannesburg requires written consent before a borehole is drilled. Drilling without it is a contravention and can lead to a fine or prosecution.',
      },
      {
        q: 'How long does Johannesburg’s borehole approval take?',
        a: 'The City aims for 28 days, but delays are common. Plan for longer if you need the borehole by a particular date.',
      },
      {
        q: 'Do you work in Sandton and Fourways?',
        a: 'Yes. Sandton, Fourways and Randburg are part of our regular Johannesburg North service area. We also do pump repairs there 24/7.',
      },
      {
        q: 'Can you repair my pump if my borehole was drilled years ago?',
        a: 'Yes. Pump repairs, filtration and plumbing on an existing borehole do not need a new drilling consent. We repair and replace pumps regardless of who installed them.',
      },
    ],
    sources: [
      { label: 'Daily Maverick: Thinking of drilling a borehole in Joburg? (Feb 2025)', href: 'https://www.dailymaverick.co.za/article/2025-02-28-thinking-of-drilling-a-borehole-in-joburg-heres-what-you-need-to-know/' },
      { label: 'EWN: Repairs to damaged Gautrain tunnel to be fast-tracked (Feb 2025)', href: 'https://ewn.co.za/2025/02/17/gauteng-transport-mec-diale-tlabela-says-repairs-to-damaged-gautrain-tunnel-to-be-fast-tracked' },
      { label: 'TopAuto: The Gautrain is back in business (Feb 2025)', href: 'https://topauto.co.za/news/125867/the-gautrain-is-back-in-business/' },
      { label: 'OUTA: DWS confirms most household borehole users do not need to register (Jul 2026)', href: 'https://www.outa.co.za/blog/newsroom-1/dws-confirms-most-household-borehole-users-do-not-need-to-register-says-outa-1510' },
    ],
    nearby: ['midrand', 'centurion', 'pretoria'],
  },
];

export const areaPageBySlug = (slug: string) => areaPages.find((p) => p.slug === slug);
