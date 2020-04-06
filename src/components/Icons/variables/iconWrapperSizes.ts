import { variant } from 'styled-system';

enum iconWrapperSizeEnum {
  small,
  normal,
  large,
}

export type IconWrapperSizeKeys = keyof typeof iconWrapperSizeEnum;

export type IconWrapperSizeProps = {
  size?: IconWrapperSizeKeys;
};

const iconWrapperSizes = variant({
  prop: 'size',
  variants: {
    small: {
      width: '30px',
      height: '30px',
    },
    normal: {
      width: '50px',
      height: '50px',
    },
    large: {
      width: '80px',
      height: '80px',
    },
  },
});

export default iconWrapperSizes;
