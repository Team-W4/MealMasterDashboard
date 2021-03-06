import {
  border,
  BordersProps,
  color,
  ColorProps,
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  position,
  PositionProps,
  textAlign,
  TextAlignProps,
} from 'styled-system';
import styled from '../../../styled';

export type Props = ColorProps &
  BordersProps &
  DisplayProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  PositionProps &
  TextAlignProps;

const Box = styled.View<Props>`
  ${color}
  ${border}
  ${display}
  ${flexbox}
  ${layout}
  ${space}
  ${position}
  ${textAlign}
`;

export default Box;
