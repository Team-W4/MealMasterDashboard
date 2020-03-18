import React from 'react';
import { useSafeArea } from 'react-native-safe-area-context';
import styled from '../../styled';
import { Box, Grid, Column } from '../Containers';
import { Card } from '../Cards';
import { Text } from '../Texts';
import { TextColorKeys } from '../Texts/textColors';

const MenuItemCardWrapper = styled(Card)`
  border-radius: 0px;
`;

export type Props = {
  title: string;
  textVariant?: TextColorKeys;
  icon: JSX.Element;
  last?: boolean;
  onPress: (e?: any) => void;
};

const MenuItemCard: React.FC<Props> = ({
  title, textVariant, icon, onPress, last,
}) => (
  <MenuItemCardWrapper
    onPress={ onPress }
  >
    <Grid px="l" pt="xl" pb={ last ? useSafeArea().bottom : 'xl' }>
      <Box width="50px" justifyContent="center" alignItems="center">
        {icon}
      </Box>
      <Column justifyContent="center">
        <Text variant={ textVariant }>{title}</Text>
      </Column>
    </Grid>
  </MenuItemCardWrapper>
);

MenuItemCard.defaultProps = {
  last: false,
};

export default MenuItemCard;
