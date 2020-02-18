import React from 'react';
import styled from '../../../styled';
import Box from '../../../components/Containers/Box';
import Grid, { Row } from '../../../components/Containers/Grid';
import ClockIcon from '../../../components/Icons/Clock';
import QuantityIcon from '../../../components/Icons/Quantity';
import UtensilsIcon from '../../../components/Icons/Utensils';
import Heading from '../../../components/Texts/Heading';
import Subtitle from '../../../components/Texts/Subtitle';
import StyledCardWrapper, {
  Props as SWProps,
} from '../../../components/Cards/Card/StyledCardWrapper';

const StyledImage = styled.Image`
  height: 100px;
  border-top-right-radius: ${({ theme: { space } }) => space.s};
  border-top-left-radius: ${({ theme: { space } }) => space.s};
`;

export type Props = SWProps & {
  imageURI?: string;
  title?: string;
  tag?: string;
  duration?: string;
  difficulty?: string;
  quantity?: string;
};

const RecipeCard: React.FC<Props> = ({
  imageURI,
  title,
  tag,
  duration,
  difficulty,
  quantity,
  ...props
}) => {
  return (
    <StyledCardWrapper {...props}>
      <StyledImage source={{ uri: imageURI }} />
      <Box px="m" py="s">
        {tag && <Subtitle mb="xs">{tag}</Subtitle>}
        <Heading mb="xs">{title}</Heading>
        <Grid>
          <Row>
            <ClockIcon mr="xs" size="small" variant="tertiary" />
            <Subtitle>{`${duration || 0} min${
              duration > 1 ? 's' : ''
            }`}</Subtitle>
          </Row>
          <Row>
            <QuantityIcon mr="xs" size="small" variant="tertiary" />
            <Subtitle>{difficulty}</Subtitle>
          </Row>
          <Row>
            <UtensilsIcon mr="xs" size="small" variant="tertiary" />
            <Subtitle>{`${quantity || 0} serving${
              quantity > 1 ? 's' : ''
            }`}</Subtitle>
          </Row>
        </Grid>
      </Box>
    </StyledCardWrapper>
  );
};

export default RecipeCard;
