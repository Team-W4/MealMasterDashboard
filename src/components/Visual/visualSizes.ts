import { variant } from 'styled-system';

enum visualSizeEnum {
  small,
  normal,
  large,
  epic,
}

export type VisualSizeKeys = keyof typeof visualSizeEnum;

export type VisualSizeProps = {
  size?: VisualSizeKeys;
};

const visualSizes = variant({
  prop: 'size',
  variants: {
    small: {
      height: '100px',
    },
    normal: {
      height: '300px',
    },
    large: {
      height: '350px',
    },
    epic: {
      height: '430px',
    },
  },
});

export default visualSizes;
