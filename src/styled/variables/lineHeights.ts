/* eslint-disable prettier/prettier */

const lineHeights = {
  american:     '1.4px',
  saxon:        '2.8px',
  brilliant:    '5.6px',
  brevier:      '11.2px',
  pica:         '22.4px',
  bourgeois:    '33.6px',
  primer:       '44.8px',
  paragon:      '89.6px',
};

export type LineHeightNames = typeof lineHeights;
export type LineHeightKeys = keyof LineHeightNames;
export default lineHeights;
