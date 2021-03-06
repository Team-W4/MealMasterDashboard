import React from 'react';
import styled from '../../../styled';
import { titleHelper } from '../../../utils';
import { Box, Grid, Row } from '../../../components/Containers';
import { Card } from '../../../components/Cards';
import { Heading, Subtitle, Text } from '../../../components/Texts';
import Rating from '../../../components/Rating';
import { ClockIcon, QuantityIcon, UtensilsIcon } from '../../../components/Icons';

const RecipeRecImage = styled.Image`
  width: 350px;
  height: 450px;
  border-radius: 10px;
`;

const RecipeRecCard: React.FC = () => (
  <Box>
    <RecipeRecImage
      source={{
        uri: 'https://www.sugarandsoul.co/wp-content/uploads/2017/12/Apple-Granola-0846.jpg',
      }}
    />
    <Box width="100%" height="100px" alignItems="center">
      <Box position="absolute" top="-80px" width="320px">
        <Card p="m">
          <Subtitle mb="xs">HEALTHY</Subtitle>
          <Heading mb="s">{titleHelper('granola bowl & peanut butter')}</Heading>
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
                {`${1 || 0} min${
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
                {`${3 || 0} serving${
                  Number(3) > 1 ? 's' : ''
                }`}
              </Subtitle>
            </Row>
          </Grid>
        </Card>
      </Box>
    </Box>
  </Box>
);

export default RecipeRecCard;
