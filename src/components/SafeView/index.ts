import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import styled from '../../styled';

export type Props = SafeAreaViewProps & {
  full?: boolean;
};

const SafeView = styled(SafeAreaView)<Props>`
  ${({ full }) => (full ? 'flex: 1;' : '')}
`;

SafeView.defaultProps = {
  full: false,
};

export default SafeView;
