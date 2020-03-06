import React from 'react';
import styled from '../../styled';
import { Box, Grid, Column } from '../Containers';
import { Card } from '../Cards';
import { Text } from '../Texts';

const MenuItemCardWrapper = styled(Card)`
  border-radius: 0px;
`;

export type Props = {
  title: string;
  icon: JSX.Element;
  onPress: (e?: any) => void;
};

const MenuItemCard: React.FC<Props> = ({ title, icon, onPress }) => (
  <MenuItemCardWrapper onPress={ onPress }>
    <Grid px="l">
      <Box width="50px" justifyContent="center" alignItems="center">
        {icon}
      </Box>
      <Column>
        <Text py="xl">{title}</Text>
      </Column>
    </Grid>
  </MenuItemCardWrapper>
);

export default MenuItemCard;
