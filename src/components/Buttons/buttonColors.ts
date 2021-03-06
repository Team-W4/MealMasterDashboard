import { variant } from 'styled-system';

enum buttonColorEnum {
  inherit,
  transparent,
  normal,
  warning,
  active,
  error,
  success,
  secondary,
  tertiary,
  link,
}

export type ButtonColorKeys = keyof typeof buttonColorEnum;

export type ButtonColorProps = {
  variant?: ButtonColorKeys;
};

const buttonColors = variant({
  prop: 'variant',
  variants: {
    inherit: {
      backgroundColor: 'inherit',
    },
    transparent: {
      backgroundColor: 'transparent',
      elevation: 0,
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

export default buttonColors;
