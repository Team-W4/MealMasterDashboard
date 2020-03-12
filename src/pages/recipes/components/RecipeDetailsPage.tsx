import React from 'react';
import styled from '../../../styled';
import { RecipeDetails, Tag as TagType } from '../../../constants/dataTypes';
import { titleHelper } from '../../../utils';
import { Box, Grid, Column } from '../../../components/Containers';
import { DrawerCard } from '../../../components/Cards';
import { Button, IconButton } from '../../../components/Buttons';
import { Title, Subtitle, Paragraph } from '../../../components/Texts';
import { FavoriteIcon } from '../../../components/Icons';
import ProfileImage from '../../../components/ProfileImage';
import Rating from '../../../components/Rating';
import Tag from '../../../components/Tag';
import Visual from '../../../components/Visual';
import Label from '../../../components/Label';

const TagList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: ${({ theme: { space } }) => space.xxl};
  margin-bottom: ${({ theme: { space } }) => space.m};
`;

const CalorieLabel = styled(Label)`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export type Props = {
  onFavorite?: () => void;
  onShare?: () => void;
  onBack: () => void;
  recipeDetails: RecipeDetails;
};

const RecipeDetailsPage: React.FC<Props> = ({
  onFavorite,
  recipeDetails: {
    // rating,
    name,
    cookTime,
    ingredients,
    tags,
    instructions,
  },
}) => (
  <Box height="100%" width="100%">
    <Box mb="xxl">
      <Visual
        size="epic"
        source={{
          uri:
            'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Peanut-Butter-and-Jelly-French-Toast_EXPS_BMZ19_526_B12_04_10b.jpg',
        }}
      />
      <CalorieLabel value="650 kcal/serving" />
    </Box>
    <DrawerCard
      topRightOverlay={ (
        <IconButton onPress={ onFavorite }>
          <FavoriteIcon variant="warning" />
        </IconButton>
      ) }
    >
      <Grid px="xxl" mb="m">
        <Column>
          <Rating value={ 4.3 } />
          <Title mt="m" mb="s">
            {titleHelper(name)}
          </Title>
          <Subtitle>
            {`${cookTime || 0} minutes | ${(ingredients
            && ingredients.length)
            || 0} ingredients`}
          </Subtitle>
        </Column>
        <Box ml="s" justifyContent="center">
          <ProfileImage />
        </Box>
      </Grid>
      {tags && tags.length > 0 && (
        <TagList horizontal showsHorizontalScrollIndicator={ false }>
          {tags.map((tag: TagType) => (
            <Box key={ tag.id } alignSelf="flex-start" mr="xs">
              <Tag value={ tag.name } />
            </Box>
          ))}
          <Box width="48px" />
        </TagList>
      )}
      <Paragraph px="xxl">{instructions}</Paragraph>
      <Box height="58px" />
    </DrawerCard>
    <Box
      position="absolute"
      left="0"
      right="0"
      bottom="xxxl"
      px="xl"
      alignItems="center"
    >
      <Button variant="warning" title="Use this recipe" />
    </Box>
  </Box>
);

RecipeDetailsPage.defaultProps = {};

export default RecipeDetailsPage;
