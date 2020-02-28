import { FlatList } from 'react-native';
import styled from '../../../styled';

const SearchResultList = styled(FlatList)`
  padding-top: ${({ theme: { space } }) => space.l};
`;

export default SearchResultList;
