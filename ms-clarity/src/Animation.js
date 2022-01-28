export const pageAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      duration: 0.4,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.4 },
  },
};

export const titleAnim = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.65 },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { type: "tween", ease: "easeOut", duration: 1, delay: 0.5 },
  },
};
