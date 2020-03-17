import { KeyboardAvoidingViewProps } from 'react-native';
import styled from '../../../styled';

export type Props = KeyboardAvoidingViewProps & {
  full?: boolean;
};

const KeyboardView = styled.KeyboardAvoidingView<Props>`
  ${({ full }) => (full ? 'flex: 1;' : '')}
`;

KeyboardView.defaultProps = {
  full: false,
};

export default KeyboardView;
