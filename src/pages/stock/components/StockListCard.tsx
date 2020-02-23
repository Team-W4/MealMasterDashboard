import React from 'react';
import styled from '../../../styled';
import Card, { Props as CardProps } from '../../../components/Cards/Card';
import Box from '../../../components/Containers/Box';
import Text from '../../../components/Texts/Text';
import Heading from '../../../components/Texts/Heading';
import Subtitle from '../../../components/Texts/Subtitle';
import Grid, { Row } from '../../../components/Containers/Grid';
import ClockIcon from '../../../components/Icons/Clock';
import QuantityIcon from '../../../components/Icons/Quantity';
import { expiryLabelHelper } from '../expiryHelper';
import { dateDifferenceHelper } from '../../../utils/dateHelper';
import StockListCardWrapper from './StockListCardWrapper';
import titleHelper from '../../../utils/titleHelper';

const StyledImage = styled.Image`
  height: 75px;
  border-top-right-radius: ${({ theme: { space } }) => space.s};
  border-top-left-radius: ${({ theme: { space } }) => space.s};
`;

export type Props = CardProps & {
  imageURI?: string;
  title?: string;
  tag?: string;
  nextExpiration?: string;
  quantity?: number;
};

const StockListCard: React.FC<Props> = ({
  imageURI,
  title,
  tag,
  nextExpiration,
  quantity,
  ...props
}) => {
  const expDate = nextExpiration ? new Date(nextExpiration) : new Date();
  const today = new Date();

  const expNumber = dateDifferenceHelper(expDate, today);
  const titleVariant = expNumber > 2 ? 'normal' : (expNumber >= 0 ? 'warning' : 'error');
  const stockVariant = expNumber > 2 ? 'tertiary' : (expNumber >= 0 ? 'warning' : 'error');

  return (
    <StockListCardWrapper shadowVariant={stockVariant} {...props}>
      <StyledImage source={{ uri: imageURI }} />
      <Box p="m">
        {tag && <Subtitle mb="s">{tag}</Subtitle>}
        {title && <Heading mb="s" variant={titleVariant}>{titleHelper(title)}</Heading>}
        <Grid>
          <Row>
            <ClockIcon variant={stockVariant} mr="xs" size="small" />
            <Text variant={stockVariant}>{expiryLabelHelper(expNumber)}</Text>
          </Row>
          <Row>
            <QuantityIcon variant={stockVariant} mr="xs" size="small" />
            <Text size="h2" variant={stockVariant}>{`${quantity || 0} servings`}</Text>
          </Row>
        </Grid>
      </Box>
    </StockListCardWrapper>
  );
}

export default StockListCard;
