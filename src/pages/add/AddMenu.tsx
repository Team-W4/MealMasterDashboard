import React, { useState, useEffect } from 'react';
import { Animated, Easing, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProgressCircle } from 'react-native-svg-charts';
import colors from '../../styled/variables/colors';
import styled from '../../styled';
import {
  AddIcon, ScanIcon, AddRecipeIcon, EatIcon,
} from '../../components/Icons';
import { Box } from '../../components/Containers';
import { IconButton } from '../../components/Buttons';

const MENU_HEIGHT = 100;

const ANIMATION_TIMING = 400;

const { width: DEVICE_WIDTH } = Dimensions.get('window');

const BackgroundSemiCircle = styled(ProgressCircle).attrs(() => ({
  cornerRadius: 0,
  strokeWidth: MENU_HEIGHT,
  startAngle: -Math.PI / 2,
  endAngle: Math.PI / 2,
  backgroundColor: 'transparent',
}))`
  height: ${MENU_HEIGHT * 2}px;
  width: ${MENU_HEIGHT * 2}px;
`;

const AnimatableSemiCircle = Animated.createAnimatedComponent(BackgroundSemiCircle);

const AddMenu: React.FC = () => {
  const navigation = useNavigation();
  const [showOptions, setShow] = useState(false);
  const [backgroundRate] = useState(new Animated.Value(0));
  const [midgroundRate] = useState(new Animated.Value(0));
  const [foregroundRate] = useState(new Animated.Value(0));

  const menuRotation = foregroundRate.interpolate({
    inputRange: [0, 1],
    outputRange: ['-180deg', '0deg'],
  });

  const buttonRotation = foregroundRate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '45deg'],
  });

  const onAddClick = () => {
    if (showOptions) {
      Animated.stagger(150, [
        Animated.timing(
          foregroundRate,
          {
            toValue: 0,
            duration: ANIMATION_TIMING,
          },
        ),
        Animated.timing(
          midgroundRate,
          {
            toValue: 0,
            duration: ANIMATION_TIMING,
          },
        ),
        Animated.timing(
          backgroundRate,
          {
            toValue: 0,
            duration: ANIMATION_TIMING,
          },
        ),
      ]).start(() => setShow(false));
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    if (showOptions) {
      Animated.stagger(150, [
        Animated.timing(
          backgroundRate,
          {
            toValue: 1,
            duration: ANIMATION_TIMING,
          },
        ),
        Animated.timing(
          midgroundRate,
          {
            toValue: 1,
            duration: ANIMATION_TIMING,
          },
        ),
        Animated.timing(
          foregroundRate,
          {
            toValue: 1,
            duration: ANIMATION_TIMING,
            easing: Easing.linear,
          },
        ),
      ]).start();
    }
  }, [showOptions]);

  return (
    <Box width={ MENU_HEIGHT * 2 } height={ MENU_HEIGHT }>
      {
        showOptions && (
          <>
            <Box>
              <AnimatableSemiCircle
                progress={ backgroundRate }
                progressColor={ colors.athensgray }
              />
              <Box position="absolute" bottom="0">
                <AnimatableSemiCircle
                  progress={ midgroundRate }
                  progressColor={ colors.neoncarrot }
                />
              </Box>
              <Box position="absolute" bottom="0">
                <AnimatableSemiCircle
                  progress={ foregroundRate }
                  progressColor={ colors.orange }
                />
              </Box>
            </Box>
            <Box
              top="0"
              overflow="hidden"
              position="absolute"
              height={ MENU_HEIGHT }
            >
              <Animated.View
                style={{
                  alignItems: 'center',
                  width: MENU_HEIGHT * 2,
                  height: MENU_HEIGHT * 2,
                  transform: [{
                    rotate: menuRotation,
                  }],
                }}
              >
                <Box
                  width={ 200 }
                  flexDirection="row"
                  alignItems="flex-end"
                  justifyContent="space-around"
                >
                  <Box px="m" py="xs">
                    <IconButton
                      variant="transparent"
                      onPress={ () => {
                        navigation.navigate('Consume');
                        onAddClick();
                      } }
                    >
                      <EatIcon variant="inverted" />
                    </IconButton>
                  </Box>
                  <Box mt="xxs" pb="l" mb="xxxl">
                    <IconButton
                      variant="transparent"
                      onPress={ () => {
                        navigation.navigate('ReceiptParse');
                        onAddClick();
                      } }
                    >
                      <ScanIcon variant="inverted" />
                    </IconButton>
                  </Box>
                  <Box px="m" py="xs">
                    <IconButton
                      variant="transparent"
                      onPress={ () => {
                        navigation.navigate('RecipeEdit');
                        onAddClick();
                      } }
                    >
                      <AddRecipeIcon variant="inverted" />
                    </IconButton>
                  </Box>
                </Box>
              </Animated.View>
            </Box>
          </>
        )
      }
      <Animated.View
        style={{
          position: 'absolute',
          top: MENU_HEIGHT - 25 - DEVICE_WIDTH / 15,
          left: MENU_HEIGHT - 25 - DEVICE_WIDTH / 15,
          padding: DEVICE_WIDTH / 15,
          transform: [{ rotate: buttonRotation }],
        }}
      >
        <IconButton onPress={ onAddClick }>
          <AddIcon />
        </IconButton>
      </Animated.View>
    </Box>
  );
};

export default AddMenu;
