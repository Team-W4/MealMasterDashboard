/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from '../../../styled';
import { titleHelper, dateDifferenceHelper, dateParser } from '../../../utils';
import { expiryLabelHelper } from '../expiryHelper';
import { Stock } from '../../../constants/dataTypes';
import { CardProps } from '../../../components/Cards';
import { Box, Grid, Row } from '../../../components/Containers';
import { Text, Heading, Subtitle } from '../../../components/Texts';
import { ClockIcon, QuantityIcon } from '../../../components/Icons';
import StockListCardWrapper from './StockListCardWrapper';

const STOCK_PLACEHOLDER = 'https://www.chiceats.com/sites/default/files/styles/image_1024x768/public/recipe/photo/homemade-pasta-recipe-1080x810@2x.jpg';

const StyledImage = styled.Image`
  height: 75px;
  border-top-right-radius: ${({ theme: { space } }) => space.s};
  border-top-left-radius: ${({ theme: { space } }) => space.s};
`;

export type Props = CardProps & {
  data: Stock;
};

const StockListCard: React.FC<Props> = ({
  data: {
    totalQuantity,
    foodName,
    nextExpiration,
    tags,
    food: { image },
  },
  ...props
}) => {
  const expDate = dateParser(nextExpiration);
  const today = new Date();

  const expNumber = dateDifferenceHelper(expDate, today);
  const titleVariant = expNumber > 2 ? 'normal' : expNumber >= 0 ? 'warning' : 'error';
  const stockVariant = expNumber > 2 ? 'tertiary' : expNumber >= 0 ? 'warning' : 'error';

  return (
    <StockListCardWrapper shadowVariant={ stockVariant } { ...props }>
      <StyledImage source={{ uri: image || STOCK_PLACEHOLDER }} />
      <Box p="m">
        {tags && tags.length > 0 ? (
          <Subtitle mb="xs">{tags[0].name || ''}</Subtitle>
        ) : (
          <></>
        )}
        {foodName && (
          <Heading mb="s" variant={ titleVariant }>
            {titleHelper(foodName)}
          </Heading>
        )}
        <Grid>
          <Row>
            <ClockIcon variant={ stockVariant } mr="xs" size="small" />
            <Text variant={ stockVariant }>{expiryLabelHelper(expNumber)}</Text>
          </Row>
          <Row>
            <QuantityIcon variant={ stockVariant } mr="xs" size="small" />
            <Text size="h2" variant={ stockVariant }>
              {`${totalQuantity || 0} servings`}
            </Text>
          </Row>
        </Grid>
      </Box>
    </StockListCardWrapper>
  );
};

export default StockListCard;
