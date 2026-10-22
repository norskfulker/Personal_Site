// Colours for <Mesh />: Stripe-style blobs drifting on slow, offset loops. One palette per page hero.
const violet = [
  { c: 'rgba(109,92,255,0.44)', cls: 'left-[-20%] top-[-30%] h-[80vmax] w-[80vmax]', t: '22s' },
  { c: 'rgba(255,79,184,0.33)', cls: 'right-[-25%] top-[-15%] h-[65vmax] w-[65vmax]', t: '26s', rev: true },
  { c: 'rgba(255,122,26,0.28)', cls: 'bottom-[-40%] left-[10%] h-[65vmax] w-[65vmax]', t: '30s' },
  { c: 'rgba(34,211,238,0.17)', cls: 'bottom-[-35%] right-[-15%] h-[55vmax] w-[55vmax]', t: '24s', rev: true },
];

const blob = (c, cls, t, rev) => ({ c, cls, t, rev });
export const palettes = {
  violet,
  marketing: [
    blob('rgba(109,92,255,0.47)', 'left-[-15%] top-[-30%] h-[75vmax] w-[75vmax]', '22s'),
    blob('rgba(34,211,238,0.3)', 'right-[-20%] top-[-10%] h-[60vmax] w-[60vmax]', '26s', true),
    blob('rgba(255,79,184,0.28)', 'bottom-[-40%] left-[20%] h-[60vmax] w-[60vmax]', '30s'),
  ],
  advisory: [
    blob('rgba(255,79,184,0.44)', 'left-[-15%] top-[-30%] h-[75vmax] w-[75vmax]', '22s'),
    blob('rgba(255,122,26,0.36)', 'right-[-20%] top-[-10%] h-[60vmax] w-[60vmax]', '26s', true),
    blob('rgba(109,92,255,0.28)', 'bottom-[-40%] left-[20%] h-[60vmax] w-[60vmax]', '30s'),
  ],
  software: [
    blob('rgba(34,211,238,0.33)', 'left-[-15%] top-[-30%] h-[75vmax] w-[75vmax]', '22s'),
    blob('rgba(200,255,46,0.25)', 'right-[-20%] top-[-10%] h-[60vmax] w-[60vmax]', '26s', true),
    blob('rgba(109,92,255,0.39)', 'bottom-[-40%] left-[20%] h-[60vmax] w-[60vmax]', '30s'),
  ],
  warm: [
    blob('rgba(255,122,26,0.41)', 'left-[-15%] top-[-30%] h-[75vmax] w-[75vmax]', '22s'),
    blob('rgba(255,79,184,0.36)', 'right-[-20%] top-[-10%] h-[60vmax] w-[60vmax]', '26s', true),
    blob('rgba(200,255,46,0.19)', 'bottom-[-40%] left-[20%] h-[60vmax] w-[60vmax]', '30s'),
  ],
  cool: [
    blob('rgba(34,211,238,0.33)', 'left-[-15%] top-[-30%] h-[75vmax] w-[75vmax]', '22s'),
    blob('rgba(255,79,184,0.33)', 'right-[-20%] top-[-10%] h-[60vmax] w-[60vmax]', '26s', true),
    blob('rgba(109,92,255,0.33)', 'bottom-[-40%] left-[20%] h-[60vmax] w-[60vmax]', '30s'),
  ],
};

