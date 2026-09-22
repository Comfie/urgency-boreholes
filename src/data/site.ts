// ─────────────────────────────────────────────────────────────
// Single source of truth for business details and site copy.
// Anything marked TODO must be confirmed by the client before launch.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'Urgency Boreholes',
  legalName: 'Urgency Boreholes', // TODO: confirm registered company name (CIPC)
  url: 'https://urgency-boreholes.vercel.app', // TODO: switch to https://urgencyboreholes.co.za once registered
  // TODO: replace with Paul's real numbers. Display format + international format
  phoneDisplay: '071 234 5678',
  phoneTel: '+27712345678',
  whatsapp: '27712345678',
  email: 'info@urgencyboreholes.co.za', // TODO: set up mailbox or use Paul's email
  address: {
    street: '6600 Blue Lily Close',
    suburb: 'Thatchfield Ridge',
    city: 'Centurion',
    province: 'Gauteng',
    country: 'ZA',
  },
  hours: 'Mon to Sat, 07:00 to 17:00', // TODO: confirm working hours
  radiusKm: 100,
  yearsDrilling: 4,
  founder: 'Paul', // TODO: confirm Paul is happy to be named on the About page
  social: {
    facebook: '', // TODO: add if Paul has pages
    instagram: '',
    tiktok: '',
  },
};

export const whatsappLink = (message = "Hi Urgency Boreholes, I'd like a quote.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${business.phoneTel}`;

export const areas = [
  'Centurion',
  'Midrand',
  'Pretoria',
  'Johannesburg North',
  'Sandton',
  'Fourways',
  'Randburg',
  'Kempton Park',
  'Irene & Midstream',
  'Olievenhoutbosch',
  'Thatchfield & Rooihuiskraal',
  'Hartbeespoort',
];

export type Service = {
  slug: string;
  title: string;
  short: string;
  summary: string;
  includes: string[];
  image: string; // file name in src/assets/work
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: 'borehole-drilling',
    title: 'Borehole drilling and new installations',
    short: 'Borehole drilling',
    summary:
      'We assess your property, advise on the best position for the borehole, then drill, case and cap it so it is ready to be equipped.',
    includes: [
      'Site visit to check access for the drilling rig',
      'Advice on borehole position and expected depth',
      'Drilling, casing and capping',
      'Yield test so you know how much water the borehole delivers',
    ],
    image: 'borehole-pump-install.jpg',
    imageAlt: 'Borehole casing and pump cable being installed in a residential garden',
  },
  {
    slug: 'pump-installation',
    title: 'Pump installation, repairs and replacements',
    short: 'Pump installation',
    summary:
      'The right pump, sized to your borehole and your household, wired to a protected control box so it runs reliably for years.',
    includes: [
      'Submersible pump sized to borehole depth and yield',
      'Control box with switchgear and pump protection',
      'Pump repairs, pulling and replacements',
      'Pressure systems for steady water flow in the house',
    ],
    image: 'submersible-pump.jpg',
    imageAlt: 'Stainless steel submersible borehole pump ready for installation',
  },
  {
    slug: 'water-purification',
    title: 'Water purification and filtration systems',
    short: 'Water purification',
    summary:
      'Borehole water often carries iron, hardness or sediment. We install filtration and softening systems so the water is clean and safe to use.',
    includes: [
      'Sediment and carbon filtration',
      'Water softeners for hard water',
      'Multi-stage treatment for drinking water',
      'Commercial reverse osmosis plants',
    ],
    image: 'three-stage-treatment.jpg',
    imageAlt: 'Three blue water treatment vessels with automatic control heads',
  },
  {
    slug: 'plumbing-connections',
    title: 'Plumbing and system connections',
    short: 'Plumbing & connections',
    summary:
      'We connect the borehole, tanks, filters and pumps to your house plumbing so everything works as one system.',
    includes: [
      'Tank stands, JoJo tank installation and connections',
      'Connecting the borehole to house, garden and pool',
      'Switch-over between borehole and municipal supply',
      'General plumbing repairs on the water system',
    ],
    image: 'tank-filtration-grey.jpg',
    imageAlt: 'Water tanks connected to a filtration system and pump in a backyard',
  },
];

export const steps = [
  {
    title: 'Send us a WhatsApp or call',
    body: 'Tell us where the property is and what you need. Photos of the yard help us prepare.',
  },
  {
    title: 'Site visit and quote',
    body: 'We check the site, access for equipment and your water needs, then send a clear written quote.',
  },
  {
    title: 'Drilling and installation',
    body: 'Our team drills, installs the pump, filtration and plumbing, and keeps you updated on progress.',
  },
  {
    title: 'Testing and handover',
    body: 'We test the flow and pressure, show you how the system works and leave the site clean.',
  },
];

// `image` is a file in src/assets/work. Leave it out to show a branded placeholder
// until the client sends the photo.
export type WorkItem = { image?: string; alt: string; caption: string };

export const work: WorkItem[] = [
  { alt: 'Drilling rig drilling a borehole on a residential property', caption: 'Borehole drilling on site' }, // TODO: drilling photo
  { image: 'filtration-system-tank.jpg', alt: 'Two blue filter vessels and a three-stage filter connected to a large tank beside a house', caption: 'Tank, softener and filtration system' },
  { image: 'tank-filtration-stone-wall.jpg', alt: 'JoJo tank with blue filter vessels and a pump cover on a brick base', caption: 'Tank with filtration and pump housing' },
  { image: 'three-stage-treatment.jpg', alt: 'Three blue treatment vessels with digital control valves', caption: 'Three-stage water treatment' },
  { image: 'softener-filters-courtyard.jpg', alt: 'Two tall filter vessels next to a tank and filter housing in a paved courtyard', caption: 'Softening and filtration in a courtyard' },
  { image: 'pump-control-panel.jpg', alt: 'Open pump control box with breakers and pump controller', caption: 'Pump control box and protection' },
  { image: 'tank-filtration-grey.jpg', alt: 'Grey water tanks connected to blue filters and a pump cover', caption: 'Tanks, filters and pump' },
  { image: 'submersible-pump.jpg', alt: 'Submersible pump laid out before installation', caption: 'Submersible pump ready to go down' },
  { image: 'borehole-pump-install.jpg', alt: 'Borehole casing with cables and pipes during installation', caption: 'Pump installation on site' },
  { alt: 'Drilling rig and crew at work', caption: 'Our rig and crew' }, // TODO: drilling/team photo
];

// TODO: PLACEHOLDER REVIEWS. Replace with real customer feedback before launch.
// Publishing invented reviews on a live site is misleading advertising.
export const testimonials = [
  {
    quote: 'The team explained everything upfront and the borehole was running within the week. We no longer worry when the municipal water goes off.',
    name: 'Thabo M.',
    place: 'Centurion',
    service: 'Borehole drilling',
  },
  {
    quote: 'Our water had a brown tint from iron. They installed a filtration system and the difference was immediate.',
    name: 'Anneke V.',
    place: 'Midrand',
    service: 'Water purification',
  },
  {
    quote: 'Quick to respond on WhatsApp, fair quote and neat work. They connected the tanks and borehole so it switches over automatically.',
    name: 'Sipho N.',
    place: 'Kempton Park',
    service: 'Plumbing & connections',
  },
];

export const faqs = [
  {
    q: 'How much does a borehole cost?',
    a: 'It depends mainly on how deep we need to drill, the ground conditions and the pump and filtration you choose. After a site visit we give you a written quote with each part itemised, so there are no surprises.',
  },
  {
    q: 'How deep will my borehole be?',
    a: 'Depth varies from property to property. We advise on the expected depth during the site visit, based on the area and the ground conditions.',
  },
  {
    q: 'How long does the work take?',
    a: 'Drilling a residential borehole is usually done in a day or two once the rig is on site. Installing the pump, filtration and plumbing typically follows within a few days.',
  },
  {
    q: 'Is borehole water safe to drink?',
    a: 'Not always straight from the ground. We recommend a water test and install the right filtration or purification system so the water is suitable for how you want to use it.',
  },
  {
    q: 'Do I need permission to drill a borehole?',
    a: 'Requirements depend on your municipality and how much water you plan to use. We will tell you what applies to your property and what you need to register.',
  },
  {
    q: 'Do you work outside Centurion?',
    a: 'Yes. We work within about 100 km of Centurion, including Midrand, Pretoria and Johannesburg. If your area is not listed, send us a message and we will confirm.',
  },
];

// Short clips from real jobs. Files live in public/videos (already web-ready H.264 MP4).
export const videos = [
  {
    src: '/videos/borehole-water-strike.mp4',
    poster: '/videos/borehole-water-strike.jpg',
    title: 'Water rising in a newly drilled borehole',
    body: 'The moment that matters: water coming up through a fresh borehole on a customer’s property.',
  },
  {
    src: '/videos/pump-test.mp4',
    poster: '/videos/pump-test.jpg',
    title: 'Pressure pump tested before handover',
    body: 'Every system is run and checked for flow and pressure before we hand it over.',
  },
];

// Extra service details used on the Services page.
export const serviceExtras: Record<string, { goodFor: string }> = {
  'borehole-drilling': { goodFor: 'Homes, smallholdings and businesses that want their own water supply.' },
  'pump-installation': { goodFor: 'New boreholes, and existing boreholes with a weak, noisy or failed pump.' },
  'water-purification': { goodFor: 'Water that is brown, hard, smells or leaves marks on taps and basins.' },
  'plumbing-connections': { goodFor: 'Connecting tanks, borehole and municipal supply so they work as one.' },
};
