import React from 'react';
import styled from '../../styled';
import Box from '../Containers/Box';
import Grid, { Column } from '../Containers/Grid';
import Card from '../Cards/Card';
import Text from '../Texts/Text';

const StyledCardItem = styled(Card)`
  border-radius: 0px;
`;

export type Props = {
  title: string;
  icon: JSX.Element;
  onPress: (e?: any) => void;
};

const MenuItemCard: React.FC<Props> = ({ title, icon, onPress }) => (
  <StyledCardItem onPress={onPress}>
    <Grid px="l">
      <Box width="50px" justifyContent="center" alignItems="center">
        {icon}
      </Box>
      <Column>
        <Text py="xl">{title}</Text>
      </Column>
    </Grid>
  </StyledCardItem>
);

export default MenuItemCard;
