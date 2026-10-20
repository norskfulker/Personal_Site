// Shown in the draft wherever the owner still has to supply a value. Never ship this live.
export const TBC = '[owner to confirm]';

export const PITCH = 'Performance marketing, advisory for startups and government, and software and audit consulting.';
export const DISCLAIMER = 'Advisory is practical guidance, not legal, tax or financial advice.';

// Booking link and LinkedIn carried over from the old site: owner to confirm. Email and GitHub not supplied yet.
export const CONTACT_URL = 'https://forms.gle/qtVcq7YDGg3kfZhT9';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/srikanta01/';
export const EMAIL = null;
export const GITHUB_URL = null;

const pexels = (id, file) => `https://videos.pexels.com/video-files/${id}/${file}.mp4`;
export const img = (id, w = 1400) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70&w=${w}`;

// Sized to how large each video is drawn: decoding 1440p while scrolling was the main source of jank.
export const videos = {
  network: pexels(3129671, '3129671-sd_960_540_30fps'), // faint hero background
  office: pexels(6774633, '6774633-sd_640_360_30fps'), // small hero card
  boardroom: pexels(3255275, '3255275-hd_1280_720_25fps'), // goes full-screen in the zoom reel
  horizon: pexels(856973, '856973-sd_960_540_25fps'), // behind the contact gradient
};

export const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Services', id: 'services' },
  { name: 'Work', id: 'work' },
  { name: 'Approach', id: 'approach' },
  { name: 'FAQ', id: 'faq' },
];

export const pillars = [
  {
    title: 'Clear Direction',
    body: 'I find the few decisions that matter most and give your team a focused path forward.',
  },
  {
    title: 'Practical Insight',
    body: 'Co-founder of GOGAME. Now building PowerProof. A Microsoft Research internship behind that. Advice comes from building, not theory.',
    image: img('photo-1486406146926-c627a92ad1ab', 1000),
  },
  {
    title: 'Lasting Impact',
    body: 'Recommendations built to hold up after the engagement ends, not just look good in a report.',
  },
];

export const services = [
  {
    title: 'Systems Strategy',
    body: 'Turn complex technical priorities into a clear architecture roadmap your board, investors and engineers can all align on.',
    image: img('photo-1454165804606-c3d57bc86b40', 900),
  },
  {
    title: 'Fintech & Payments Advisory',
    body: 'Ledgers, escrow, settlement and hybrid bank–crypto rails designed for compliance, liquidity and speed.',
    image: img('photo-1551288049-bebda4e38f71', 900),
  },
  {
    title: 'Technical Due Diligence',
    body: 'Independent, investor-grade assessments of platforms, teams and risk ahead of funding rounds and acquisitions.',
    image: img('photo-1460925895917-afdab827c52f', 900),
  },
  {
    title: 'Fractional CTO & Leadership',
    body: 'Hands-on guidance for founders and executives — hiring, decision frameworks and organizational design for scale.',
    image: img('photo-1600880292203-757bb62b4baf', 900),
  },
  {
    title: 'Platform Modernization',
    body: 'Re-architect legacy monoliths into modular, real-time systems with zero-downtime migration plans.',
    image: img('photo-1519389950473-47ba0277781c', 900),
  },
];

export const values = [
  { title: 'Founder-First Mindset', body: 'Every recommendation starts with your goals, constraints and runway — never a template.' },
  { title: 'Long-Term Value', body: 'I optimize for systems that endure, not quick wins that become next year’s technical debt.' },
  { title: 'Collaborative Partnership', body: 'I work inside your team, transfer knowledge openly and leave your people stronger.' },
  { title: 'Evidence-Based Decisions', body: 'Load models, cost curves and failure analysis — decisions backed by data, not opinion.' },
];

// Case study format: Problem (1 sentence) / What I did (2 sentences max) / Result (one real number or outcome).
// Only add a case study when the owner supplies all three parts.
export const work = [
  {
    name: 'PowerProof',
    tag: 'Building now',
    summary: 'A business validation and market intelligence platform for Indian MSMEs.',
    problem: TBC,
    did: TBC,
    result: TBC,
    image: img('photo-1551288049-bebda4e38f71'),
  },
  {
    name: 'GOGAME',
    tag: 'Co-founded',
    summary: 'A mobile gaming company.',
    problem: TBC,
    did: TBC,
    result: TBC,
    image: img('photo-1552820728-8b83bb6b773f'),
  },
  { name: 'Case study slot 3', tag: TBC, summary: TBC, problem: TBC, did: TBC, result: TBC, image: img('photo-1454165804606-c3d57bc86b40') },
  { name: 'Case study slot 4', tag: TBC, summary: TBC, problem: TBC, did: TBC, result: TBC, image: img('photo-1460925895917-afdab827c52f') },
  { name: 'Case study slot 5', tag: TBC, summary: TBC, problem: TBC, did: TBC, result: TBC, image: img('photo-1600880292203-757bb62b4baf') },
];

export const industries = [
  { name: 'Finance & Banking', body: 'Core banking, ledgers and compliance layers for institutions modernizing under regulatory pressure.', image: img('photo-1501167786227-4cba60f6d58f', 1000) },
  { name: 'Digital Assets', body: 'Custody, liquidity routing and cross-chain settlement for teams bridging traditional and decentralized finance.', image: img('photo-1639762681485-074b7f938ba0', 1000) },
  { name: 'Gaming', body: 'Real-time infrastructure and virtual economies built to survive launch-day traffic.', image: img('photo-1552820728-8b83bb6b773f', 1000) },
  { name: 'Enterprise SaaS', body: 'Multi-tenant platforms, pricing infrastructure and the org design to scale them.', image: img('photo-1497366216548-37526070297c', 1000) },
  { name: 'AI Platforms', body: 'Data pipelines, inference cost strategy and governance for AI-native products.', image: img('photo-1557804506-669a67965ba0', 1000) },
  { name: 'Venture & PE', body: 'Technical diligence and portfolio support before and after the term sheet.', image: img('photo-1560179707-f14e90ef3623', 1000) },
];

// Add a testimonial only when the owner supplies the quote, the person's name and their permission.
export const testimonials = [];

export const approach = [
  {
    step: '01',
    title: 'Understand First',
    body: 'I immerse myself in your business, your systems and your constraints to uncover the real problem behind the brief — and the decisions that truly matter.',
    image: img('photo-1553877522-43269d4ea984', 1200),
  },
  {
    step: '02',
    title: 'Shape Direction',
    body: 'Insights become a focused architecture and an honest roadmap: clear priorities, trade-offs made explicit, risks named and owned.',
    image: img('photo-1521737604893-d14cc237f11d', 1200),
  },
  {
    step: '03',
    title: 'Make Progress',
    body: 'I stay close through execution — reviewing designs, coaching leads and measuring outcomes until the new system is running and your team owns it.',
    image: img('photo-1497215728101-856f4ea42174', 1200),
  },
];

export const comparison = {
  others: [
    'Generic frameworks with limited customization',
    'Lengthy reports instead of decisions',
    'Disappear after the slide deck',
    'Success measured by deliverables',
    'Advice that treats symptoms, not causes',
  ],
  me: [
    'Advice tailored to your stack, market and team',
    'Decisions your engineers can execute on Monday',
    'Ongoing support through implementation',
    'Success measured by business outcomes',
    'Long-term partnership focused on durability',
  ],
};

// Facts from the owner brief only. No invented metrics.
export const facts = [
  { title: 'GOGAME', label: 'Co-founder, mobile gaming' },
  { title: 'PowerProof', label: 'Building now, for Indian MSMEs' },
  { title: 'Microsoft Research', label: 'Internship' },
  { title: 'India', label: 'Based in' },
];

export const faqs = [
  { q: 'What kinds of companies do you advise?', a: 'Founders, scale-ups and financial institutions whose business depends on complex systems — fintech, banking, digital assets, gaming, SaaS and AI platforms. I also support investors with technical due diligence.' },
  { q: 'How does an engagement work?', a: 'We start with a focused discovery call, then agree on a scope: a fixed diagnostic (2–4 weeks), an architecture and roadmap engagement, or an ongoing advisory retainer with regular working sessions.' },
  { q: 'Do you work with internal teams?', a: 'Always. I work alongside your engineers and leadership, review real designs and code paths, and make sure knowledge stays in your organization after the engagement ends.' },
  { q: 'Can you act as a fractional CTO?', a: 'Yes — for early-stage teams I can cover architecture, hiring and technical leadership for a defined period while we find and onboard the right permanent leader.' },
  { q: 'How do we get started?', a: 'Book a consultation through the form. I reply within two business days to set up a short call where we clarify the challenge and decide whether I am the right fit.' },
];
