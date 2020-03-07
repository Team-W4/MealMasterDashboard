import React, { PropsWithChildren } from 'react';
import { Animated, ScrollView, PanResponder } from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import styled from '../../../styled';
import { SafeView } from '../../Containers';
import Card from '../Card';

const DEFAULT_DRAWER_OFFSET = 430;

const SafeViewDrawer = styled(SafeView)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const DrawerMarkBox = styled.View`
  top: 0;
  left: 0;
  right: 0;
  height: 32px;
  align-items: center;
  justify-content: center;
`;

const DrawerMark = styled.View`
  width: 80px;
  height: 5px;
  border-radius: 5px;
  background-color: ${({ theme: { semanticColors } }) => semanticColors.shadow};
`;

const DrawerCardWrapper = styled(Card)`
  flex: 1;
`;


export type Props = {
  topOffset?: number;
};

const DrawerCard: React.FC<PropsWithChildren<Props>> = ({
  topOffset = DEFAULT_DRAWER_OFFSET,
  children,
}) => {
  const { top: topInset } = useSafeArea();
  const cardsPan = new Animated.ValueXY({ x: 0, y: topOffset });

  const cardsPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => true,
    onPanResponderMove: Animated.event([
      null, { moveX: cardsPan.x, moveY: cardsPan.y },
    ]),
    onPanResponderTerminationRequest: () => false,
    onPanResponderRelease: () => {},
  });

  const top = cardsPan.y.interpolate({
    inputRange: [topInset, topOffset],
    outputRange: [topInset, topOffset],
    extrapolate: 'clamp',
  });

  return (
    <SafeViewDrawer>
      <Animated.View
        style={{
          position: 'absolute',
          top,
          bottom: 0,
          width: '100%',
        }}
      >
        <DrawerCardWrapper>
          <DrawerMarkBox
            { ...cardsPanResponder.panHandlers }
          >
            <DrawerMark />
          </DrawerMarkBox>
          <ScrollView
            showsVerticalScrollIndicator={ false }
          >
            {children}
          </ScrollView>
        </DrawerCardWrapper>
      </Animated.View>
    </SafeViewDrawer>
  );
};

export default DrawerCard;
