import styled from '../../../styled';
import inputColors, { InputColorProps, InputColorKeys } from '../inputColors';

export type Keys = InputColorKeys;

export type Props = InputColorProps;

const StyledInputWrapper = styled.View<InputColorProps>`
  width: 100%;
  border-bottom-width: 2px;
  ${inputColors}
`;

export default StyledInputWrapper;
