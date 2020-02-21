import { variant } from 'styled-system';

enum tagColorEnum {
  normal,
  soon,
  expired,
}

export type TagColorKeys = keyof typeof tagColorEnum;

export type TagColorProps = {
  variant?: TagColorKeys;
};

const tagColors = variant({
  prop: 'variant',
  variants: {
    normal: {
      backgroundColor: 'athensgray',
    },
    soon: {
      backgroundColor: 'neoncarrot',
    },
    expired: {
      backgroundColor: 'persimmonred',
    },
  },
});

export default tagColors;
