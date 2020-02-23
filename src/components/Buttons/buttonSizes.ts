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
      height: '25px',
    },
    normal: {
      height: '58px',
    },
    large: {
      height: '75px',
    },
    epic: {
      height: '100px',
    },
  },
});

export default buttonSizes;
