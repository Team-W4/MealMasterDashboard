import React from 'react';
import styled from '../../../styled';
import { titleHelper } from '../../../utils';
import { Recipe } from '../../../constants/dataTypes';
import { Box, Grid, Row } from '../../../components/Containers';
import { Card, CardProps } from '../../../components/Cards';
import { Heading, Subtitle, Text } from '../../../components/Texts';
import { ClockIcon, QuantityIcon, UtensilsIcon } from '../../../components/Icons';
import Rating from '../../../components/Rating';

const RecipeRecImage = styled.Image`
  width: 350px;
  height: 450px;
  border-radius: 10px;
`;

export type Props = CardProps & {
  data: Recipe;
};

const RecipeRecCard: React.FC<Props> = ({
  data: {
    name,
    tags,
    cookTime,
    image,
    yield: quantity,
  },
  ...props
}) => (
  <Card variant="transparent" { ...props }>
    <RecipeRecImage
      source={{
        uri: image || '',
      }}
    />
    <Box width="100%" height="100px" alignItems="center">
      <Box position="absolute" top="-80px" width="320px">
        <Card p="m">
          <Subtitle mb="xs">{tags && tags[0]}</Subtitle>
          <Heading mb="s">{titleHelper(name)}</Heading>
          <Grid mb="m" alignItems="center">
            <Row>
              <Rating value={ 4.3 } />
            </Row>
            <Row justifyContent="flex-end">
              <Text variant="warning">670 kcal / serving</Text>
            </Row>
          </Grid>
          <Grid>
            <Row>
              <ClockIcon mr="xs" size="small" variant="tertiary" />
              <Subtitle>
                {`${cookTime || 0} min${
                  Number(1) > 1 ? 's' : ''
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
                  Number(3) > 1 ? 's' : ''
                }`}
              </Subtitle>
            </Row>
          </Grid>
        </Card>
      </Box>
    </Box>
  </Card>
);

export default RecipeRecCard;
