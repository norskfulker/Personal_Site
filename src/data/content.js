// Copy rules live in docs/site-context.md: only the 3 services, only the listed owner facts,
// no invented clients, metrics or testimonials. Unknowns are marked TBC (draft only).
export const TBC = '[owner to confirm]';

export const TAGLINE = 'Market it. Advise it. Audit it.';
export const PITCH = 'Performance marketing, advisory for startups and government, and software and audit consulting.';
export const CTA_LABEL = 'Book a free 15-min call';
export const DISCLAIMER = 'Advisory is practical guidance, not legal, tax or financial advice.';

// Booking link and LinkedIn carried over from the old site: owner to confirm. Email and GitHub not supplied yet.
export const CONTACT_URL = 'https://forms.gle/qtVcq7YDGg3kfZhT9';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/srikanta01/';
export const EMAIL = null;
export const GITHUB_URL = null;

const pexels = (id, file) => `https://videos.pexels.com/video-files/${id}/${file}.mp4`;
export const img = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70&w=${w}`;

// Sized to how large each video is drawn: decoding 1440p while scrolling was the main source of jank.
export const videos = {
  network: pexels(3129671, '3129671-sd_960_540_30fps'), // faint hero background
  office: pexels(6774633, '6774633-sd_640_360_30fps'), // small hero card
  boardroom: pexels(3255275, '3255275-hd_1280_720_25fps'), // goes full-screen in the zoom reel
  horizon: pexels(856973, '856973-sd_960_540_25fps'), // behind the contact gradient
};

export const images = {
  aboutTeam: img('1531545514256-b1400bc00f31', 1000),
  mumbai: img('1567157577867-05ccb1388e66', 1600),
};

// In page order, so the active-section highlight moves left to right as you scroll.
export const navLinks = [
  { name: 'Services', id: 'services' },
  { name: 'Who we help', id: 'who' },
  { name: 'Pricing', id: 'pricing' },
  { name: 'About', id: 'about' },
  { name: 'Work', id: 'work' },
  { name: 'FAQ', id: 'faq' },
];

export const pillars = [
  {
    title: 'Clear direction',
    body: 'We find the few decisions that matter most and give your team one focused path forward.',
  },
  {
    title: 'Built by builders',
    body: 'Our founder co-founded GOGAME, is building PowerProof and started out with a Microsoft Research internship. We advise from experience, not theory.',
    image: images.aboutTeam,
  },
  {
    title: 'Work that lasts',
    body: 'Every plan we hand over is one your team can run without us.',
  },
];

// The 3 services, exactly as named in the owner brief. Do not add, remove or rename without owner approval.
export const services = [
  {
    title: 'Performance Marketing & Branding',
    body: 'Paid growth you can measure, and a brand people remember.',
    points: [
      'Paid ads on Meta, Google and LinkedIn',
      'Funnels, landing pages, tracking and reports',
      'Personal and corporate branding',
      'Pre-launch campaigns',
    ],
    pricing: 'Included in the retainer. Ad spend billed separately.',
    image: img('1504868584819-f8e8b4b6d7e3', 900),
  },
  {
    title: 'Corporate Advisory for Government & Startups',
    body: 'Clear thinking for big decisions, before money is spent.',
    points: [
      'Startups: business validation, market research, go-to-market, investor documents',
      'Government: project and policy advisory, proposal support, process reviews',
    ],
    pricing: 'Included in the retainer.',
    image: img('1542744173-8e7e53415bb0', 900),
  },
  {
    title: 'Software & Audit Consultancy',
    body: 'Know your technical risks before they cost you.',
    points: [
      'Architecture and tech-stack advice, build vs buy, vendor selection',
      'Code, security, process and compliance audits',
      'Risk report ranked high / medium / low, plus a fix plan',
    ],
    pricing: 'Included in the retainer.',
    image: img('1555066931-4365d14bab8c', 900),
  },
];

// Pricing set by the owner (Oct 2026): one flat monthly retainer covers all three services.
// "Double-digit revenue growth" is the owner's stated aim: keep it worded as a goal, never a guarantee.
export const retainer = {
  price: '$4,500',
  unit: 'per month',
  summary: 'One flat retainer. All three services. One team that already knows your business.',
  terms: ['Ad spend billed separately, at cost, straight to the platforms', 'Scope and priorities agreed in writing before the first invoice'],
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
      body: 'Architecture and tech-stack advice, build vs buy, vendor selection, and code and security audits with a ranked risk report and fix plan.',
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
      body: 'Introductions from our network to the people your next move depends on.',
    },
    {
      title: 'Government & public sector',
      body: 'Project and policy advisory, proposal support and process reviews.',
    },
    {
      title: 'Reports you can act on',
      body: 'Weekly numbers, plain-language findings and a short list of next moves. No hundred-page decks.',
    },
  ],
  // Why a retainer instead of three separate contracts.
  why: [
    { title: 'One team, full context', body: 'No re-briefing three vendors. Marketing data shapes strategy, and audits shape the build.' },
    { title: 'Predictable cost', body: 'One flat fee. No hourly meter, no change orders, no surprise invoices.' },
    { title: 'Work that compounds', body: 'Every month builds on the last, instead of starting over with each new project.' },
  ],
};

export const values = [
  { title: 'Your goals first', body: 'Every plan starts with your numbers, your market and your runway. Never a template.' },
  { title: 'Long-term value', body: 'We skip quick wins that turn into next year’s problems.' },
  { title: 'Side by side', body: 'We work with your team, share what we know and leave them stronger.' },
  { title: 'Evidence over opinion', body: 'Market data, tracking and audits. Decisions you can defend.' },
];

// Work = the owner's own venture plus clearly labelled example engagements.
// Examples show how a typical engagement runs: no client names, no invented numbers.
// Real case studies (Problem / What we did / Result) replace examples as the owner supplies them.
export const work = [
  {
    slug: 'powerproof',
    kind: 'Our venture',
    service: 'Product',
    name: 'PowerProof',
    summary: 'A business validation and market intelligence platform for Indian MSMEs.',
    problem: 'Small and mid-size businesses in India often make big bets without reliable market data.',
    did: 'We are building PowerProof to put business validation and market intelligence in one place. It applies the same method we use with advisory clients.',
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
    problem: 'A new app needed paying users on day one, with a tight ad budget.',
    did: 'We built a landing page and waitlist funnel, with tracking in place before the first rupee was spent. Weekly reports showed which message and audience earned sign-ups.',
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
    summary: 'Testing demand before the founder spent on building.',
    problem: 'A founder wanted to raise money for an idea no customer had tested yet.',
    did: 'We ran market research and customer interviews, then sized the opportunity. The findings became a go-to-market plan and investor documents.',
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
    problem: 'A startup needed to know its code and security risks before investor due diligence.',
    did: 'We reviewed the code, infrastructure, delivery process and compliance gaps. Every finding was ranked high, medium or low.',
    result: 'A ranked risk report and a fix plan the team could start the same week.',
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
    problem: 'A growing business was about to sign a large software contract without comparing options.',
    did: 'We mapped the real requirements and compared building, buying and a mix of both. Then we scored the shortlisted vendors and flagged contract risks.',
    result: 'A side-by-side vendor comparison and one clear recommendation.',
    steps: ['Requirements workshop', 'Build, buy and hybrid options', 'Vendor scoring', 'Contract risk review'],
    deliverables: ['Options comparison', 'Vendor scorecard', 'Recommendation memo'],
    image: img('1556761175-b413da4baf72'),
  },
];

// Who we work with (owner brief page map). Describes what we offer each group; it does not claim past clients.
export const industries = [
  { name: 'Startups', body: 'Validation, go-to-market and investor documents. Then the marketing to reach your first customers.', image: img('1522071820081-009f0129c71c', 1000) },
  { name: 'Small & mid-size businesses', body: 'Paid ads that pay back, software choices that fit, and audits that catch risk early.', image: img('1556740758-90de374c12ad', 1000) },
  { name: 'Government & public sector', body: 'Project and policy advisory, proposal support and process reviews.', image: img('1587474260584-136574528ed5', 1000) },
  { name: 'Founders', body: 'Personal branding and a sounding board for the decisions only you can make.', image: img('1551836022-d5d88e9218df', 1000) },
];

// SAMPLE testimonials for the draft layout only. They are role-only, tagged "Sample" on screen,
// and are dropped from production builds (see Testimonials.jsx). Replace each with a real quote,
// the person's name and their permission before launch.
export const sampleTestimonials = [
  { quote: 'The audit gave us a ranked list instead of a vague report. We fixed the high-risk items first and stopped debating the rest.', role: 'Founder, SaaS startup' },
  { quote: 'For the first time our ad spend had tracking we trusted. We cut what wasn’t working and backed what was.', role: 'Marketing lead, D2C brand' },
  { quote: 'They tested our idea against the market before we spent on building it. That saved us a costly detour.', role: 'Co-founder, B2B startup' },
  { quote: 'Plain advice we could act on. No jargon and no hundred-page deck.', role: 'Owner, family-run manufacturing business' },
  { quote: 'The pre-launch campaign gave us an audience before we had anything to sell.', role: 'Founder, consumer app' },
];

// Real testimonials: add { quote, name, role } only with the person's permission.
export const testimonials = [];

export const approach = [
  {
    step: '01',
    title: 'Understand',
    body: 'We start with your numbers, your market and your constraints. We find the real problem behind the brief.',
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
    body: 'We stay through execution. Campaigns go live, audits get fixed, plans get funded.',
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
  { title: '3', label: 'Services, one team' },
  { title: '15 min', label: 'Free first call' },
  { title: 'H / M / L', label: 'Risk-ranked audit reports' },
  { title: 'India', label: 'Based here, working everywhere' },
];

// The 4 FAQ questions from the owner brief.
export const faqs = [
  { q: 'Can we hire you for one service only?', a: 'Yes. The retainer covers all three services, and you decide where the effort goes each month. Point it at the one that matters most right now.' },
  { q: 'Do you work with small budgets?', a: 'Our pricing is one flat retainer of $4,500 a month, with ad spend billed separately. If that does not fit yet, the first 15-minute call is free and we will tell you plainly.' },
  { q: 'Do you give legal or tax advice?', a: 'No. Advisory is practical guidance, not legal, tax or financial advice. We will tell you when you need a lawyer or an accountant.' },
  { q: 'How fast can we start?', a: `Book a free 15-minute call. If we are a fit, we send a scope and a start date. Typical turnaround: ${TBC}.` },
];
