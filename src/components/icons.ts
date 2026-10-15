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
} as const;

export type IconName = keyof typeof iconPaths;
