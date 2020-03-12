import { ScrollViewProps } from 'react-native';
import styled from '../../styled';

export type Props = ScrollViewProps & {
  full?: boolean;
};

const ScrollList = styled.ScrollView<Props>`
  padding-top: ${({ theme: { space } }) => space.l};
  padding-bottom: ${({ theme: { space } }) => space.l};
  width: 100%;
  ${({ full }) => (full ? 'flex: 1;' : '')}
`;

ScrollList.defaultProps = {
  full: false,
};

export default ScrollList;
