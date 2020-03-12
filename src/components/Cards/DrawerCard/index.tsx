import React, { PropsWithChildren, useState } from 'react';
import {
 Animated, ScrollView, Dimensions, LayoutChangeEvent,
} from 'react-native';
import { useSafeArea } from 'react-native-safe-area-context';
import styled from '../../../styled';
import { Box, SafeView } from '../../Containers';
import Card from '../Card';

const { height: DEVICE_HEIGHT } = Dimensions.get('window');

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
  const [childrenHeight, setHeight] = useState(0);
  const { top: topInset, bottom: bottomInset } = useSafeArea();
  const outerYMapping = new Animated.Value(0);

  const top = outerYMapping.interpolate({
    inputRange: [0, topOffset],
    outputRange: [topOffset, topInset],
    extrapolate: 'clamp',
  });

  const translateY = outerYMapping.interpolate({
    inputRange: [topOffset, DEVICE_HEIGHT + topOffset],
    outputRange: [0, -(DEVICE_HEIGHT + topOffset)],
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
          <DrawerMarkBox>
            <DrawerMark />
          </DrawerMarkBox>
          <Animated.View
            onLayout={
              ({ nativeEvent: { layout: { height } } }: LayoutChangeEvent) => setHeight(height)
            }
            style={{
              transform: [{ translateY }],
            }}
          >
            {children}
          </Animated.View>
        </DrawerCardWrapper>
      </Animated.View>
      <Box position="absolute" right="xxxl" top="-25px">
        {topRightOverlay}
      </Box>
      <ScrollView
        scrollEventThrottle={ 16 }
        showsVerticalScrollIndicator={ false }
        onScroll={ (e) => {
          outerYMapping.setValue(e.nativeEvent.contentOffset.y);
        } }
      >
        <Box
          height={
            Math.max(childrenHeight, DEVICE_HEIGHT) - topInset - bottomInset + topOffset
          }
        />
      </ScrollView>
    </SafeViewDrawer>
  );
};

export default DrawerCard;
