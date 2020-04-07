import React, { PropsWithChildren, useState } from 'react';
import {
  Animated, ScrollView, Dimensions, LayoutChangeEvent,
} from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import styled from '../../../styled';
import { Box, SafeView } from '../../Containers';
import Card from '../Card';

const { height: DEVICE_HEIGHT } = Dimensions.get('window');

const DRAWER_HEIGHT = 32;

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
  height: ${DRAWER_HEIGHT}px;
`;

const DrawerMark = styled.View`
  width: 80px;
  height: 5px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-40px, -2.5px);
  background-color: ${({ theme: { semanticColors } }) => semanticColors.shadow};
`;

const DrawerCardWrapper = styled(Card)`
  flex: 1;
  overflow: hidden;
`;


export type Props = {
  topOffset?: number;
  topRightOverlay?: JSX.Element | null;
};

const DrawerCard: React.FC<PropsWithChildren<Props>> = ({
  topOffset = DEFAULT_DRAWER_OFFSET,
  topRightOverlay,
  children,
}) => {
  const { top: topInset } = useSafeArea();
  const outerYMapping = new Animated.Value(0);
  const [overlayHeight, setHeight] = useState(0);

  const top = outerYMapping.interpolate({
    inputRange: [
      0,
      topOffset - topInset - overlayHeight / 2,
    ],
    outputRange: [
      topOffset,
      topInset + overlayHeight / 2,
    ],
    extrapolate: 'clamp',
  });

  const topOverlay = outerYMapping.interpolate({
    inputRange: [
      0,
      topOffset - topInset - overlayHeight / 2,
    ],
    outputRange: [
      topOffset - overlayHeight / 2,
      topInset,
    ],
    extrapolate: 'clamp',
  });

  return (
    <SafeViewDrawer side="top">
      <Animated.View
        style={{
          backgroundColor: 'transparent',
          position: 'absolute',
          top,
          bottom: 0,
          width: '100%',
        }}
      >
        <DrawerCardWrapper>
          <DrawerMarkBox>
            <DrawerMark />
          </DrawerMarkBox>
        </DrawerCardWrapper>
      </Animated.View>
      <ScrollView
        style={{
          marginTop: DRAWER_HEIGHT + (topRightOverlay ? overlayHeight / 2 : 0),
        }}
        scrollEventThrottle={ 16 }
        showsVerticalScrollIndicator={ false }
        onScroll={ (e) => {
          outerYMapping.setValue(e.nativeEvent.contentOffset.y);
        } }
      >
        <Box
          mt={ topOffset - topInset - DRAWER_HEIGHT }
          minHeight={
            DEVICE_HEIGHT - DRAWER_HEIGHT - overlayHeight / 2
          }
        >
          {children}
        </Box>
      </ScrollView>
      <Animated.View
        onLayout={ (e: LayoutChangeEvent) => setHeight(e.nativeEvent.layout.height) }
        style={{
          position: 'absolute',
          top: topOverlay,
          right: 32,
        }}
      >
        {topRightOverlay}
      </Animated.View>
    </SafeViewDrawer>
  );
};

export default DrawerCard;
