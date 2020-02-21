import React from 'react';
import styled from '../../../styled';
import { Column } from '../../../components/Containers/Grid';
import Box from '../../../components/Containers/Box';
import Text from '../../../components/Texts/Text';
import Heading from '../../../components/Texts/Heading';
import Card, { Props as CardProps } from '../../../components/Cards/Card';
import UserDetailCategories from './UserDetailCategories';

const DetailCard = styled(Card)`
  aspect-ratio: 1;
`;

export type Props = CardProps & {
  icon?: JSX.Element;
};

const UserDetailsCard: React.FC<Props> = ({ title, tag, icon, ...props }) => (
  <DetailCard {...props} px="m" pb="s">
    <Column>
      <Column alignItems="center" justifyContent="center">
      <UserDetailCategories>{icon}</UserDetailCategories>
      </Column>
      <Text mb="xxs" size="h2" variant="inverted">{tag}</Text>
      <Heading>{title}</Heading>
    </Column>
  </DetailCard>
);

export default UserDetailsCard;
