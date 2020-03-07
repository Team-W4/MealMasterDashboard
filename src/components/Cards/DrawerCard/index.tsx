import React, { PropsWithChildren } from 'react';
import { Animated } from 'react-native';
import { SafeView } from '../../Containers';
import Card from '../Card';

export type Props = {
  topOffset?: number;
};

const DrawerCard: React.FC<PropsWithChildren<Props>> = ({ topOffset, children }) => {
  const y = new Animated.Value(0);

  const inputRange = [0, topOffset || 0];
  const outputRange = [topOffset || 0, 0];

  const translateY = y.interpolate({
    inputRange,
    outputRange,
    extrapolateRight: "clamp",
  });

  return (
    <SafeView side="top">
      <Animated.View
        style={{
          transform: [{ translateY }],
        }}
      >
        <Card>
          <Animated.ScrollView
            scrollEventThrottle={ 16 }
            showsVerticalScrollIndicator={ false }
            onScroll={ Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: { y },
                  },
                },
              ],
              { useNativeDriver: true },
            ) }
          >
            {children}
          </Animated.ScrollView>
        </Card>
      </Animated.View>
    </SafeView>
  );
};

DrawerCard.defaultProps = {
  topOffset: 300,
};

export default DrawerCard;
