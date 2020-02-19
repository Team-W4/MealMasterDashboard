import React from 'react';
import styled from '../../../styled';
import StyledCardWrapper, {
  Props as SWProps,
} from '../../../components/Cards/Card/StyledCardWrapper';
import Box from '../../../components/Containers/Box';
import Subtitle from '../../../components/Texts/Subtitle';
import Heading from '../../../components/Texts/Heading';
import Grid, { Row } from '../../../components/Containers/Grid';
import ClockIcon from '../../../components/Icons/Clock';
import QuantityIcon from '../../../components/Icons/Quantity';

const StyledImage = styled.Image`
  height: 75px;
  border-top-right-radius: ${({ theme: { space } }) => space.s};
  border-top-left-radius: ${({ theme: { space } }) => space.s};
`;

export type Props = SWProps & {
  imageURI?: string;
  title?: string;
  tag?: string;
  expiryTime?: string;
  quantity?: string;
};

const expiryLabelHelper = (expiryTime: number): string => {
  const days = Math.abs(expiryTime);
  const plural = Math.abs(expiryTime) > 1 ? 'days' : 'day';
  const suffix = expiryTime < 0 ? 'ago' : 'left';

  return expiryTime === 0 ? 'Today' : `${days} ${plural} ${suffix}`;
};

const StockListCard: React.FC<Props> = ({
  imageURI,
  title,
  tag,
  expiryTime,
  quantity,
  ...props
}) => (
  <StyledCardWrapper {...props}>
    <StyledImage source={{ uri: imageURI }} />
    <Box px="m" py="s">
      {tag && <Subtitle mb="xs">{tag}</Subtitle>}
      <Heading mb="xs">{title}</Heading>
      <Grid>
        <Row>
          <ClockIcon mr="xs" size="small" variant="tertiary" />
          <Subtitle>{expiryLabelHelper(Number(expiryTime))}</Subtitle>
        </Row>
        <Row>
          <QuantityIcon mr="xs" size="small" variant="tertiary" />
          <Subtitle>{`${quantity || 0}g`}</Subtitle>
        </Row>
      </Grid>
    </Box>
  </StyledCardWrapper>
);

export default StockListCard;
