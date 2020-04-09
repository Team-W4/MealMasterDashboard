import { variant } from 'styled-system';

enum iconWrapperColorEnum {
  normal,
  inverted,
  warning,
  error,
  success,
  secondary,
  tertiary,
  link,
  active,
}

export type IconWrapperColorKeys = keyof typeof iconWrapperColorEnum;

export type IconWrapperColorProps = {
  wrapperVariant?: IconWrapperColorKeys;
};

const iconWrapperColors = variant({
  prop: 'wrapperVariant',
  variants: {
    normal: {
      borderColor: 'black',
    },
    inverted: {
      borderColor: 'white',
    },
    warning: {
      borderColor: 'neoncarrot',
    },
    active: {
      borderColor: 'orange',
    },
    error: {
      borderColor: 'persimmonred',
    },
    success: {
      borderColor: 'chartgreen',
    },
    secondary: {
      borderColor: 'manateegray',
    },
    tertiary: {
      borderColor: 'silver',
    },
    link: {
      borderColor: 'anakiwablue',
    },
  },
});

export default iconWrapperColors;
