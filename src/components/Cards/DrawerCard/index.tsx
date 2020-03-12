import React, { PropsWithChildren } from 'react';
import { Animated, ScrollView, Dimensions } from 'react-native';
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
  align-items: center;
  justify-content: center;
  height: ${({ theme: { space } }) => space.xxxl};
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
  const { top: topInset } = useSafeArea();
  const outerYMapping = new Animated.Value(0);

  const top = outerYMapping.interpolate({
    inputRange: [0, topOffset - topInset],
    outputRange: [topOffset, topInset + (topRightOverlay ? 16 : 0)],
    extrapolate: 'clamp',
  });

  const topOverlay = outerYMapping.interpolate({
    inputRange: [0, topOffset - topInset],
    outputRange: [topOffset - 25, topInset + (topRightOverlay ? 16 : 0) - 25],
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
        </DrawerCardWrapper>
      </Animated.View>
      <ScrollView
        style={{ marginTop: topInset }}
        scrollEventThrottle={ 16 }
        showsVerticalScrollIndicator={ false }
        onScroll={ (e) => {
          outerYMapping.setValue(e.nativeEvent.contentOffset.y);
        } }
      >
        <Box
          mt={ topOffset - topInset }
          minHeight={ DEVICE_HEIGHT - topInset * 3 }
        >
          {children}
        </Box>
      </ScrollView>

      <Animated.View
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
