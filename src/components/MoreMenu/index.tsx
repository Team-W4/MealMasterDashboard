import React, { useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import styled from '../../styled';
import MoreIcon from '../Icons/More';
import IconButton from '../Buttons/IconButton';
import MenuItemCard, { Props as MenuItemProps } from './MenuItemCard';

export type Props = {
  items: Array<MenuItemProps>;
};

const StyledModalWrapper = styled(Modal)`
  justifycontent: flex-end;
  margin: 0;
`;

const MoreMenu: React.FC<Props> = ({ items }) => {
  const [show, setShow] = useState(false);

  return (
    <View>
      <IconButton onPress={() => setShow(true)}>
        <MoreIcon />
      </IconButton>
      <StyledModalWrapper
        isVisible={show}
        onBackdropPress={() => setShow(false)}
      >
        {items.map(({ title, icon, onPress }: MenuItemProps, index) => (
          <MenuItemCard
            key={index}
            title={title}
            icon={icon}
            onPress={onPress}
          />
        ))}
      </StyledModalWrapper>
    </View>
  );
};

export default MoreMenu;
