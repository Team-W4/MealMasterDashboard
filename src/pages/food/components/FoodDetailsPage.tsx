import React from 'react';
import { ProgressCircle } from 'react-native-svg-charts';
import { ScrollView } from 'react-native';
import styled from '../../../styled';
import { titleHelper } from '../../../utils';
import { GenericFood, Tag as TagType, Nutrition } from '../../../constants/dataTypes';
import { Box, Grid, Column } from '../../../components/Containers';
import { Title, Subtitle, Text } from '../../../components/Texts';
import Tag from '../../../components/Tag';
import Visual from '../../../components/Visual';
import colors from '../../../styled/variables/colors';

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
  const carbs = nutrition.find((item) => item.name === "Carbs");
  const protein = nutrition.find((item) => item.name === "Protein");
  const fat = nutrition.find((item) => item.name === "Fat");
  const totalNutrition = nutrition.reduce((acc, item) => item.value + acc, 0);

  const carbsPercent = carbs ? parseInt(((carbs.value / totalNutrition) * 100).toFixed(0), 10) : 0;
  const proteinPercent = protein
    ? parseInt(((protein.value / totalNutrition) * 100).toFixed(0), 10) : 0;
  const fatPercent = fat ? parseInt(((fat.value / totalNutrition) * 100).toFixed(0), 10) : 0;

  return (
    <ScrollView>
      <Box height="100%" width="100%">
        <Visual
          size="large"
          source={{
          uri:
            'data:image/jpeg;base64,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',
        }}
        />
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
          <Column alignItems="center">
            <NutritionChart progress={ carbsPercent / 100 } progressColor={ colors.neoncarrot } />
            <Box position="absolute" top="35px">
              <Title>
                {carbsPercent}
                %
              </Title>
            </Box>
            <Text mt="s">CARBS</Text>
          </Column>
          <Column alignItems="center">
            <NutritionChart progress={ proteinPercent / 100 } progressColor={ colors.neoncarrot } />
            <Box position="absolute" top="35px">
              <Title>
                {proteinPercent}
                %
              </Title>
            </Box>
            <Text mt="s">PROTEINS</Text>
          </Column>
          <Column alignItems="center">
            <NutritionChart progress={ fatPercent / 100 } progressColor={ colors.neoncarrot } />
            <Box position="absolute" top="35px">
              <Title>
                {fatPercent}
                %
              </Title>
            </Box>
            <Text mt="s">FAT</Text>
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
      </Box>
    </ScrollView>
  );
};

export default FoodDetailsPage;
