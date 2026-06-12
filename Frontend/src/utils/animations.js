export const smoothEase = [0.16, 1, 0.3, 1];
export const softEase = [0.22, 0.61, 0.36, 1];

export const viewportOnce = {
  amount: 0.16,
  margin: "0px 0px -8% 0px",
  once: true,
};

export const pageTransitionVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: smoothEase,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: {
      duration: 0.24,
      ease: softEase,
    },
  },
};

export const navbarVariants = {
  hidden: {
    opacity: 0,
    y: -18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      ease: smoothEase,
    },
  },
};

export const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.11,
    },
  },
};

export const heroItemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.74,
      ease: smoothEase,
    },
  },
};

export const heroVisualVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.18,
      duration: 0.82,
      ease: smoothEase,
    },
  },
};

export const carouselItemVariants = {
  hidden: {
    opacity: 0,
    x: 22,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.56,
      ease: smoothEase,
    },
  },
};

export const footerRevealVariants = {
  hidden: {
    opacity: 0,
    y: 26,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: smoothEase,
    },
  },
};
