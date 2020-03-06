import React from 'react';
import { connect } from 'react-redux';
import { User } from '../../../constants/dataTypes';
import { Box } from '../../../components/Containers';
import DataList from '../../../components/DataList';

type Props = {
  data?: Array<User>;
};

const SearchUserTab: React.FC<Props> = ({
  data,
}) => (
  // @ts-ignore
  <DataList
    data={ data }
    keyExtractor={ (item: User) => item.id.toString() }
    renderItem={ ({ item }: { item: User }) => (
      <Box key={ item.id.toString() } px="l" mb="m" />
    ) }
  />
);

const mapStateToProps = (state: any) => ({
  data: state.search.users,
});

export default connect(
  mapStateToProps,
  null,
)(SearchUserTab);
