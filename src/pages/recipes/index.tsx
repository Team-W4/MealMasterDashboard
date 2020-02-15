import React from 'react';
import Button from '../../components/Button';
import Box from '../../components/Containers/Box';
import Grid, { Column } from '../../components/Containers/Grid';
import FavoriteButton, {
  Props as FavProps,
} from '../../components/FavoriteButton';
import Label from '../../components/Label';
import ProfileImage from '../../components/ProfileImage';
import Rating from '../../components/Rating';
import Tag from '../../components/Tag';
import Subtitle from '../../components/Texts/Subtitle';
import Text from '../../components/Texts/Text';
import Title from '../../components/Texts/Title';
import Visual from '../../components/Visual';
import styled from '../../styled';

const RecipeDetailsScroll = styled.ScrollView``;

const TagList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: ${({ theme: { space } }) => space.xxl};
  margin-bottom: ${({ theme: { space } }) => space.m};
`;

const SaveRecipeButton = styled(FavoriteButton)`
  position: absolute;
  bottom: -25px;
  right: ${({ theme: { space } }) => space.xxxl};
`;

const CalorieLabel = styled(Label)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

const RecipeButtonBox = styled(Box)`
  box-shadow: 0 -20px 20px ${({ theme: { semanticColors } }) => semanticColors.background};
`;

export type Props = FavProps & {
  id: string | number;
};

const RecipePage: React.FC<Props> = ({ id, favorited }) => (
  <RecipeDetailsScroll>
    <Box mb="xxl">
      <Visual
        source={{
          uri:
            'https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/1513804165/sesame-beet-salad.jpg?itok=3MZd4xPb&1513804974',
        }}
      />
      <SaveRecipeButton favorited={favorited} />
      <CalorieLabel value="650 kcal/serving" />
    </Box>
    <Grid px="xxxl" mb="m">
      <Column>
        <Rating value={4.3} />
        <Title mt="m" mb="xxs">
          Beets Salad
        </Title>
        <Subtitle>{'15 minutes' + ' | ' + '5 ingredients'}</Subtitle>
      </Column>
      <Box justifyContent="center">
        <ProfileImage />
      </Box>
    </Grid>
    <TagList horizontal showsHorizontalScrollIndicator={false}>
      {[
        'quick-bite',
        'healthy',
        'vegeterian',
        'organic',
        'low-carb',
        'keto',
        'light-weight',
      ].map((tag, index) => (
        <Box key={index} alignSelf="flex-start" mr="xs">
          <Tag value={tag} />
        </Box>
      ))}
    </TagList>
    <Text size="h2" px="xxxl">
      Rinse the salad greens, dry in a spinner, and combine in a bowl. Top with
      cooled beets and crumbled goat cheese. Make the dressing by combining the
      orange juice, balsamic vinegar, olive oil, sugar (optional) and salt in a
      small bowl and whisk. Drizzle over the salad just before serving.Rinse the
      salad greens, dry in a spinner, and combine in a bowl. Top with cooled
      beets and crumbled goat cheese. Make the dressing by combining the orange
      juice, balsamic vinegar, olive oil, sugar (optional) and salt in a small
      bowl and whisk. Drizzle over the salad just before serving.
    </Text>
    <RecipeButtonBox position="absolute" width="100%" bottom="0" p="xxxl">
      <Button onPress={() => {}} title="Use this recipe" />
    </RecipeButtonBox>
  </RecipeDetailsScroll>
);

RecipePage.defaultProps = {
  favorited: true,
};

export default RecipePage;
