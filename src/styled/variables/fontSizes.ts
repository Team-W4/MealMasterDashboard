/* eslint-disable prettier/prettier */

const fontSizes = {
  american:     '1px',
  saxon:        '2px',
  brilliant:    '4px',
  brevier:      '8px',
  pica:         '16px',
  bourgeois:    '24px',
  primer:       '32px',
  paragon:      '64px',
};

export type FontSizeNames = typeof fontSizes;
export type FontSizeKeys = keyof FontSizeNames;
export default fontSizes;
