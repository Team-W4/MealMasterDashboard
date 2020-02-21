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
import StockListCardWrapper from './StockListCardWrapper';

const StyledImage = styled.Image`
  height: 75px;
  border-top-right-radius: ${({ theme: { space } }) => space.s};
  border-top-left-radius: ${({ theme: { space } }) => space.s};
`;

export type Props = CardProps & {
  imageURI?: string;
  title?: string;
  tag?: string;
  expiryTime?: string;
  quantity?: string;
};

const StockListCard: React.FC<Props> = ({
  imageURI,
  title = 'Linguine',
  tag,
  expiryTime,
  quantity,
  ...props
}) => {
  const expNumber = Number(2);
  const stockVariant = expNumber > 2 ? 'tertiary' : (expNumber >= 0 ? 'warning' : 'error');

  return (
    <StockListCardWrapper shadowVariant={stockVariant} {...props}>
      <StyledImage source={{ uri: imageURI }} />
      <Box px="m" py="s">
        {tag && <Subtitle mb="xs">{tag}</Subtitle>}
        {title && <Heading mb="xs" variant={stockVariant}>{title}</Heading>}
        <Grid>
          <Row>
            <ClockIcon variant={stockVariant} mr="xs" size="small" />
            <Text variant={stockVariant}>{expiryLabelHelper(expNumber)}</Text>
          </Row>
          <Row>
            <QuantityIcon variant={stockVariant} mr="xs" size="small" />
            <Text size="h2" variant={stockVariant}>{`${quantity || 0}g`}</Text>
          </Row>
        </Grid>
      </Box>
    </StockListCardWrapper>
  );
}

export default StockListCard;
