/* eslint-disable no-nested-ternary */
import React from 'react';
import { properDateHelper, dateDifferenceHelper, dateParser } from '../../../utils';
import { stockItemLabelHelper } from '../expiryHelper';
import Box from '../../../components/Containers/Box';
import Grid, { Row } from '../../../components/Containers/Grid';
import Text from '../../../components/Texts/Text';
import ClockIcon from '../../../components/Icons/Clock';
import QuantityIcon from '../../../components/Icons/Quantity';
import StockListCardWrapper, { Props as SWProps } from './StockListCardWrapper';

export type Props = SWProps & {
  expirationDate?: string;
  createdDate?: string;
  quantity?: number;
};

const StockItemListCard: React.FC<Props> = ({
  expirationDate,
  createdDate,
  quantity,
  ...props
}) => {
  const expDate = dateParser(expirationDate);
  const today = new Date();

  const expNumber = dateDifferenceHelper(expDate, today);
  const addedDate = dateParser(createdDate);
  const titleVariant = expNumber > 2 ? 'normal' : expNumber >= 0 ? 'warning' : 'error';
  const stockVariant = expNumber > 2 ? 'tertiary' : expNumber >= 0 ? 'warning' : 'error';

  return (
    <StockListCardWrapper shadowVariant={ stockVariant } { ...props }>
      <Box p="m">
        <Text mb="s" variant={ titleVariant }>
          {stockItemLabelHelper(expNumber || 0)}
        </Text>
        <Grid>
          <Row>
            <ClockIcon variant={ stockVariant } mr="xs" size="small" />
            <Text variant={ stockVariant }>
              {`Added ${properDateHelper(
              addedDate,
              false,
              false,
            )}`}
            </Text>
          </Row>
          <Row>
            <QuantityIcon variant={ stockVariant } mr="xs" size="small" />
            <Text size="h2" variant={ stockVariant }>
              {`${Number(quantity)
              || 0} servings`}
            </Text>
          </Row>
        </Grid>
      </Box>
    </StockListCardWrapper>
  );
};

export default StockItemListCard;
