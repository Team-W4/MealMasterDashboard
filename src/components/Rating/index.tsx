import React from 'react'
import { Row } from '../Containers/Grid';
import Text from '../Texts/Text';
import StyledRatingWrapper from './StyledRatingWrapper';
import styled from '../../styled';

const MAX_RATING = 5;

export type Props = {
  value: number;
};

const RankedText = styled(Text)`
  line-height: 0;
`;

const UnrankedText = styled(RankedText)`
  opacity: 0.25;
`;

const Rating: React.FC<Props> = ({ value, ...props }) => (
  <StyledRatingWrapper {...props}>
    <Row alignItems="center" px="s">
      <Text mr="xs" size="h2" variant="inverted">
        {value.toFixed(1)}
      </Text>
      <RankedText size="h1" variant="inverted">
        {'•'.repeat(Math.round(value))}
      </RankedText>
      <UnrankedText size="h1" variant="inverted">
        {'•'.repeat(MAX_RATING - Math.round(value))}
      </UnrankedText>
    </Row>
  </StyledRatingWrapper>
);

export default Rating;
