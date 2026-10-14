// ─────────────────────────────────────────────────────────────
// Dedicated service pages: /services/<slug>
// One page per distinct customer need, so each can rank for its own searches
// without competing with the others (see SEO-REPORT.md, keyword map).
//
// Accuracy rules for this file:
// - Only describe work Urgency Boreholes actually does (matches site.ts services).
// - No prices, guaranteed depths, response times or certifications unless Paul confirms them.
// - Regulatory statements must stay in line with the verified sources in SEO-REPORT.md.
// Strings in `body`, `paragraphs` and FAQ answers may contain simple internal links.
// ─────────────────────────────────────────────────────────────

export type ServicePage = {
  slug: string;
  name: string; // short name used in links and breadcrumbs
  serviceType: string; // schema.org Service.serviceType
  metaTitle: string; // <title>, ~55-60 characters before the brand suffix
  metaDescription: string; // ~150-160 characters
  h1: string;
  eyebrow: string;
  intro: string;
  image: string; // file in src/assets/work
  imageAlt: string;
  waMessage: string;
  signsTitle: string;
  signs: { title: string; body: string }[];
  approachTitle: string;
  paragraphs: string[];
  includesTitle: string;
  includes: string[];
  process: { title: string; body: string }[];
  gallery: string[]; // file names in src/assets/work, must exist in site.ts `work`
  faqs: { q: string; a: string }[];
  related: string[]; // other service slugs
};

export const servicePages: ServicePage[] = [
  // ── 1. Borehole drilling ───────────────────────────────────
  {
    slug: 'borehole-drilling',
    name: 'Borehole drilling',
    serviceType: 'Borehole drilling',
    metaTitle: 'Borehole Drilling in Centurion, Pretoria & Joburg',
    metaDescription:
      'New borehole drilling for homes and businesses in Centurion, Midrand, Pretoria and Johannesburg. Site visit, drilling, casing and yield test, with a written quote.',
    h1: 'Borehole drilling in Centurion, Pretoria and Johannesburg',
    eyebrow: 'New boreholes for homes and businesses',
    intro:
      'We drill, case and cap new boreholes across Gauteng, then test how much water they deliver. If you want the whole system, the same team installs the pump, filtration and plumbing.',
    image: 'drilling-rig-residential.jpg',
    imageAlt: 'Urgency Boreholes drilling rig and crew drilling a new borehole in the driveway of a family home',
    waMessage: "Hi Urgency Boreholes, I'd like a quote for drilling a new borehole. My suburb is: ",
    signsTitle: 'Why people drill a borehole',
    signs: [
      {
        title: 'Water cuts and outages',
        body: 'Municipal supply interruptions are a regular problem in parts of Gauteng. A borehole with a tank keeps the house running while you wait for the supply to come back.',
      },
      {
        title: 'High water bills',
        body: 'Gardens, pools and large households use a lot of water. Using borehole water for them means buying less from the municipality.',
      },
      {
        title: 'Water for a business or smallholding',
        body: 'Businesses and smallholdings that depend on water use a borehole as a backup or main supply. Larger, commercial use has its own registration rules, which we explain upfront.',
      },
    ],
    approachTitle: 'How we drill your borehole',
    paragraphs: [
      'Every property is different, so we start with a site visit. We look at where the drilling rig can get in, where the borehole can go safely away from pipes, cables and buildings, and how you plan to use the water. Then we give you a written, itemised quote.',
      'Drilling a residential borehole is usually done in a day or two once the rig is on site. We case the hole so it does not collapse, cap it, and run a yield test so you know how much water it can deliver. That figure decides which pump suits the borehole, so you are not sold a pump that is too big or too small.',
      'Before drilling we also check the rules that apply to your address. Normal household use does not need national registration, but municipalities have their own requirements: <a href="/areas/johannesburg">Johannesburg requires written consent before drilling</a>, and <a href="/areas/centurion">parts of Centurion are on dolomite</a>, where drilling is restricted.',
    ],
    includesTitle: 'What borehole drilling includes',
    includes: [
      'Site visit to check access for the drilling rig and where the borehole can go',
      'Advice on borehole position and expected depth for your area',
      'Drilling, casing and capping',
      'Yield test so you know how much water the borehole delivers',
      'Written, itemised quote before any work starts',
      'Optional: pump, control box, tanks, filtration and plumbing by the same team',
    ],
    process: [
      { title: 'WhatsApp or call', body: 'Send your suburb and a few photos of the yard, especially where a truck could get in.' },
      { title: 'Site visit and quote', body: 'We check access, position and your water needs, then send a written quote.' },
      { title: 'Drilling day', body: 'The rig drills, cases and caps the borehole, usually within a day or two.' },
      { title: 'Yield test and next step', body: 'We test the yield and recommend the right pump if you want us to equip it.' },
    ],
    gallery: ['drilling-rig-residential.jpg', 'drilling-rig-city.jpg', 'borehole-pump-install.jpg'],
    faqs: [
      {
        q: 'How much does it cost to drill a borehole?',
        a: 'It depends mostly on how deep we have to drill, the ground conditions and whether you want the pump, tanks and filtration as well. We do not quote a price without seeing the site, because a figure given over the phone is a guess. After the site visit you get a written quote with every item listed.',
      },
      {
        q: 'How deep will my borehole be?',
        a: 'Depth varies from property to property, even in the same suburb. We give you our expected depth at the site visit, based on the area and the ground, and the quote explains how depth affects the cost.',
      },
      {
        q: 'Is there always water when you drill?',
        a: 'No honest driller can promise that. Groundwater depends on the geology under your property. We advise on the best position and tell you upfront how the quote handles the possibility of a low-yielding or dry hole.',
      },
      {
        q: 'Do I need permission to drill?',
        a: 'For reasonable household use you do not need to register with the Department of Water and Sanitation; this was confirmed in July 2026. Your municipality may still have requirements. Johannesburg (including Midrand) requires written consent before drilling, and Tshwane restricts drilling in some dolomite suburbs. We check this for your address before we start.',
      },
      {
        q: 'Will the drilling damage my driveway or garden?',
        a: 'The rig is heavy and drilling is messy, so we plan access with you at the site visit and agree where the truck will stand. We clean up when the job is done.',
      },
    ],
    related: ['borehole-pump-installation', 'water-filtration-purification', 'borehole-plumbing'],
  },

  // ── 2. Pump installation ───────────────────────────────────
  {
    slug: 'borehole-pump-installation',
    name: 'Borehole pump installation',
    serviceType: 'Borehole pump installation',
    metaTitle: 'Borehole Pump Installation in Centurion & Gauteng',
    metaDescription:
      'Submersible borehole pumps sized to your borehole, with a protected control box and pressure system. Installation in Centurion, Midrand, Pretoria and Johannesburg.',
    h1: 'Borehole pump installation',
    eyebrow: 'Submersible pumps, control boxes and pressure systems',
    intro:
      'A borehole is only as good as the pump in it. We size the pump to your borehole and your household, wire it to a protected control box and set up a pressure system so the water arrives at a steady pressure.',
    image: 'submersible-pump.jpg',
    imageAlt: 'Stainless steel submersible borehole pump laid out before installation',
    waMessage: "Hi Urgency Boreholes, I'd like a quote for a borehole pump installation. My suburb is: ",
    signsTitle: 'When you need a pump installed',
    signs: [
      {
        title: 'A new borehole',
        body: 'A freshly drilled borehole needs a pump that matches its depth and yield. We use the yield test results to choose it.',
      },
      {
        title: 'An old borehole you want to use again',
        body: 'Many properties have a borehole that has not been used for years. We check whether it still delivers water before recommending a pump.',
      },
      {
        title: 'The wrong pump for the job',
        body: 'A pump that is too big can run the borehole dry and burn out. One that is too small cannot keep up with the house. Both are fixed by sizing it properly.',
      },
    ],
    approachTitle: 'Getting the pump right',
    paragraphs: [
      'The pump has to suit three things: how deep the water is, how much water the borehole can supply, and how much water you use. We look at all three before choosing a submersible pump, rather than fitting whatever is on the shelf.',
      'The pump is wired to a control box with switchgear and pump protection, so a power problem or a drop in the water level does not destroy it. Where you want water in the house at steady pressure, we add a pressure system as well.',
      'If you also need tanks, filtration or a connection to the house, our <a href="/services/borehole-plumbing">plumbing team</a> does it as part of the same job.',
    ],
    includesTitle: 'What pump installation includes',
    includes: [
      'Submersible pump sized to borehole depth and yield',
      'Control box with switchgear and pump protection',
      'Riser pipe, cable and safety rope down the borehole',
      'Pressure systems for steady water pressure in the house',
      'Testing flow and pressure before handover',
    ],
    process: [
      { title: 'Tell us about the borehole', body: 'New or existing? Send what you know: depth, yield test results or the old pump details.' },
      { title: 'Assess and quote', body: 'We check the borehole and your water use, then send a written quote.' },
      { title: 'Install', body: 'We install the pump, control box and pressure system and connect them safely.' },
      { title: 'Test and hand over', body: 'We run the system, check flow and pressure, and show you how it works.' },
    ],
    gallery: ['submersible-pump.jpg', 'borehole-pump-install.jpg', 'pump-control-panel.jpg'],
    faqs: [
      {
        q: 'Which borehole pump do I need?',
        a: 'It depends on the depth of the water, the yield of the borehole and how much water you use. We work it out from your borehole details or a yield test, so the pump is neither too weak nor big enough to pump the borehole dry.',
      },
      {
        q: 'Do I need a control box?',
        a: 'Yes. The control box houses the switchgear and protection that stop the pump from being damaged by electrical faults or by running without water. It is one of the most common reasons pumps fail early when it is left out.',
      },
      {
        q: 'Can you install a pump in a borehole someone else drilled?',
        a: 'Yes. We check that the borehole still delivers water and use whatever information you have about it. If there is no yield data, we can test it first.',
      },
      {
        q: 'My pump has stopped. Do I need a new one?',
        a: 'Not necessarily. Many pump problems are electrical or in the control box and can be repaired. See our <a href="/services/borehole-pump-repairs">borehole pump repairs</a> page or WhatsApp us the symptoms.',
      },
    ],
    related: ['borehole-pump-repairs', 'borehole-drilling', 'borehole-plumbing'],
  },

  // ── 3. Pump repairs ────────────────────────────────────────
  {
    slug: 'borehole-pump-repairs',
    name: 'Borehole pump repairs',
    serviceType: 'Borehole pump repair',
    metaTitle: 'Borehole Pump Repairs 24/7 in Centurion & Gauteng',
    metaDescription:
      'Borehole pump not working? We repair, pull and replace borehole pumps, control boxes and pressure systems 24/7 in Centurion, Midrand, Pretoria and Johannesburg.',
    h1: 'Borehole pump repairs and replacements',
    eyebrow: 'Available 24/7, including weekends',
    intro:
      'No water from the borehole is urgent. We find out why the pump stopped, repair it where that makes sense and replace it where it does not. Call or WhatsApp any time, day or night.',
    image: 'pump-control-panel.jpg',
    imageAlt: 'Open borehole pump control box with breakers and pump controller during a repair',
    waMessage: 'Hi Urgency Boreholes, my borehole pump has a problem. My suburb is: ',
    signsTitle: 'Common borehole pump problems',
    signs: [
      { title: 'No water at all', body: 'The pump does not start, or starts and delivers nothing. The cause can be electrical, in the control box, or the pump itself.' },
      { title: 'The trip switch keeps tripping', body: 'Usually an electrical fault in the cable, a joint or the pump motor. Keep resetting it and you risk burning out the pump.' },
      { title: 'Pump runs but water is weak', body: 'Low pressure or a weak flow can point to a worn pump, a leak in the riser pipe or a dropping water level in the borehole.' },
      { title: 'Pump switches on and off constantly', body: 'Rapid cycling is often a pressure tank or pressure switch problem, and it wears the pump out quickly.' },
      { title: 'Sand, mud or dirty water', body: 'Sediment in the water can damage the pump and may mean the borehole or the pump position needs attention.' },
      { title: 'Strange noises', body: 'Grinding, humming or rattling usually means something is wearing out. Catching it early is cheaper than a burnt-out pump.' },
    ],
    approachTitle: 'How we repair borehole pumps',
    paragraphs: [
      'We start at the surface. The control box, wiring and pressure system are checked first, because that is where many faults are, and fixing them does not require pulling the pump out of the borehole.',
      'If the fault is down the hole, we pull the pump, riser pipe and cable, find the problem and tell you honestly whether a repair is worth it or a replacement makes more sense. You get the cost before we go ahead.',
      'When we replace a pump, we size the new one to the borehole rather than simply matching the old model, because an oversized pump is a common reason the old one failed. See <a href="/services/borehole-pump-installation">borehole pump installation</a> for how we choose pumps.',
    ],
    includesTitle: 'Repair work we do',
    includes: [
      'Fault finding on pumps, control boxes and wiring',
      'Pulling and reinstalling submersible pumps',
      'Pump repairs and replacements',
      'Control box and pump protection repairs',
      'Pressure tank and pressure switch problems',
      'Leaking riser pipes and borehole head repairs',
    ],
    process: [
      { title: 'Tell us the symptoms', body: 'WhatsApp what the pump is doing. A short video of the control box helps us arrive prepared.' },
      { title: 'Diagnose', body: 'We check the electrics and control box first, then pull the pump if needed.' },
      { title: 'Agree the fix', body: 'You get the cost of repairing or replacing before we go ahead.' },
      { title: 'Repair and test', body: 'We fix it, run the system and check flow and pressure before we leave.' },
    ],
    gallery: ['pump-control-panel.jpg', 'borehole-pump-install.jpg', 'submersible-pump.jpg'],
    faqs: [
      {
        q: 'Do you do emergency borehole pump repairs?',
        a: 'Yes. We are available 24/7, including weekends and public holidays. Call or WhatsApp us and we will tell you honestly when we can be on site.',
      },
      {
        q: 'Why does my borehole pump keep tripping the electricity?',
        a: 'Common causes are a damaged cable or cable joint down the borehole, moisture in the connections, or a failing pump motor. Repeatedly resetting the breaker can make the damage worse, so it is best to switch it off and have it checked.',
      },
      {
        q: 'Should I repair or replace my borehole pump?',
        a: 'It depends on the age of the pump, what has failed and the cost of the repair compared with a new pump. We give you both options with prices so you can decide.',
      },
      {
        q: 'Can a pump run dry and burn out?',
        a: 'Yes. If the water level drops below the pump, it can overheat and fail. Pump protection in the control box switches the pump off when that happens, which is why we always include it.',
      },
      {
        q: 'Do you repair pumps you did not install?',
        a: 'Yes. We repair and replace borehole pumps regardless of who installed them.',
      },
    ],
    related: ['borehole-pump-installation', 'borehole-plumbing', 'water-filtration-purification'],
  },

  // ── 4. Water filtration and purification ──────────────────
  {
    slug: 'water-filtration-purification',
    name: 'Water filtration and purification',
    serviceType: 'Borehole water treatment',
    metaTitle: 'Borehole Water Filtration & Purification',
    metaDescription:
      'Filtration, softeners and multi-stage treatment for borehole water with iron, hardness, sediment or smells. Installed in Centurion, Midrand, Pretoria and Johannesburg.',
    h1: 'Borehole water filtration and purification',
    eyebrow: 'Iron, hard water, sediment and smells',
    intro:
      'Borehole water often carries iron, hardness or sediment. We install filtration, softening and multi-stage treatment systems so the water is clean and suitable for the way you want to use it.',
    image: 'three-stage-treatment.jpg',
    imageAlt: 'Three blue borehole water treatment vessels with automatic control heads',
    waMessage: "Hi Urgency Boreholes, I'd like advice on filtering my borehole water. My suburb is: ",
    signsTitle: 'Signs your borehole water needs treatment',
    signs: [
      { title: 'Brown or orange stains', body: 'Staining on basins, toilets, paving and walls is usually iron or manganese in the water.' },
      { title: 'White scale and marks', body: 'Hard water leaves scale on taps, kettles and shower doors and shortens the life of geysers and appliances.' },
      { title: 'Cloudy or sandy water', body: 'Sediment clogs taps and irrigation and wears out valves and pumps.' },
      { title: 'Bad smell or taste', body: 'A rotten-egg smell or metallic taste means something in the water needs to be dealt with before you use it in the house.' },
    ],
    approachTitle: 'Treating the problem you actually have',
    paragraphs: [
      'Water from different boreholes, even on neighbouring properties, can be very different. That is why we start by finding out what is in your water, instead of selling a standard system that may not fix your problem.',
      'Then we match the treatment to the result and to how you use the water. Garden and pool water usually needs less treatment than water for the kitchen and bathrooms. Typical systems combine sediment and carbon filtration, softeners for hard water, and multi-stage treatment where the water will be used for drinking. For businesses we also install reverse osmosis plants.',
      'Filtration is usually installed between the borehole and your tanks or house. Our <a href="/services/borehole-plumbing">plumbing team</a> connects it so it works with your pump and pressure system.',
    ],
    includesTitle: 'Treatment systems we install',
    includes: [
      'Sediment and carbon filtration',
      'Iron and discolouration filtration',
      'Water softeners for hard water',
      'Multi-stage treatment for drinking water',
      'Commercial reverse osmosis plants',
      'Connection to your tanks, pump and house plumbing',
    ],
    process: [
      { title: 'Tell us what you see', body: 'Send photos of stains, scale or the water in a glass, and how you want to use it.' },
      { title: 'Find out what is in it', body: 'A water test shows what needs treating. We advise on testing and explain the results.' },
      { title: 'Recommend and quote', body: 'You get a written quote for a system matched to your water and your use.' },
      { title: 'Install and explain', body: 'We install the system, test it and show you how to maintain it.' },
    ],
    gallery: ['three-stage-treatment.jpg', 'filtration-system-tank.jpg', 'softener-filters-courtyard.jpg', 'filtration-softeners-wall.jpg'],
    faqs: [
      {
        q: 'Is borehole water safe to drink?',
        a: 'Not always straight from the ground. Borehole water can contain bacteria, iron, nitrates or other substances you cannot see. Have it tested before you drink it, and install treatment matched to the results. Municipal by-laws in Tshwane also expect owners to check that borehole water is fit for drinking.',
      },
      {
        q: 'How do I get rid of the brown stains from my borehole water?',
        a: 'Brown or orange staining is usually iron, sometimes with manganese. A filtration system designed for iron removal stops it at the source. Cleaning the stains without treating the water only lasts until the next time you irrigate.',
      },
      {
        q: 'Do I need a water softener?',
        a: 'If you see white scale on taps, kettles and shower doors, your water is hard. A softener protects your geyser, appliances and fittings. For garden-only use, it is usually not needed.',
      },
      {
        q: 'Do filters need maintenance?',
        a: 'Yes. Filter cartridges need replacing and some systems need regular backwashing or salt top-ups. We show you what your system needs when we hand it over.',
      },
    ],
    related: ['borehole-plumbing', 'borehole-drilling', 'borehole-pump-installation'],
  },

  // ── 5. Plumbing and connections ───────────────────────────
  {
    slug: 'borehole-plumbing',
    name: 'Borehole plumbing and connections',
    serviceType: 'Borehole plumbing',
    metaTitle: 'Borehole Plumbing, Tanks & Connections in Gauteng',
    metaDescription:
      'Tank stands, JoJo tanks and borehole connections to your house, garden and pool, with a safe switch-over to municipal water. Centurion, Midrand, Pretoria and Joburg.',
    h1: 'Borehole plumbing, tanks and connections',
    eyebrow: 'Making the whole water system work together',
    intro:
      'We connect the borehole, tanks, filters and pumps to your house plumbing so everything works as one system, and set up the switch-over between borehole and municipal water so the two supplies never mix.',
    image: 'tank-filtration-grey.jpg',
    imageAlt: 'Water tanks connected to blue filtration vessels and a pump cover in a backyard',
    waMessage: "Hi Urgency Boreholes, I'd like a quote for borehole plumbing and tank connections. My suburb is: ",
    signsTitle: 'When you need borehole plumbing',
    signs: [
      { title: 'Using borehole water in the house', body: 'Borehole water that only reaches the garden tap is wasted value. We bring it to the house, with filtration where needed.' },
      { title: 'Adding storage tanks', body: 'Tanks give you a reserve during outages and let the borehole recover between pumping.' },
      { title: 'Switching between supplies', body: 'You want to change between borehole and municipal water easily, without the two supplies ever being connected directly.' },
      { title: 'A system that grew in pieces', body: 'Pump, tanks and filters installed at different times by different people often fight each other. We make them work together.' },
    ],
    approachTitle: 'One system, connected safely',
    paragraphs: [
      'We plan the layout with you: where the tanks stand, where the filters and pressure system go, and which parts of the property use borehole water. Then we connect the borehole to the house, garden, pool or irrigation as agreed.',
      'Municipalities are strict about keeping borehole water out of the municipal network. Tshwane prohibits direct connections between a borehole system and the municipal supply, and Johannesburg Water requires a backflow preventer. We set up the switch-over so the two supplies stay separate and you stay within the rules.',
      'If anything else on the system needs attention, from a weak pump to stained water, the same team can sort it out. See <a href="/services/borehole-pump-repairs">pump repairs</a> and <a href="/services/water-filtration-purification">water filtration</a>.',
    ],
    includesTitle: 'What borehole plumbing includes',
    includes: [
      'Tank stands, JoJo tank installation and connections',
      'Connecting the borehole to house, garden, pool and irrigation',
      'Switch-over between borehole and municipal supply, kept separate',
      'Integrating filters, softeners and pressure systems',
      'General plumbing repairs on the water system',
    ],
    process: [
      { title: 'Tell us what you have', body: 'Send photos of the borehole head, tanks and where you want water to go.' },
      { title: 'Plan and quote', body: 'We agree the layout with you and send a written, itemised quote.' },
      { title: 'Install and connect', body: 'We install tanks and pipework and connect every part of the system.' },
      { title: 'Test and hand over', body: 'We run the full system, check pressure and show you how to switch supplies.' },
    ],
    gallery: ['tank-filtration-grey.jpg', 'tank-filtration-stone-wall.jpg', 'filtration-system-tank.jpg', 'softener-filters-courtyard.jpg'],
    faqs: [
      {
        q: 'Can borehole water be connected to my house plumbing?',
        a: 'Yes, but it must be done so the borehole system is never directly connected to the municipal network. Tshwane prohibits direct connections and Johannesburg Water requires a backflow preventer. We set it up correctly.',
      },
      {
        q: 'Do I need a tank with my borehole?',
        a: 'It is not compulsory, but a tank gives you a reserve during outages, steadier supply to the house and less stop-start work for the pump. We recommend a size based on your household.',
      },
      {
        q: 'Can you connect a borehole that another company drilled?',
        a: 'Yes. We connect, extend and tidy up systems that were installed by others.',
      },
      {
        q: 'Can the switch-over between borehole and municipal water be automatic?',
        a: 'Yes, depending on your layout. We discuss the options at the site visit and recommend what suits your property.',
      },
    ],
    related: ['water-filtration-purification', 'borehole-pump-installation', 'borehole-drilling'],
  },
];

export const servicePageBySlug = (slug: string) => servicePages.find((p) => p.slug === slug);
