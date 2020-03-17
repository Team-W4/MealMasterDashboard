/* eslint-disable key-spacing */

const colors = {
  transparent:  'transparent',
  inherit:      '',
  white:        '#FFFFFF',
  black:        '#333333',
  neoncarrot:   '#FF8C2B',
  orange:       '#FF6B24',
  athensgray:   '#F3F3F5',
  manateegray:  '#8F909F',
  silver:       '#C9C9C9',
  anakiwablue:  '#88CCFF',
  persimmonred: '#FF6657',
  chartgreen:   '#77D903',
};

export const bodyColor = colors.black;
export const linkColor = colors.anakiwablue;

enum SemanticColorFields {
  background,
  foreground,
  shadow,
  primary,
  secondary,
  active,
}

export type SemanticColors = {
  [K in Exclude<keyof typeof SemanticColorFields, number>]: string;
};

export const DefaultSemanticColors: SemanticColors = {
  background: colors.white,
  foreground: colors.athensgray,
  shadow: colors.silver,
  primary: colors.neoncarrot,
  secondary: colors.manateegray,
  active: colors.orange,
};

export type ColorNames = typeof colors;
export type ColorKey = keyof ColorNames;
export default colors;
