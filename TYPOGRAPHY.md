# Typography System Documentation

## Overview

This project uses a centralized typography system to ensure consistent font sizes, weights, and styles across all pages and components. The typography configuration is defined in `app/utils/typography.ts` and is used throughout the application.

## Benefits

- **Consistency**: All text uses standardized sizes across the entire website
- **Maintainability**: Change font sizes in one place and they update everywhere
- **Responsiveness**: Built-in responsive breakpoints (mobile, tablet, desktop)
- **Type Safety**: TypeScript support for autocomplete and type checking
- **Production Ready**: Industry best practices for enterprise applications

## Usage

### Import the Typography System

```typescript
import { typography } from "@/app/utils/typography";
```

### Basic Usage

#### Headings

```tsx
// Hero/Display heading (largest)
<h1 className={typography.hero.h1}>Transform Your Business</h1>

// Section headings
<h2 className={typography.heading.h2}>Our Services</h2>
<h3 className={typography.heading.h3}>Featured Work</h3>
<h4 className={typography.heading.h4}>Card Title</h4>
```

#### Body Text

```tsx
// Large body text (hero descriptions)
<p className={typography.body.large}>
  Partner with industry experts to build scalable solutions.
</p>

// Regular body text (standard paragraphs)
<p className={typography.body.base}>
  This is standard body text for most content.
</p>

// Small body text (secondary content)
<p className={typography.body.small}>
  Additional details and secondary information.
</p>
```

#### UI Elements

```tsx
// Button text
<button className={typography.ui.button.large}>
  Get Started
</button>

// Navigation
<nav className={typography.ui.nav}>
  <a href="/">Home</a>
</nav>

// Labels
<label className={typography.ui.label}>
  Your Name
</label>
```

### Pre-built Combinations

For common patterns, use the pre-built combinations:

```tsx
import { commonStyles } from "@/app/utils/typography";

// Hero title with gradient
<h1 className={commonStyles.heroTitle}>
  Welcome to Phyteam
</h1>

// Hero description
<p className={commonStyles.heroDescription}>
  Your trusted technology partner
</p>

// Section title with gradient
<h2 className={commonStyles.sectionTitleGradient}>
  Our Services
</h2>

// Card title
<h3 className={commonStyles.cardTitle}>
  Web Development
</h3>

// Card description
<p className={commonStyles.cardDescription}>
  Build modern web applications
</p>
```

## Typography Scale

### Headings (Responsive)

| Class                     | Mobile          | Tablet (md)     | Desktop (lg)   | Usage               |
| ------------------------- | --------------- | --------------- | -------------- | ------------------- |
| `typography.hero.h1`      | 2.25rem (36px)  | 3rem (48px)     | 3.75rem (60px) | Main hero headings  |
| `typography.hero.display` | 3rem (48px)     | 3.75rem (60px)  | 4.5rem (72px)  | Large display text  |
| `typography.heading.h2`   | 1.875rem (30px) | 2.25rem (36px)  | 3rem (48px)    | Section headings    |
| `typography.heading.h3`   | 1.5rem (24px)   | 1.875rem (30px) | -              | Subsection headings |
| `typography.heading.h4`   | 1.25rem (20px)  | 1.5rem (24px)   | -              | Card titles         |
| `typography.heading.h5`   | 1.125rem (18px) | 1.25rem (20px)  | -              | Small headings      |
| `typography.heading.h6`   | 1rem (16px)     | 1.125rem (18px) | -              | Smallest headings   |

### Body Text (Responsive)

| Class                   | Mobile          | Tablet (md)     | Usage                               |
| ----------------------- | --------------- | --------------- | ----------------------------------- |
| `typography.body.large` | 1.125rem (18px) | 1.25rem (20px)  | Hero descriptions, featured content |
| `typography.body.base`  | 1rem (16px)     | 1.125rem (18px) | Standard paragraphs                 |
| `typography.body.small` | 0.875rem (14px) | 1rem (16px)     | Secondary content                   |
| `typography.body.xs`    | 0.75rem (12px)  | 0.875rem (14px) | Captions, labels                    |

## Global CSS Variables

The following CSS custom properties are defined in `app/globals.css`:

```css
--font-size-xs: 0.75rem; /* 12px */
--font-size-sm: 0.875rem; /* 14px */
--font-size-base: 1rem; /* 16px */
--font-size-lg: 1.125rem; /* 18px */
--font-size-xl: 1.25rem; /* 20px */
--font-size-2xl: 1.5rem; /* 24px */
--font-size-3xl: 1.875rem; /* 30px */
--font-size-4xl: 2.25rem; /* 36px */
--font-size-5xl: 3rem; /* 48px */
--font-size-6xl: 3.75rem; /* 60px */
--font-size-7xl: 4.5rem; /* 72px */

--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.625;

--font-primary: "Inter", -apple-system, ...;
```

## Utility Functions

### Get Heading Class

```typescript
import { getHeadingClass } from "@/app/utils/typography";

const headingClass = getHeadingClass(2); // Returns h2 class
```

### Get Body Class

```typescript
import { getBodyClass } from "@/app/utils/typography";

const bodyClass = getBodyClass("large"); // Returns large body text class
```

### Get Button Class

```typescript
import { getButtonClass } from "@/app/utils/typography";

const buttonClass = getButtonClass("base"); // Returns base button text class
```

## Font Weights

```typescript
import { fontWeight } from "@/app/utils/typography";

<span className={fontWeight.bold}>Bold Text</span>
<span className={fontWeight.semibold}>Semibold Text</span>
<span className={fontWeight.medium}>Medium Text</span>
```

## Text Colors

```typescript
import { textColor } from "@/app/utils/typography";

<p className={textColor.primary}>Primary Text (white)</p>
<p className={textColor.secondary}>Secondary Text (gray-300)</p>
<p className={textColor.accent}>Accent Text (cyan-400)</p>

// Gradient text
<h1 className={textColor.gradient.cyan}>Gradient Heading</h1>
```

## Best Practices

### DO ✅

- Use the typography system for all text elements
- Use semantic HTML elements (h1, h2, p, etc.)
- Combine typography classes with color and spacing utilities
- Test on multiple screen sizes

```tsx
// Good
<h2 className={`${typography.heading.h2} text-white mb-6`}>Section Title</h2>
```

### DON'T ❌

- Don't hardcode font sizes directly
- Don't use arbitrary values
- Don't skip responsive breakpoints

```tsx
// Bad
<h2 className="text-[42px] font-bold">
  Section Title
</h2>

// Bad - inconsistent sizing
<h2 className="text-3xl md:text-7xl">
  Section Title
</h2>
```

## Migration Guide

To convert existing components to use the typography system:

1. Add the import: `import { typography } from "@/app/utils/typography";`
2. Replace hardcoded font size classes with typography classes
3. Test the component on different screen sizes

### Before:

```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">Welcome</h1>
```

### After:

```tsx
<h1 className={typography.hero.h1}>Welcome</h1>
```

## Troubleshooting

### Text appears too large/small

Make sure you're using the correct typography class for the context:

- Use `hero.h1` for main hero headings only
- Use `heading.h2` for section headings
- Use `heading.h4` for card titles

### Responsive breakpoints not working

Ensure you're using the built-in classes which include responsive breakpoints:

```tsx
// Correct - includes responsive breakpoints
<h2 className={typography.heading.h2}>Title</h2>

// Incorrect - no responsive behavior
<h2 className="text-4xl font-bold">Title</h2>
```

## Support

For questions or issues with the typography system, refer to:

- `app/utils/typography.ts` - Main configuration file
- `app/globals.css` - CSS custom properties
- This documentation file

---

Last updated: December 17, 2025
