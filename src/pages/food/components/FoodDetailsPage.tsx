import React from 'react';
import { ProgressCircle } from 'react-native-svg-charts';
import { useSafeArea } from 'react-native-safe-area-context';
import styled from '../../../styled';
import { titleHelper } from '../../../utils';
import { GenericFood, Tag as TagType, Nutrition } from '../../../constants/dataTypes';
import { Box, Grid, Column } from '../../../components/Containers';
import { Title, Subtitle, Text } from '../../../components/Texts';
import Tag from '../../../components/Tag';
import Visual from '../../../components/Visual';
import colors from '../../../styled/variables/colors';
import { DrawerCard } from '../../../components/Cards';
import { Button } from '../../../components/Buttons';

const TagList = styled.ScrollView`
  flex-grow: 0;
  flex-shrink: 0;
  padding-left: ${({ theme: { space } }) => space.l};
  margin-bottom: ${({ theme: { space } }) => space.xl};
`;

const NutritionChart = styled(ProgressCircle)`
  height: 100px;
`;

export type Props = {
  onBack?: () => void;
  onAdd?: () => void;
  foodDetails: GenericFood;
  nutrition: Array<Nutrition>;
};

const FoodDetailsPage: React.FC<Props> = ({
  foodDetails: {
    name, tags,
  },
  nutrition,
}) => {
  const carbs = nutrition ? nutrition.find((item) => item.name === "Carbs") : null;
  const protein = nutrition ? nutrition.find((item) => item.name === "Protein") : null;
  const fat = nutrition ? nutrition.find((item) => item.name === "Fat") : null;
  const totalNutrition = nutrition ? nutrition.reduce((acc, item) => item.value + acc, 0) : null;

  const carbsPercent = carbs && totalNutrition
    ? parseInt(((carbs.value / totalNutrition) * 100).toFixed(0), 10) : 0;
  const proteinPercent = protein && totalNutrition
    ? parseInt(((protein.value / totalNutrition) * 100).toFixed(0), 10) : 0;
  const fatPercent = fat && totalNutrition
    ? parseInt(((fat.value / totalNutrition) * 100).toFixed(0), 10) : 0;

  const { bottom } = useSafeArea();

  return (
    <Box height="100%" width="100%">
      <Visual
        size="large"
        source={{
        uri:
        'https://www.chiceats.com/sites/default/files/styles/image_1024x768/public/recipe/photo/homemade-pasta-recipe-1080x810@2x.jpg',
      }}
      />
      <DrawerCard topOffset={ 300 }>
        <Box px="l" mt="s">
          <Subtitle mb="s">PRODUCE</Subtitle>
          <Title mb="s">{titleHelper(name)}</Title>
        </Box>
        <TagList horizontal showsHorizontalScrollIndicator={ false }>
          {tags && tags.map((tag: TagType) => (
            <Box key={ tag.id } alignSelf="flex-start" mr="xs">
              <Tag value={ tag.name } />
            </Box>
      ))}
        </TagList>
        <Grid>
          <Column>
            <NutritionChart progress={ carbsPercent / 100 } progressColor={ colors.neoncarrot } />
            <Box alignItems="center">
              <Box position="absolute" top="-65px">
                <Title>
                  {carbsPercent}
                  %
                </Title>
              </Box>
              <Text mt="s">CARBS</Text>
            </Box>
          </Column>
          <Column>
            <NutritionChart progress={ proteinPercent / 100 } progressColor={ colors.neoncarrot } />
            <Box alignItems="center">
              <Box position="absolute" top="-65px">
                <Title>
                  {proteinPercent}
                  %
                </Title>
              </Box>
              <Text mt="s">PROTEINS</Text>
            </Box>
          </Column>
          <Column>
            <NutritionChart progress={ fatPercent / 100 } progressColor={ colors.neoncarrot } />
            <Box alignItems="center">
              <Box position="absolute" top="-65px">
                <Title>
                  {fatPercent}
                  %
                </Title>
              </Box>
              <Text mt="s">FAT</Text>
            </Box>
          </Column>
        </Grid>
        <Box mt="xxl">
          <Grid ml="xl" mr="xl">
            <Column alignItems="flex-start">
              {nutrition.map((item) => (
                <Text key={ item.name } size="h1" mb="l">{item.name}</Text>
          ))}
            </Column>
            <Column alignItems="flex-end">
              {nutrition.map((item) => (
                <Text key={ item.name } size="h1" mb="l">
                  {item.value}
                  g
                </Text>
          ))}
            </Column>
          </Grid>
        </Box>
      </DrawerCard>
      <Grid position="absolute" left="0" right="0" bottom={ bottom > 0 ? bottom : 'xxxl' } px="l" justifyContent="center">
        <Button variant="warning" title="Add to stock" />
      </Grid>
    </Box>
  );
};

export default FoodDetailsPage;
