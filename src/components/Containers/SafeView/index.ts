import {
  layout, LayoutProps, space, SpaceProps,
} from 'styled-system';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import styled from '../../../styled';

export type Props = SafeAreaViewProps
  & LayoutProps
  & SpaceProps
  & {
    full?: boolean;
    side?: 'top' | 'bottom' | 'left' | 'right';
  };

const SafeView = styled(SafeAreaView)<Props>`
  ${space}
  ${layout}
  ${({ full }) => (full ? 'flex: 1;' : '')}
  ${({ side }) => {
    switch (side) {
      case 'top':
        return 'padding-bottom: 0;';
      case 'bottom':
        return 'padding-top: 0;';
      case 'left':
        return 'padding-right: 0;';
      case 'right':
        return 'padding-left: 0;';
      default:
        return '';
    }
  }}
`;

SafeView.defaultProps = {
  full: false,
};

export default SafeView;
