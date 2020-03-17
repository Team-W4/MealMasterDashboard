import React, { useState } from 'react';
import Modal from 'react-native-modal';
import styled from '../../styled';
import { Box } from '../Containers';
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
    <Box>
      <IconButton onPress={ () => setShow(true) }>
        <MoreIcon />
      </IconButton>
      <StyledModalWrapper
        isVisible={ show }
        onBackdropPress={ () => setShow(false) }
      >
        {items.map(({ title, onPress, ...props }: MenuItemProps) => (
          <MenuItemCard
            key={ title }
            title={ title }
            onPress={ () => {
              setShow(false);
              if (onPress) {
                onPress();
              }
            } }
            { ...props }
          />
        ))}
      </StyledModalWrapper>
    </Box>
  );
};

export default MoreMenu;
