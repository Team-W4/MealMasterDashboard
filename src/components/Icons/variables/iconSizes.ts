import { variant } from 'styled-system';

enum iconSizeEnum {
  small,
  normal,
  large,
}

export type IconSizeKeys = keyof typeof iconSizeEnum;

export type IconSizeProps = {
  size?: IconSizeKeys;
};

const iconSizes = variant({
  prop: 'size',
  variants: {
    small: {
      width: '13px',
      height: '13px',
    },
    normal: {
      width: '20px',
      height: '20px',
    },
    large: {
      width: '30px',
      height: '30px',
    },
  },
});

export default iconSizes;
