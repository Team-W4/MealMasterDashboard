import React from 'react';
import Box from '../../Containers/Box';
import Grid, { Row } from '../../Containers/Grid';
import ClockIcon from '../../Icons/Clock';
import QuantityIcon from '../../Icons/Quantity';
import UtensilsIcon from '../../Icons/Utensils';
import Heading from '../../Texts/Heading';
import Subtitle from '../../Texts/Subtitle';
import StyledCardWrapper from '../Card/StyledCardWrapper';
import StyledImage from './StyledImage';

export type Props = {
  imageURI?: string;
  title?: string;
  tag?: string;
  duration?: string;
  difficulty?: string;
  quantity?: string;
};

const ImageCard: React.FC<Props> = ({
  imageURI,
  title,
  tag,
  duration,
  difficulty,
  quantity,
}) => {
  return (
    <StyledCardWrapper>
      <StyledImage source={{ uri: imageURI }} />
      <Box px="m" py="s">
        {tag && <Subtitle mb="xs">{tag}</Subtitle>}
        <Heading mb="xs">{title}</Heading>
        <Grid>
          <Row>
            <ClockIcon mr="xs" size="small" variant="tertiary" />
            <Subtitle>{duration}</Subtitle>
          </Row>
          <Row>
            <QuantityIcon mr="xs" size="small" variant="tertiary" />
            <Subtitle>{difficulty}</Subtitle>
          </Row>
          <Row>
            <UtensilsIcon mr="xs" size="small" variant="tertiary" />
            <Subtitle>{quantity}</Subtitle>
          </Row>
        </Grid>
      </Box>
    </StyledCardWrapper>
  );
};

export default ImageCard;
