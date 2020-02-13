/* eslint-disable prettier/prettier */

const fontWeights = {
  extraLight: '300',
  light:      '400',
  medium:     '4500',
  normal:     '500',
  bold:       '600',
};

export type FontWeightNames = typeof fontWeights;
export type FontWeightKeys = keyof FontWeightNames;
export default fontWeights;
