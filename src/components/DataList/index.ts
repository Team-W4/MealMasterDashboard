import { FlatList } from 'react-native';
import styled from '../../styled';

const DataList = styled(FlatList)`
  padding-top: ${({ theme: { space } }) => space.l};
`;

export default DataList;
