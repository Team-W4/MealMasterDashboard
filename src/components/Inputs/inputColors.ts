import { variant } from 'styled-system';

enum inputColorEnum {
  normal,
  disabled,
  active,
  error,
  warning,
}

export type InputColorKeys = keyof typeof inputColorEnum;

export type InputColorProps = {
  variant?: InputColorKeys;
};

const inputColors = variant({
  prop: 'variant',
  variants: {
    normal: {
      borderColor: 'black',
    },
    disabled: {
      borderColor: 'silver',
    },
    active: {
      borderColor: 'anakiwablue',
    },
    error: {
      borderColor: 'persimmonred',
    },
    warning: {
      borderColor: 'neoncarrot',
    },
  },
});

export default inputColors;
