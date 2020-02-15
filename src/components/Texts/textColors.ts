import { variant } from 'styled-system';

enum textColorEnum {
  inherit,
  normal,
  inverted,
  warning,
  error,
  success,
  secondary,
  link,
}

export type TextColorKeys = keyof typeof textColorEnum;

export type TextColorProps = {
  variant?: TextColorKeys;
};

const textColors = variant({
  prop: 'variant',
  variants: {
    inherit: {
      color: 'inherit',
    },
    normal: {
      color: 'black',
    },
    inverted: {
      color: 'white',
    },
    warning: {
      color: 'neoncarrot',
    },
    error: {
      color: 'persimmonred',
    },
    success: {
      color: 'chartgreen',
    },
    secondary: {
      color: 'manateegray',
    },
    link: {
      color: 'anakiwablue',
    },
  },
});

export default textColors;
