import { variant } from 'styled-system';

enum textSizeEnum {
  title,
  h1,
  h2,
  large,
  normal,
  small,
}

export type TextSizeKeys = keyof typeof textSizeEnum;

export type TextSizeProps = {
  size?: TextSizeKeys;
};

const textSizes = variant({
  prop: 'size',
  variants: {
    title: {
      fontSize: 'primer',
      fontWeight: 'bold',
    },
    h1: {
      fontSize: 'bourgeois',
      fontWeight: 'light',
    },
    h2: {
      fontSize: 'pica',
      fontWeight: 'extraLight',
    },
    large:{
      fontSize: 'paragon',
    },
    normal: {
      fontSize: 'pica',
    },
    small: {
      fontSize: 'brevier',
    },
  },
});

export default textSizes;
