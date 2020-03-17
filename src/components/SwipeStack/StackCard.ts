import { Animated } from 'react-native';
import {
  opacity, OpacityProps, position, PositionProps,
} from 'styled-system';
import styled from '../../styled';

export type Props = PositionProps
  & OpacityProps;

const StackCard = styled(Animated.View)<Props>`
  position: absolute;
  ${opacity}
  ${position}
`;

export default StackCard;
