enum SpacesEnum {
  base = '4px',

  a = 'auto',
  auto = a,
  zero = '0px',

  xxs = '4px',
  extra2Small = xxs,

  xs = '8px',
  extraSmall = xs,

  s = '12px',
  small = s,

  m = '16px',
  medium = m,

  l = '20px',
  large = l,

  xl = '24px',
  extraLarge = xl,

  xxl = '28px',
  extra2Large = xxl,

  xxxl = '32px',
  extra3Large = xxxl,
}

export type SpaceNames = typeof SpacesEnum;
export type SpaceKeys = keyof SpaceNames;
export default SpacesEnum;
