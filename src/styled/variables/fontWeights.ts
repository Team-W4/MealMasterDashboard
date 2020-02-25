/* eslint-disable key-spacing */

const fontWeights = {
  extraLight: '100',
  light:      '300',
  medium:     '400',
  normal:     '500',
  bold:       '900',
};

export type FontWeightNames = typeof fontWeights;
export type FontWeightKeys = keyof FontWeightNames;
export default fontWeights;
