import styled from '../../../styled';
import inputSizes, { InputSizeProps } from '../inputSizes';

export type Props = InputSizeProps;

const StyledInputField = styled.TextInput.attrs(() => ({
  autoCorrect: false,
  autoCapitalize: 'none',
}))<Props>`
  ${inputSizes}
`;

export default StyledInputField;