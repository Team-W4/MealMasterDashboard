import { FlatList } from 'react-native';
import styled from '../../styled';

const DataList = styled(FlatList).attrs(() => ({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
}))`
  flex: 1;
  width: 100%;
  padding-top: ${({ theme: { space } }) => space.l};
`;

export default DataList;
