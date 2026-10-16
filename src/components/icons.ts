// Minimal stroke-icon registry (24x24 viewBox, stroke="currentColor").
// Add new icons here as later sections need them.
export const iconPaths = {
  laptop:
    '<rect x="4" y="5" width="16" height="11" rx="1"/><path d="M2.5 19h19"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.4 2.5 3.6 5.5 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.5-3.6-9S9.6 5.5 12 3z"/>',
  users:
    '<circle cx="9" cy="8" r="3.25"/><path d="M2.75 20c0-3.45 2.8-6.25 6.25-6.25s6.25 2.8 6.25 6.25"/><path d="M15.5 4.9a3.25 3.25 0 0 1 0 6.2"/><path d="M18 14c2.2.7 3.5 2.6 3.5 5"/>',
  // Approximate outline of Africa: replace with a proper icon later
  africa:
    '<path d="M8 3.5h5l3 2 1.5 3.5 3.5 1.2-.8 3.8-3 1.5-1.2 4-2.5 2.5-2-1.5-.5-5-3-2.5-4.5-1-.5-3.5L6 6z"/>',
  arrowUpRight: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  chevronLeft: '<path d="m15 5-7 7 7 7"/>',
  chevronRight: '<path d="m9 5 7 7-7 7"/>',
  arrowRight: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  calendar:
    '<rect x="3.5" y="5" width="17" height="15.5" rx="1"/><path d="M3.5 10h17M8 3v4M16 3v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  wifi: '<path d="M2.5 9a15 15 0 0 1 19 0"/><path d="M5.5 12.5a10.5 10.5 0 0 1 13 0"/><path d="M8.7 16a6 6 0 0 1 6.6 0"/><path d="M12 19.5v.01"/>',
  checkCircle:
    '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.8 2.8L16 9.5"/>',
  helpCircle:
    '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7"/><path d="M12 17v.01"/>',
  // Simplified outlines, replace with official brand icons if needed
  linkedin:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 11v5M8 8v.01M12 16v-5M12 13c0-1.7 1.3-2 2.5-2s2.5.8 2.5 2.5V16"/>',
  instagram:
    '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5v.01"/>',
} as const;

export type IconName = keyof typeof iconPaths;
