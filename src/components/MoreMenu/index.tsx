import React, { useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import styled from '../../styled';
import { IconButton } from '../Buttons';
import { MoreIcon } from '../Icons';
import MenuItemCard, { Props as MenuItemProps } from './MenuItemCard';

export type Props = {
  items: Array<MenuItemProps>;
};

// @ts-ignore
const StyledModalWrapper = styled(Modal)`
  justify-content: flex-end;
  margin: 0;
`;

const MoreMenu: React.FC<Props> = ({ items }) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <IconButton onPress={ () => setShow(true) }>
        <MoreIcon />
      </IconButton>
      <StyledModalWrapper
        isVisible={ show }
        onBackdropPress={ () => setShow(false) }
      >
        {items.map(({ title, icon, onPress }: MenuItemProps) => (
          <MenuItemCard
            key={ title }
            title={ title }
            icon={ icon }
            onPress={ onPress }
          />
        ))}
      </StyledModalWrapper>
    </View>
  );
};

export default MoreMenu;
