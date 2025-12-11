// Shared motion configurations for consistent animations across the site

export const pageTransition = {
  ease: [0.22, 1, 0.36, 1],
  duration: 0.7,
};

export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const slideIn = (
  direction: "left" | "right" | "up" | "down" = "left"
) => {
  const axis = direction === "left" || direction === "right" ? "x" : "y";
  const value = direction === "left" || direction === "up" ? -30 : 30;

  return {
    initial: { opacity: 0, [axis]: value },
    animate: { opacity: 1, [axis]: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  };
};

export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};

export const hoverLift = {
  y: -5,
  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
};
