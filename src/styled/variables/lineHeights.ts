/* eslint-disable prettier/prettier */

const lineHeights = {
  american:     '1px',
  saxon:        '2px',
  brilliant:    '4px',
  brevier:      '8px',
  pica:         '16px',
  bourgeois:    '24px',
  primer:       '32px',
  paragon:      '64px',
};

export type LineHeightNames = typeof lineHeights;
export type LineHeightKeys = keyof LineHeightNames;
export default lineHeights;
