import { variant } from 'styled-system';

enum buttonSizeEnum {
  small,
  normal,
  large,
  epic,
}

export type ButtonSizeKeys = keyof typeof buttonSizeEnum;

export type ButtonSizeProps = {
  size?: ButtonSizeKeys;
};

const buttonSizes = variant({
  prop: 'size',
  variants: {
    small: {
      height: 25,
    },
    normal: {
      height: 50,
    },
    large: {
      height: 75,
    },
    epic: {
      height: 100,
    },
  },
});

export default buttonSizes;
