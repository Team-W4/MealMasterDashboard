import React from 'react';
import Card, { Props as CardProps } from '../../../components/Cards/Card';
import Text from '../../../components/Texts/Text';
import Box from '../../../components/Containers/Box';
import ClockIcon from '../../../components/Icons/Clock';
import QuantityIcon from '../../../components/Icons/Quantity';
import Grid, { Row } from '../../../components/Containers/Grid';
import properDateHelper from '../../../utils/properDateHelper';
import { stockItemLabelHelper } from '../expiryHelper';
import StockListCardWrapper from './StockListCardWrapper';

export type Props = CardProps & {
  expiryTime?: string;
  createdDate?: string;
  quantity?: string;
};

const StockItemListCard: React.FC<Props> = ({ expiryTime, createdDate, quantity, ...props }) => {
  const expNumber = Number(expiryTime);
  const addedDate = new Date(createdDate || '');
  const titleVariant = expNumber > 2 ? 'normal' : (expNumber >= 0 ? 'warning' : 'error');
  const stockVariant = expNumber > 2 ? 'tertiary' : (expNumber >= 0 ? 'warning' : 'error');

  return (
    <StockListCardWrapper shadowVariant={stockVariant}  {...props}>
      <Box p="m">
        <Text mb="s" variant={titleVariant}>{stockItemLabelHelper(expNumber || 0)}</Text>
        <Grid>
          <Row>
            <ClockIcon variant={stockVariant} mr="xs" size="small" />
            <Text variant={stockVariant}>{`Added ${properDateHelper(addedDate, false, false)}`}</Text>
          </Row>
          <Row>
            <QuantityIcon variant={stockVariant} mr="xs" size="small" />
            <Text size="h2" variant={stockVariant}>{`${Number(quantity) || 0}g`}</Text>
          </Row>
        </Grid>
      </Box>
    </StockListCardWrapper>
  );
}

export default StockItemListCard;
