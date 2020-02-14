import {
  borderColor,
  BorderColorProps,
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

export type Props = BorderColorProps &
  DisplayProps &
  FlexboxProps &
  LayoutProps &
  SpaceProps &
  PositionProps &
  TextAlignProps;

const Box = styled.View<Props>`
  ${borderColor}
  ${display}
  ${flexbox}
  ${layout}
  ${space}
  ${position}
  ${textAlign}
`;

export default Box;
