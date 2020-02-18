import { space, SpaceProps, textAlign, TextAlignProps } from 'styled-system';
import styled from '../../../styled';
import textSize, { TextSizeProps } from '../textSizes';
import textColor, { TextColorProps } from '../textColors';

export type Props = SpaceProps &
  TextAlignProps &
  TextSizeProps &
  TextColorProps;

const Text = styled.Text<Props>`
  font-family: 'SofiaProRegular';
  ${space}
  ${textAlign}
  ${textSize}
  ${textColor}
`;

Text.defaultProps = {
  size: 'normal',
  variant: 'normal',
};

export default Text;
