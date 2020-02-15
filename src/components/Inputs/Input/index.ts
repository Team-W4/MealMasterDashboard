import { TextInputProps } from 'react-native';
import styled from '../../../styled';
import inputColors, { InputColorProps } from '../inputColors';
import inputSizes, { InputSizeProps } from '../inputSizes';

export type Props = TextInputProps &
  InputColorProps &
  InputSizeProps & {
    title?: string;
  };

const Input = styled.TextInput.attrs(() => ({
  autoCapitalize: 'none',
}))<Props>`
  ${inputColors}
  ${inputSizes}
  border-bottom-width: 2px;
  padding-left: ${({ theme: { space } }) => space.s};
`;

Input.defaultProps = {
  variant: 'normal',
  size: 'normal',
};

export default Input;
