import styled from '../../../styled';
import inputColors, { InputColorProps, InputColorKeys } from '../inputColors';

export type Keys = InputColorKeys;

export type Props = InputColorProps & {
  bordered?: boolean;
};

const StyledInputWrapper = styled.View<Props>`
  width: 100%;
  ${inputColors}
  ${({ bordered }) => bordered && `
    border-bottom-width: 2px;
  `}
`;

export default StyledInputWrapper;
