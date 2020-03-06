import { FlatList } from 'react-native';
import styled from '../../styled';

const DataList = styled(FlatList).attrs(() => ({
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
}))`
  padding-top: ${({ theme: { space } }) => space.l};
`;

export default DataList;
