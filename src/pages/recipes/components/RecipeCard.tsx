import React from 'react';
import styled from '../../../styled';
import { Recipe } from '../../../constants/dataTypes';
import { titleHelper } from '../../../utils';
import { Box, Grid, Row } from '../../../components/Containers';
import { Card, CardProps } from '../../../components/Cards';
import { Heading, Subtitle } from '../../../components/Texts';
import { ClockIcon, QuantityIcon, UtensilsIcon } from '../../../components/Icons';

const StyledImage = styled.Image`
  height: 100px;
  border-top-right-radius: ${({ theme: { space } }) => space.s};
  border-top-left-radius: ${({ theme: { space } }) => space.s};
`;

export type Props = CardProps & {
  data: Recipe;
};

const RecipeCard: React.FC<Props> = ({
  data: {
    name,
    tags,
    cookTime,
    yield: quantity,
  },
  ...props
}) => (
  <Card { ...props }>
    <StyledImage source={{ uri: 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Peanut-Butter-and-Jelly-French-Toast_EXPS_BMZ19_526_B12_04_10b.jpg' }} />
    <Box px="m" py="s">
      {tags && tags.length > 0 ? (
        <Subtitle mb="xs">{tags[0].name || ''}</Subtitle>
      ) : (
        <></>
      )}
      <Heading mb="xs">{titleHelper(name)}</Heading>
      <Grid>
        <Row>
          <ClockIcon mr="xs" size="small" variant="tertiary" />
          <Subtitle>
            {`${cookTime || 0} min${
              Number(cookTime) > 1 ? 's' : ''
            }`}
          </Subtitle>
        </Row>
        <Row>
          <QuantityIcon mr="xs" size="small" variant="tertiary" />
          <Subtitle>Easy</Subtitle>
        </Row>
        <Row>
          <UtensilsIcon mr="xs" size="small" variant="tertiary" />
          <Subtitle>
            {`${quantity || 0} serving${
              Number(quantity) > 1 ? 's' : ''
            }`}
          </Subtitle>
        </Row>
      </Grid>
    </Box>
  </Card>
  );

export default RecipeCard;
