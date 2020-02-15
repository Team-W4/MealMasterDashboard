import { variant } from 'styled-system';
import textSizes from '../Texts/textSizes';

enum inputSizeEnum {
  small,
  normal,
  large,
}

export type InputSizeKeys = keyof typeof inputSizeEnum;

export type InputSizeProps = {
  size?: InputSizeKeys;
};

const inputSizes = variant({
  prop: 'size',
  variants: {
    small: {
      paddingY: 'xs',
      ...textSizes({ size: 'small' }),
    },
    normal: {
      padding: 's',
      ...textSizes({ size: 'normal' }),
    },
    large: {
      padding: 'm',
      ...textSizes({ size: 'h1' }),
    },
  },
});

export default inputSizes;
