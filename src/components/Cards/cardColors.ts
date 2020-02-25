import { variant } from 'styled-system';

enum cardColorEnum {
  inherit,
  normal,
  warning,
  active,
  error,
  success,
  secondary,
  tertiary,
  link,
}

export type CardColorKeys = keyof typeof cardColorEnum;

export type CardColorProps = {
  variant?: CardColorKeys;
};

const cardColors = variant({
  prop: 'variant',
  variants: {
    inherit: {
      backgroundColor: 'inherit',
    },
    normal: {
      backgroundColor: 'white',
    },
    warning: {
      backgroundColor: 'neoncarrot',
    },
    active: {
      backgroundColor: 'orange',
    },
    error: {
      backgroundColor: 'persimmonred',
    },
    success: {
      backgroundColor: 'chartgreen',
    },
    secondary: {
      backgroundColor: 'manateegray',
    },
    tertiary: {
      backgroundColor: 'silver',
    },
    link: {
      backgroundColor: 'anakiwablue',
    },
  },
});

export default cardColors;
