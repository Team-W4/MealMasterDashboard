import { variant } from 'styled-system';

enum iconWrapperColorEnum {
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

export type IconWrapperColorKeys = keyof typeof iconWrapperColorEnum;

export type IconWrapperColorProps = {
  wrapperVariant?: IconWrapperColorKeys;
};

const iconWrapperColors = variant({
  prop: 'wrapperVariant',
  variants: {
    inherit: {
      borderColor: 'inherit',
    },
    normal: {
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
