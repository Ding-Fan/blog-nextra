// Traditional Windows Phone blue color palette
export const WINDOWS_PHONE_COLORS = {
  // Traditional WP blues - more authentic to original
  primary: '#0078d4',      // Windows blue
  accent: '#005a9e',       // Darker Windows blue
  cobalt: '#0050ef',       // Classic WP cobalt
  steel: '#464e58',        // WP steel blue
  cyan: '#0078d4',         // Windows cyan
  
  // Additional traditional blues
  navy: '#0063b1',         // WP navy
  teal: '#0078a3',         // Traditional teal
  indigo: '#004e8c',       // Deep indigo
  
  // Classic WP accent
  lightBlue: '#40e0ff',    // Light accent
  darkBlue: '#003d6b',     // Dark accent
  
  // Default fallback
  default: '#0078d4'       // Windows blue as default
} as const;

// Color selection helper
export const getRandomWPBlue = (): string => {
  const colors = Object.values(WINDOWS_PHONE_COLORS);
  return colors[Math.floor(Math.random() * (colors.length - 1))]; // Exclude 'default'
};

// Get color by tile size for visual hierarchy
export const getColorByTileSize = (size: string): string => {
  switch (size) {
    case 'large': return WINDOWS_PHONE_COLORS.primary;
    case 'wide': return WINDOWS_PHONE_COLORS.accent;
    case 'medium': return WINDOWS_PHONE_COLORS.navy;
    case 'small': return WINDOWS_PHONE_COLORS.teal;
    default: return WINDOWS_PHONE_COLORS.default;
  }
};