/* eslint-disable prettier/prettier */

const colors = {
  transparent:  '       ',
  inherit:      'inherit',
  white:        '#FFFFFF',
  black:        '#000000',
  neoncarrot:   '#FF8C2B',
  athensgray:   '#F3F3F5',
  manateeblue:  '#8F909F',
  silver:       '#C9C9C9',
  anakiwablue:  '#88CCFF',
};

enum SemanticColorFields {
  background,
  foreground,
  shadow,
  primary,
  secondary,
}

export type SemanticColors = {
  [K in Exclude<keyof typeof SemanticColorFields, number>]: string;
};

export const DefaultSemanticColors: SemanticColors = {
  background: colors.white,
  foreground: colors. athensgray,
  shadow: colors.silver,
  primary: colors.neoncarrot,
  secondary: colors.manateeblue,
};

export type ColorNames = typeof colors;
export type ColorKey = keyof ColorNames;
export default colors;

export const bodyColor = colors.black;
export const linkColor = colors.anakiwablue;
