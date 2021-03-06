import React from 'react';
import styled from '../../../styled';
import { titleHelper } from '../../../utils';
import { Box, Grid, Column } from '../../../components/Containers';
import { Card, CardProps } from '../../../components/Cards';
import { Heading, Subtitle } from '../../../components/Texts';
import { IconButton } from '../../../components/Buttons';
import { AddIcon } from '../../../components/Icons';

const RoundedImage = styled.Image`
  position: absolute;
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
  title?: string;
  subtitle?: string;
  imageUri?: string;
};

const IngredientSearchListCard: React.FC<Props> = ({
 title, subtitle, imageUri, ...props
}) => (
  <Box height="100px" alignItems="center" flexDirection="row">
    <InfoCard p="m" { ...props }>
      <Grid>
        <Column ml="l" justifyContent="center">
          <Subtitle mb="xs">{subtitle}</Subtitle>
          <Heading mb="xs">{titleHelper(title)}</Heading>
          <Subtitle>75kcal • 200g in stock</Subtitle>
        </Column>
        <Box justifyContent="center">
          <IconButton size="small">
            <AddIcon size="small" variant="warning" />
          </IconButton>
        </Box>
      </Grid>
    </InfoCard>
    <RoundedImage
      source={{
            uri:
              'https://tmbidigitalassetsazure.blob.core.windows.net/secure/RMS/attachments/37/1200x1200/Peanut-Butter-and-Jelly-French-Toast_EXPS_BMZ19_526_B12_04_10b.jpg',
          }}
    />
  </Box>
);

export default IngredientSearchListCard;
