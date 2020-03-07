import React, { useState, useEffect } from 'react';
import { Animated, PanResponder } from 'react-native';
import { Box } from '../Containers';

const SWIPE_TRHESHOLD = 100;

const ANIMATION_TIMING = 300;

export type Props = {
  data: Array<any>;
  renderItem: (data?: any) => JSX.Element;
};

const SwipeStack: React.FC<Props> = ({
  data,
  renderItem,
}) => {
  const [current, setCurrent] = useState(0);
  const [cardsPan] = useState(new Animated.ValueXY());
  const [cardStackAnimation] = useState(new Animated.Value(0));
  let animatedValueX = 0;

  useEffect(() => {
    cardsPan.x.addListener((value) => { animatedValueX = value.value; });

    return () => {
      cardsPan.x.removeAllListeners();
    };
  });

  const cardsPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => {
      cardsPan.setOffset({ x: animatedValueX, y: Number(cardsPan.y) });
      cardsPan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event([
      null, { dx: cardsPan.x, dy: cardsPan.y },
    ]),
    onPanResponderTerminationRequest: () => false,
    onPanResponderRelease: (e, gestureState) => {
      // bring the translationX back to 0
      Animated.timing(cardsPan, {
        toValue: 0,
        duration: ANIMATION_TIMING,
      }).start();

      if (Math.abs(gestureState.dx) <= SWIPE_TRHESHOLD) {
        return;
      }

      // will be used to interpolate values in each view
      Animated.timing(cardStackAnimation, {
        toValue: 1,
        duration: ANIMATION_TIMING,
      }).start(() => {
        // reset cardsStackedAnim's value to 0 when animation ends
        cardStackAnimation.setValue(0);

        // increment card position when animation ends
        setCurrent((current + 1) % data.length);
      });
    },
  });

  const bottomCardStyle = {
    position: 'absolute',
    zIndex: 1,
    bottom: cardStackAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [60, 40],
    }),
    transform: [{
      scale: 0.9,
    }],
    // TODO: This is more ideal, but doesn't work at the moment, will fix
    // transform: [{
    //   scale: cardStackAnimation.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0.80, 0.90],
    //   }),
    // }],
    opacity: cardStackAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.1, 0.6],
    }),
  };

  const middleCardStyle = {
    position: 'absolute',
    zIndex: 2,
    bottom: cardStackAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [40, 0],
    }),
    transform: [{
      scale: cardStackAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.90, 1.0],
      }),
    }],
    opacity: cardStackAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0.6, 1],
    }),
  };

  const topCardStyle = {
    position: 'absolute',
    zIndex: cardStackAnimation.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [3, 2, 1],
    }),
    bottom: cardStackAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 60],
    }),
    opacity: cardStackAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    }),
    transform: [
      { translateX: cardsPan.x },
      {
        scale: cardStackAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 0.90],
        }),
      },
    ],
  };

  const styles = [topCardStyle, middleCardStyle, bottomCardStyle];

  const getCardStyle = (index: number): any => {
    const cardIndex = (data.length - current + index) % data.length;

    switch (cardIndex) {
      case 0:
      case 1:
      case 2:
        return styles[cardIndex];
      default:
        return {
          position: 'absolute',
          zIndex: 0,
          opacity: 0,
        };
    }
  };

  return (
    <Box width="100%" alignItems="center">
      {
        data.map((item, index) => (
          <Animated.View
            { ...cardsPanResponder.panHandlers }
            style={ getCardStyle(index) }
          >
            {renderItem(item)}
          </Animated.View>
        ))
      }
      <Box opacity={ 0 }>
        {renderItem(data[0])}
      </Box>
    </Box>
  );
};

export default SwipeStack;
