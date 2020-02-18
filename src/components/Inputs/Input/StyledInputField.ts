import styled from '../../../styled';
import inputSizes, { InputSizeProps } from '../inputSizes';
import textColors, { TextColorProps } from '../../Texts/textColors';

export type Props = InputSizeProps & TextColorProps;

const StyledInputField = styled.TextInput.attrs(() => ({
  autoCorrect: false,
  autoCapitalize: 'none',
}))<Props>`
  font-family: 'SofiaProRegular';
  ${inputSizes}
  ${textColors}
`;

export default StyledInputField;
