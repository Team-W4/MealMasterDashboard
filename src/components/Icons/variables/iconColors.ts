import colors from '../../../styled/variables/colors';

enum iconColorEnum {
  normal,
  inverted,
  warning,
  error,
  success,
  secondary,
  tertiary,
  link,
  active,
}

export type IconColorKeys = keyof typeof iconColorEnum;

export type IconColorProps = {
  variant?: IconColorKeys;
};

const iconColors = {
  normal: colors.black,
  inverted: colors.white,
  warning: colors.neoncarrot,
  error: colors.persimmonred,
  success: colors.chartgreen,
  secondary: colors.manateegray,
  tertiary: colors.silver,
  link: colors.anakiwablue,
  active: colors.orange,
};

export default iconColors;
