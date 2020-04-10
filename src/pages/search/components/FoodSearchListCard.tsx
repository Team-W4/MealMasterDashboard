import React from 'react';
import styled from '../../../styled';
import { titleHelper } from '../../../utils';
import { GenericFood } from '../../../constants/dataTypes';
import { Grid, Column } from '../../../components/Containers';
import { Card, CardProps } from '../../../components/Cards';
import { Heading, Subtitle } from '../../../components/Texts';

const FOOD_PLACEHOLDER = 'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Peanut-Butter-and-Jelly-French-Toast_EXPS_BMZ19_526_B12_04_10b.jpg';

const RoundedImage = styled.Image`
  position: absolute;
  elevation: 11;
  width: 100px;
  height: 75px;
  border-radius: 10px;
`;

const InfoCard = styled(Card)`
  height: 100px;
  flex: 1;
  margin-left: 45px;
  padding-left: 50px;
`;

export type Props = CardProps & {
  data: GenericFood;
  rightOverlay?: JSX.Element;
};

const FoodSearchListCard: React.FC<Props> = ({
  data: { name, image, tags }, rightOverlay, onPress, ...props
}) => (
  <Card
    alignItems="center"
    flexDirection="row"
    variant="transparent"
    onPress={ onPress }
  >
    <InfoCard p="m" { ...props }>
      <Grid>
        <Column ml="l" justifyContent="center">
          {tags && tags.length > 0 ? <Subtitle mb="xs">{tags[0]}</Subtitle> : <></>}
          {name ? <Heading mb="xs">{titleHelper(name)}</Heading> : <></>}
          <Subtitle>75kcal • 200g in stock</Subtitle>
        </Column>
        {rightOverlay}
      </Grid>
    </InfoCard>
    <RoundedImage
      source={{ uri: image || FOOD_PLACEHOLDER }}
    />
  </Card>
);

export default FoodSearchListCard;
