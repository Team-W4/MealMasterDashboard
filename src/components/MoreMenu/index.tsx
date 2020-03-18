import React from 'react';
import Modal from 'react-native-modal';
import styled from '../../styled';
import { useBoolean } from '../../hooks';
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
  const [show, { setTrue, setFalse }] = useBoolean(false);

  return (
    <Box>
      <IconButton onPress={ () => setTrue() }>
        <MoreIcon />
      </IconButton>
      <StyledModalWrapper
        isVisible={ show }
        onBackdropPress={ () => setFalse() }
      >
        {items.map(({ title, onPress, ...props }: MenuItemProps, index) => (
          <MenuItemCard
            key={ title }
            title={ title }
            last={ index === items.length - 1 }
            onPress={ () => {
              setFalse();
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
