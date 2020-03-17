import React from 'react';
import styled from '../../../styled';
import { Column } from '../../../components/Containers';
import { Card, CardProps } from '../../../components/Cards';
import { Text, Heading } from '../../../components/Texts';
import UserDetailCategories from './UserDetailCategories';

const DetailCard = styled(Card)`
  aspect-ratio: 1;
`;

export type Props = CardProps & {
  title: string;
  tag: string;
  icon: JSX.Element;
};

const UserDetailsCard: React.FC<Props> = ({
 title, tag, icon, ...props
}) => (
  <DetailCard { ...props } px="m" pb="s">
    <Column>
      <Column alignItems="center" justifyContent="center">
        <UserDetailCategories>{icon}</UserDetailCategories>
      </Column>
      <Text mb="xxs" size="h2" variant="inverted">
        {tag}
      </Text>
      <Heading>{title}</Heading>
    </Column>
  </DetailCard>
);

export default UserDetailsCard;
