// Copy rules live in docs/site-context.md: only the 3 services, only the listed owner facts,
// no invented clients, metrics or testimonials. Unknowns are marked TBC (draft only).
export const TBC = '[owner to confirm]';
// Placeholders show in the dev draft only; production builds leave them out (owner brief: never on a live page).
// `?.` keeps this file importable from Node (scripts/seo.mjs runs after the build).
export const DRAFT = import.meta.env?.DEV ?? false;

export const TAGLINE = 'Market. Advise. Audit.';
// Hero line: says what the pitch says, in a sentence a person would actually speak.
export const INTRO = 'I help founders and teams grow revenue, make sharper calls and ship software with fewer surprises.';
export const PITCH = 'Performance marketing, advisory for startups and government, and software development, design, procurement and audits.';
export const CTA_LABEL = 'Book a free 30-min call';
export const DISCLAIMER = 'Advisory is practical guidance, not legal, tax or financial advice.';

// Booking page, LinkedIn and email confirmed by the owner (Oct 2026). GitHub not supplied yet.
export const CONTACT_URL = 'https://cal.com/srikantamagaji/30-min-consultancy';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/srikanta01/';
export const EMAIL = 'connect@srikantamagaji.com';
export const GITHUB_URL = null;

// SEO. Domain confirmed by the owner (Oct 2026).
export const SITE_URL = 'https://srikantamagaji.com';
export const SITE_NAME = 'Srikanta Magaji';
export const OG_IMAGE = { path: '/og-image.png', width: 1200, height: 630, alt: 'Srikanta Magaji: Market. Advise. Audit.' };

const pexels = (id, file) => `https://videos.pexels.com/video-files/${id}/${file}.mp4`;
export const img = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70&w=${w}`;

// Sized to how large each video is drawn: decoding 1440p while scrolling was the main source of jank.
export const videos = {
  boardroom: pexels(3255275, '3255275-hd_1280_720_25fps'), // goes full-screen in the zoom reel
  horizon: pexels(856973, '856973-sd_960_540_25fps'), // behind the contact gradient
};

// Owner's portrait for the About page. Until it is supplied the page shows a monogram card instead.
export const OWNER_PHOTO = null;

// No photos of groups standing in for 'the team': this is a one-person practice.
export const images = {
  workspace: img('1432888498266-38ffec3eaf0a', 1000),
  mumbai: img('1567157577867-05ccb1388e66', 1600),
};

// Site pages. Services sit under one menu entry; the rest are top-level.
export const navLinks = [
  { name: 'Pricing', path: '/pricing' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
];

// Per-page SEO (owner brief: titles 60 characters or fewer, descriptions under 160).
// `path` drives the canonical URL, Open Graph tags, the sitemap and the pre-rendered page heads.
export const pageMeta = {
  home: {
    path: '/',
    title: 'Srikanta | Marketing, Advisory & Software',
    description: 'Performance marketing, advisory for startups and government, and software development, design, procurement and audits. Book a free 30-min call.',
  },
  marketing: {
    path: '/marketing',
    title: 'Performance Marketing & Branding | Srikanta',
    description: 'Paid ads on Meta, Google and LinkedIn, funnels, landing pages, tracking and reports, plus personal and corporate branding. Book a free 30-min call.',
  },
  advisory: {
    path: '/advisory',
    title: 'Corporate Advisory for Government & Startups | Srikanta',
    description: 'Business validation, market research and investor documents for startups. Tenders, delivery orders, consortiums and policy advisory for government.',
  },
  software: {
    path: '/software',
    title: 'Software & Audit Consultancy | Srikanta',
    description: 'Software development and DevOps, product design, procurement and vendor selection, plus code, security and compliance audits with a ranked risk report.',
  },
  pricing: {
    path: '/pricing',
    title: 'Pricing: one $4,500 monthly retainer | Srikanta',
    description: 'One flat $4,500 a month for marketing, advisory and software. Ad spend and other billables are paid separately by the client. Book a free 30-min call.',
  },
  work: {
    path: '/work',
    title: 'Work and case studies | Srikanta',
    description: 'PowerProof and example engagements across performance marketing, corporate advisory and software. Problem, what I did, result.',
  },
  about: {
    path: '/about',
    title: 'About Srikanta | Market. Advise. Audit.',
    description: 'Founder-consultant based in India. Co-founded GOGAME, building PowerProof, Microsoft Research internship. Marketing, advisory and software.',
  },
  blog: {
    path: '/blog',
    title: 'Blog | Srikanta',
    description: 'Plain notes on performance marketing, startup and government advisory, and software. Book a free 30-min call.',
  },
};

export const pillars = [
  {
    title: 'Clear direction',
    body: 'I find the few decisions that matter most and give your team one focused path forward.',
  },
  {
    title: 'Built by a builder',
    body: 'I co-founded GOGAME, I am building PowerProof, and I started out with a Microsoft Research internship. I advise from experience, not theory.',
    image: images.workspace,
  },
  {
    title: 'Work that lasts',
    body: 'Every plan I hand over is one your team can run without me.',
  },
];

// The 3 services, exactly as named in the owner brief. Do not add, remove or rename without owner approval.
export const services = [
  {
    slug: 'marketing',
    short: 'Marketing',
    title: 'Performance Marketing & Branding',
    body: 'Paid growth you can measure, and a brand people remember.',
    points: [
      'Paid ads on Meta, Google and LinkedIn',
      'Funnels, landing pages, tracking and reports',
      'Personal and corporate branding',
      'Pre-launch campaigns',
    ],
    pricing: 'Included in the retainer. Ad spend paid separately.',
    image: img('1504868584819-f8e8b4b6d7e3', 900),
  },
  {
    slug: 'advisory',
    short: 'Advisory',
    title: 'Corporate Advisory for Government & Startups',
    body: 'Clear thinking for big decisions, before money is spent.',
    points: [
      'Startups: business validation, market research, go-to-market, investor documents',
      'Government: tender fulfilment, delivery orders, consortiums, project and policy advisory, proposals and process reviews',
    ],
    pricing: 'Included in the retainer.',
    image: img('1542744173-8e7e53415bb0', 900),
  },
  {
    slug: 'software',
    short: 'Software',
    title: 'Software & Audit Consultancy',
    body: 'Software designed, built, bought and checked, with fewer surprises.',
    points: [
      'Software development and DevOps',
      'Product and software design',
      'Procurement: tech stack, build vs buy, vendor selection',
      'Code, security, process and compliance audits, ranked high / medium / low with a fix plan',
    ],
    pricing: 'Included in the retainer.',
    image: img('1555066931-4365d14bab8c', 900),
  },
];

// Full service pages. Scope comes straight from the owner brief; descriptions say what the work is,
// never what it has achieved. Government track: the owner says what he can help with; it claims no past government clients.
export const servicePages = {
  marketing: {
    eyebrow: 'Market',
    lead: 'Ads that are tracked from the first rupee, pages built to convert, and a brand people remember. Every week you see what worked and where the budget moves next.',
    groups: [
      { title: 'Paid ads', body: 'Campaigns on Meta, Google and LinkedIn, planned around one clear goal per campaign.' },
      { title: 'Funnels and landing pages', body: 'Pages and sign-up flows built for the audience the ads bring in.' },
      { title: 'Tracking', body: 'Conversion tracking set up before spend starts, so every result can be traced to its source.' },
      { title: 'Reports', body: 'Weekly numbers in plain language, with the next budget moves written down.' },
      { title: 'Personal and corporate branding', body: 'A clear position and a consistent voice for you or your company.' },
      { title: 'Pre-launch campaigns', body: 'An audience and a waitlist before launch day, not after.' },
    ],
    flow: ['Ad', 'Landing page', 'Sign-up', 'Weekly report'],
    image: img('1460925895917-afdab827c52f', 1200),
  },
  advisory: {
    eyebrow: 'Advise',
    lead: 'Clear thinking for big decisions, before money is spent. Two tracks: startups that need evidence before they build or raise, and public-sector teams that need tenders, delivery orders, consortiums and policy work that hold up.',
    tracks: [
      {
        name: 'Startups',
        points: ['Business validation', 'Market research', 'Go-to-market plans', 'Investor documents'],
        image: img('1522071820081-009f0129c71c', 1000),
      },
      {
        name: 'Government',
        points: ['Tender fulfilment', 'Delivery orders', 'Consortiums', 'Project and policy advisory', 'Proposal support and process reviews'],
        image: img('1587474260584-136574528ed5', 1000),
      },
    ],
    groups: [
      { title: 'Business validation', body: 'Test the idea against real demand, then decide: go, adjust or stop.' },
      { title: 'Market research', body: 'Market size, competitors and customer evidence, summarised for the decision at hand.' },
      { title: 'Go-to-market', body: 'Who to sell to first, with what message, through which channel.' },
      { title: 'Investor documents', body: 'Deck and one-pager built on the evidence, not on hope.' },
      { title: 'Project and policy advisory', body: 'Practical review of public-sector projects and policy options.' },
      { title: 'Proposal support and process reviews', body: 'Proposals that answer the brief, and processes checked for gaps.' },
      { title: 'Tender fulfilment', body: 'Bids prepared against the tender’s requirements, and help meeting them once the tender is won.' },
      { title: 'Delivery orders', body: 'Planning and tracking delivery against government delivery orders, so nothing is missed.' },
      { title: 'Consortiums', body: 'Finding the right partners and structuring a consortium to bid for larger public projects.' },
    ],
    image: img('1542744173-8e7e53415bb0', 1200),
  },
  software: {
    eyebrow: 'Audit',
    lead: 'Software designed, built and bought with eyes open. I develop products and run the DevOps behind them, design them before code is written, help you procure the right tools and vendors, and audit what you already have.',
    groups: [
      { title: 'Software development', body: 'Products and internal tools built to fit your stage, team and budget.' },
      { title: 'DevOps', body: 'Deployments, environments and monitoring set up so releases are routine, not risky.' },
      { title: 'Product and software design', body: 'Architecture, interfaces and user flows planned before the first line of code.' },
      { title: 'Architecture and tech stack', body: 'Advice on the stack and structure that fit your stage and team.' },
      { title: 'Build vs buy', body: 'Building, buying and a mix of both, compared side by side.' },
      { title: 'Procurement and vendor selection', body: 'Shortlists scored against your real requirements, with contract risks flagged.' },
      { title: 'Code audits', body: 'Review of code quality, structure and the parts most likely to break.' },
      { title: 'Security audits', body: 'Review of how your systems and data are exposed.' },
      { title: 'Process and compliance audits', body: 'How work ships, and where it falls short of what you must meet.' },
    ],
    // Illustrative report layout only. No real findings.
    risks: [
      { level: 'High', note: 'Fix first', color: 'bg-red-500' },
      { level: 'Medium', note: 'Plan this quarter', color: 'bg-amber-400' },
      { level: 'Low', note: 'Track', color: 'bg-emerald-500' },
    ],
    image: img('1555066931-4365d14bab8c', 1200),
  },
};

// Pricing set by the owner (Oct 2026): one flat monthly retainer covers all three services.
// "Double-digit revenue growth" is the owner's stated aim: keep it worded as a goal, never a guarantee.
export const retainer = {
  price: '$4,500',
  unit: 'per month',
  summary: 'One flat retainer. All three services. One person who already knows your business.',
  terms: ['One flat $4,500 a month covers all three services', 'Ad spend, service records and other complementary billables are paid separately by the client'],
  includes: [
    {
      title: 'Grow revenue',
      body: 'Paid ads on Meta, Google and LinkedIn, funnels, landing pages and tracking, run towards double-digit revenue growth for your business or your personal brand.',
    },
    {
      title: 'Know before the news does',
      body: 'Market, competitor and sector intelligence, read and summarised for you, so you hear what matters before it becomes a headline.',
    },
    {
      title: 'Ship better products',
      body: 'Software development and DevOps, product design, procurement and vendor selection, and code and security audits with a ranked risk report and fix plan.',
    },
    {
      title: 'Validate before you spend',
      body: 'Complete business validation: market research, customer evidence, go-to-market plans and investor documents.',
    },
    {
      title: 'Build the brand',
      body: 'Personal and corporate branding and pre-launch campaigns, so people know your name before you need them to.',
    },
    {
      title: 'Open the right doors',
      body: 'Introductions from my network to the people your next move depends on.',
    },
    {
      title: 'Government & public sector',
      body: 'Tender fulfilment, delivery orders, consortiums, project and policy advisory, proposals and process reviews.',
    },
    {
      title: 'Reports you can act on',
      body: 'Weekly numbers, plain-language findings and a short list of next moves. No hundred-page decks.',
    },
  ],
  // Why a retainer instead of three separate contracts.
  why: [
    { title: 'One person, full context', body: 'No re-briefing three vendors. Marketing data shapes strategy, and audits shape the build.' },
    { title: 'Predictable cost', body: 'One flat fee. No hourly meter, no change orders, no surprise invoices.' },
    { title: 'Work that compounds', body: 'Every month builds on the last, instead of starting over with each new project.' },
  ],
};

export const values = [
  { title: 'Your goals first', body: 'Every plan starts with your numbers, your market and your runway. Never a template.' },
  { title: 'Long-term value', body: 'I skip quick wins that turn into next year’s problems.' },
  { title: 'Side by side', body: 'I work with your team, share what I know and leave them stronger.' },
  { title: 'Evidence over opinion', body: 'Market data, tracking and audits. Decisions you can defend.' },
];

// Copy is first person: this is Srikanta's personal site, not an agency.
// Work = the owner's own venture plus clearly labelled example engagements.
// Examples show how a typical engagement runs: no client names, no invented numbers.
// Real case studies (Problem / What I did / Result) replace examples as the owner supplies them.
export const work = [
  {
    slug: 'powerproof',
    kind: 'My venture',
    service: 'Product',
    name: 'PowerProof',
    summary: 'A business validation and market intelligence platform for Indian MSMEs.',
    problem: 'Small and mid-size businesses in India often make big bets without reliable market data.',
    did: 'I am building PowerProof to put business validation and market intelligence in one place. It applies the same method I use with advisory clients.',
    result: 'In development.',
    steps: ['Validate the idea against real demand', 'Map the market and competitors', 'Turn findings into a go / adjust / stop decision'],
    deliverables: ['Validation reports', 'Market intelligence dashboards'],
    image: img('1432888498266-38ffec3eaf0a'),
  },
  {
    slug: 'pre-launch-campaign',
    kind: 'Example engagement',
    service: 'Performance Marketing & Branding',
    name: 'Pre-launch campaign for a consumer app',
    summary: 'Building an audience before launch day, on a small budget.',
    problem: 'A new app needs paying users on day one, with a tight ad budget.',
    did: 'I build a landing page and waitlist funnel, with tracking in place before the first rupee is spent. Weekly reports show which message and audience earn sign-ups.',
    result: 'A tracked waitlist and a clear answer on which audience to launch to.',
    steps: ['Positioning and message testing', 'Landing page and waitlist funnel', 'Meta and Google campaigns with full tracking', 'Weekly reports and budget shifts'],
    deliverables: ['Landing page', 'Ad creatives and copy', 'Tracking setup', 'Weekly performance report'],
    image: img('1611162617213-7d7a39e9b1d7'),
  },
  {
    slug: 'idea-validation',
    kind: 'Example engagement',
    service: 'Corporate Advisory',
    name: 'Validating a startup idea before the raise',
    summary: 'Testing demand before a founder spends on building.',
    problem: 'A founder wants to raise money for an idea no customer has tested yet.',
    did: 'I run market research and customer interviews, then size the opportunity. The findings become a go-to-market plan and investor documents.',
    result: 'A go / adjust / stop decision backed by evidence, and an investor-ready pack.',
    steps: ['Customer interviews', 'Market sizing and competitor map', 'Go-to-market plan', 'Investor deck and one-pager'],
    deliverables: ['Validation report', 'Go-to-market plan', 'Investor documents'],
    image: img('1552664730-d307ca884978'),
  },
  {
    slug: 'pre-funding-audit',
    kind: 'Example engagement',
    service: 'Software & Audit',
    name: 'Software audit before due diligence',
    summary: 'Finding the risks before an investor does.',
    problem: 'A startup needs to know its code and security risks before investor due diligence.',
    did: 'I review the code, infrastructure, delivery process and compliance gaps. Every finding is ranked high, medium or low.',
    result: 'A ranked risk report and a fix plan the team can start the same week.',
    steps: ['Code and architecture review', 'Security review', 'Process and compliance check', 'Ranked findings and fix plan'],
    deliverables: ['Risk report (high / medium / low)', 'Fix plan with owners'],
    image: img('1563986768609-322da13575f3'),
  },
  {
    slug: 'build-vs-buy',
    kind: 'Example engagement',
    service: 'Software & Audit',
    name: 'Build vs buy for a growing business',
    summary: 'Choosing software with eyes open.',
    problem: 'A growing business is about to sign a large software contract without comparing options.',
    did: 'I map the real requirements and compare building, buying and a mix of both. Then I score the shortlisted vendors and flag contract risks.',
    result: 'A side-by-side vendor comparison and one clear recommendation.',
    steps: ['Requirements workshop', 'Build, buy and hybrid options', 'Vendor scoring', 'Contract risk review'],
    deliverables: ['Options comparison', 'Vendor scorecard', 'Recommendation memo'],
    image: img('1556761175-b413da4baf72'),
  },
];

// Who I work with (owner brief page map). Describes what I offer each group; it does not claim past clients.
export const industries = [
  { name: 'Startups', body: 'Validation, go-to-market and investor documents. Then the marketing to reach your first customers.', image: img('1522071820081-009f0129c71c', 1000) },
  { name: 'Small & mid-size businesses', body: 'Paid ads that pay back, software built or bought to fit, and audits that catch risk early.', image: img('1556740758-90de374c12ad', 1000) },
  { name: 'Government & public sector', body: 'Tender fulfilment, delivery orders, consortiums, and project and policy advisory.', image: img('1587474260584-136574528ed5', 1000) },
  { name: 'Founders', body: 'Personal branding and a sounding board for the decisions only you can make.', image: img('1551836022-d5d88e9218df', 1000) },
];

// SAMPLE testimonials for the draft layout only. They are role-only, tagged "Sample" on screen,
// and are dropped from production builds (see Testimonials.jsx). Replace each with a real quote,
// the person's name and their permission before launch.
export const sampleTestimonials = [
  { quote: 'The audit gave us a ranked list instead of a vague report. We fixed the high-risk items first and stopped debating the rest.', role: 'Founder, SaaS startup' },
  { quote: 'For the first time our ad spend had tracking we trusted. We cut what wasn’t working and backed what was.', role: 'Marketing lead, D2C brand' },
  { quote: 'Srikanta tested our idea against the market before we spent on building it. That saved us a costly detour.', role: 'Co-founder, B2B startup' },
  { quote: 'Plain advice we could act on. No jargon and no hundred-page deck.', role: 'Owner, family-run manufacturing business' },
  { quote: 'The pre-launch campaign gave us an audience before we had anything to sell.', role: 'Founder, consumer app' },
];

// Real testimonials: add { quote, name, role } only with the person's permission.
export const testimonials = [];

export const approach = [
  {
    step: '01',
    title: 'Understand',
    body: 'I start with your numbers, your market and your constraints. I find the real problem behind the brief.',
    image: img('1531482615713-2afd69097998', 1200),
  },
  {
    step: '02',
    title: 'Decide',
    body: 'Findings become a short plan: clear priorities, trade-offs written down, risks named.',
    image: img('1515187029135-18ee286d815b', 1200),
  },
  {
    step: '03',
    title: 'Deliver',
    body: 'I stay through execution. Campaigns go live, audit findings get fixed, plans get carried out.',
    image: img('1517245386807-bb43f82c33c4', 1200),
  },
];

export const comparison = {
  others: [
    'Generic frameworks',
    'Long reports instead of decisions',
    'Gone after the slide deck',
    'Success measured by deliverables',
    'Advice that treats symptoms',
  ],
  me: [
    'Plans built around your business',
    'Recommendations your team can act on this week',
    'Support through execution',
    'Success measured by results',
    'A long-term partner',
  ],
};

// Facts from the owner brief only. No invented metrics.
export const facts = [
  { title: '3', label: 'Services, one person' },
  { title: '30 min', label: 'Free first call' },
  { title: 'H / M / L', label: 'Risk-ranked audit reports' },
  { title: 'India', label: 'Based here, working everywhere' },
];

// The 4 FAQ questions from the owner brief.
export const faqs = [
  { q: 'Can we hire you for one service only?', a: 'Yes. The retainer covers all three services, and you decide where the effort goes each month. Point it at the one that matters most right now.' },
  { q: 'Do you work with small budgets?', a: 'My pricing is one flat retainer of $4,500 a month for all three services. Ad spend and other billables are paid separately. If that does not fit yet, the first 30-minute call is free and I will tell you plainly.' },
  { q: 'Do you give legal or tax advice?', a: 'No. Advisory is practical guidance, not legal, tax or financial advice. I will tell you when you need a lawyer or an accountant.' },
  { q: 'How fast can we start?', a: `Book a free 30-minute call. If we are a fit, I send a scope and a start date.${DRAFT ? ` Typical turnaround: ${TBC}.` : ''}` },
];

// Blog. Real posts go in `posts` as { slug, title, excerpt, service, date }.
// SAMPLE posts exist only so the draft shows the layout: tagged "Sample", dropped from production builds.
export const posts = [];

export const samplePosts = [
  { title: 'Set up tracking before you spend on ads', excerpt: 'Why the first rupee of ad spend should already be measured.', service: 'marketing', image: img('1460925895917-afdab827c52f', 900) },
  { title: 'What a pre-launch campaign is for', excerpt: 'Building an audience before there is anything to sell.', service: 'marketing', image: img('1611162617213-7d7a39e9b1d7', 900) },
  { title: 'Validate the idea before the raise', excerpt: 'Go, adjust or stop: deciding with evidence instead of hope.', service: 'advisory', image: img('1552664730-d307ca884978', 900) },
  { title: 'Reading a market without a research team', excerpt: 'Sizing, competitors and customer evidence on a small budget.', service: 'advisory', image: img('1432888498266-38ffec3eaf0a', 900) },
  { title: 'Build, buy or both', excerpt: 'How to compare options before signing a large software contract.', service: 'software', image: img('1556761175-b413da4baf72', 900) },
  { title: 'High, medium, low: how to read a risk report', excerpt: 'Ranking findings so the team knows what to fix first.', service: 'software', image: img('1563986768609-322da13575f3', 900) },
];
