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
      lineHeight: 'primer',
      fontWeight: 'bold',
      fontFamily: 'SofiaProBold',
    },
    h1: {
      fontSize: 'bourgeois',
      lineHeight: 'bourgeois',
      fontWeight: 'normal',
    },
    h2: {
      fontSize: 'pica',
      lineHeight: 'pica',
      fontWeight: 'light',
      fontFamily: 'SofiaProLight',
    },
    large: {
      fontSize: 'paragon',
      lineHeight: 'paragon',
    },
    normal: {
      fontSize: 'pica',
      lineHeight: 'pica',
    },
    small: {
      fontSize: 'brevier',
      lineHeight: 'brevier',
    },
  },
});

export default textSizes;
