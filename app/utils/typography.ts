/**
 * Typography System
 * Centralized typography configuration for consistent font sizes, weights, and line heights
 * across the entire application.
 */

// ============================================
// HEADING SIZES (Responsive)
// ============================================

export const typography = {
  // Hero/Display Headings - Used for main hero sections
  hero: {
    // H1 - Main hero heading
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold leading-tight",
    // Large display text
    display: "text-5xl md:text-6xl lg:text-7xl font-bold leading-tight",
  },

  // Section Headings - Used for major sections
  heading: {
    // H2 - Main section headings
    h2: "text-3xl md:text-4xl lg:text-5xl font-bold",
    // H3 - Subsection headings
    h3: "text-2xl md:text-3xl font-bold",
    // H4 - Card titles, smaller sections
    h4: "text-xl md:text-2xl font-bold",
    // H5 - Small headings
    h5: "text-lg md:text-xl font-semibold",
    // H6 - Smallest headings
    h6: "text-base md:text-lg font-semibold",
  },

  // Body Text - Used for paragraphs and content
  body: {
    // Large body text (hero descriptions, featured content)
    large: "text-lg md:text-xl leading-relaxed",
    // Regular body text (standard paragraphs)
    base: "text-base md:text-lg leading-relaxed",
    // Small body text (secondary content)
    small: "text-sm md:text-base leading-relaxed",
    // Extra small (captions, labels)
    xs: "text-xs md:text-sm",
  },

  // UI Elements - Buttons, links, navigation
  ui: {
    // Button text
    button: {
      large: "text-lg font-semibold",
      base: "text-base font-semibold",
      small: "text-sm font-medium",
    },
    // Navigation items
    nav: "text-sm md:text-base font-medium",
    // Labels
    label: "text-sm font-medium",
    // Caption text
    caption: "text-xs md:text-sm text-gray-400",
  },

  // Special text styles
  special: {
    // Stats/numbers
    stat: "text-4xl md:text-5xl lg:text-6xl font-bold",
    // Badges
    badge: "text-xs md:text-sm font-semibold",
    // Quotes
    quote: "text-xl md:text-2xl font-medium italic",
  },
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get heading class based on level
 */
export const getHeadingClass = (level: 1 | 2 | 3 | 4 | 5 | 6): string => {
  const headingMap = {
    1: typography.hero.h1,
    2: typography.heading.h2,
    3: typography.heading.h3,
    4: typography.heading.h4,
    5: typography.heading.h5,
    6: typography.heading.h6,
  };
  return headingMap[level];
};

/**
 * Get body text class based on size
 */
export const getBodyClass = (
  size: "large" | "base" | "small" | "xs" = "base"
): string => {
  return typography.body[size];
};

/**
 * Get button text class based on size
 */
export const getButtonClass = (
  size: "large" | "base" | "small" = "base"
): string => {
  return typography.ui.button[size];
};

// ============================================
// FONT WEIGHTS
// ============================================

export const fontWeight = {
  light: "font-light", // 300
  normal: "font-normal", // 400
  medium: "font-medium", // 500
  semibold: "font-semibold", // 600
  bold: "font-bold", // 700
  extrabold: "font-extrabold", // 800
  black: "font-black", // 900
};

// ============================================
// LINE HEIGHTS
// ============================================

export const lineHeight = {
  none: "leading-none", // 1
  tight: "leading-tight", // 1.25
  snug: "leading-snug", // 1.375
  normal: "leading-normal", // 1.5
  relaxed: "leading-relaxed", // 1.625
  loose: "leading-loose", // 2
};

// ============================================
// LETTER SPACING
// ============================================

export const letterSpacing = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
};

// ============================================
// TEXT COLORS (Semantic)
// ============================================

export const textColor = {
  primary: "text-white",
  secondary: "text-gray-300",
  tertiary: "text-gray-400",
  muted: "text-gray-500",
  accent: "text-cyan-400",
  gradient: {
    cyan: "bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent",
    purple:
      "bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent",
    full: "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent",
  },
};

// ============================================
// PRE-BUILT COMBINATIONS (Common patterns)
// ============================================

export const commonStyles = {
  // Hero title with gradient
  heroTitle: `${typography.hero.h1} ${textColor.gradient.full}`,

  // Hero description
  heroDescription: `${typography.body.large} ${textColor.secondary}`,

  // Section title
  sectionTitle: `${typography.heading.h2} ${textColor.primary}`,

  // Section title with gradient
  sectionTitleGradient: `${typography.heading.h2} ${textColor.gradient.cyan}`,

  // Card title
  cardTitle: `${typography.heading.h4} ${textColor.primary}`,

  // Card description
  cardDescription: `${typography.body.small} ${textColor.tertiary}`,

  // Button large
  buttonLarge: `${typography.ui.button.large}`,

  // Button base
  buttonBase: `${typography.ui.button.base}`,

  // Stat number
  statNumber: `${typography.special.stat} ${textColor.gradient.cyan}`,

  // Stat label
  statLabel: `${typography.body.small} ${textColor.muted}`,
};

export default typography;
