import React, { useContext } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthContext, AuthStackParamList } from '../../auths';
import styled from '../../../styled';
import Box from '../../../components/Containers/Box';
import Grid, { Column } from '../../../components/Containers/Grid';
import Text from '../../../components/Texts/Text';
import Subtitle from '../../../components/Texts/Subtitle';
import TextButton from '../../../components/Buttons/TextButton';
import ProfileImage from '../../../components/ProfileImage';
import UserDetailsCard from './UserDetailsCard';
import StockIcon from '../../../components/Icons/Stock';
import QuantityIcon from '../../../components/Icons/Quantity';
import SavedIcon from '../../../components/Icons/Saved';
import UtensilsIcon from '../../../components/Icons/Utensils';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export type Props = {
  navigation: StackNavigationProp<AuthStackParamList, 'UserDetails'>;
  profile: {
    firstName: string;
    lastName: string;
    email: string;
    createDate: string;
  };
};

const UserView = styled.View`
  flex: 1;
  align-items: center;
`;

const UserProfile = styled(ProfileImage)`
  width: 150px;
  height: 150px;
`;

const EditProfileButton = styled(TextButton)`
  text-decoration: underline;
`;

const UserProfilePage: React.FC<Props> = ({
  navigation,
  profile: { firstName, lastName, email, createDate },
}) => {
  const { logOut } = useContext(AuthContext);

  return (
    <UserView>
      <Box alignItems="center" justifyContent="center" pt="xxxl">
        <UserProfile rounded />
        <Text mt="m" size="large">{`${firstName || 'Meal'} ${lastName || 'Master'}`}</Text>
        <Subtitle mb="m">{email || ''}</Subtitle>
        <Text>{`${0 || 0} Followers | ${0 || 0} Following`}</Text>
        <Box mt="l">
          <EditProfileButton onPress={() => navigation.navigate('UserEdit')}>EDIT YOUR PROFILE</EditProfileButton>
        </Box>
      </Box>
      <Column alignItems="center" justifyContent="center" >
        <Grid width="100%" px="m">
          <Column pr="xs" alignItems="center">
            <UserDetailsCard mb="l" variant="warning" title="Stocks" tag={`${13} items`} icon={<StockIcon />} />
            <UserDetailsCard variant="warning" title="Food waste" tag={`${2000}g of food`} icon={<QuantityIcon />}/>
          </Column>
          <Column pl="xs" alignItems="center">
            <UserDetailsCard mb="l" variant="warning" title="Recipes" tag={`${6} recipes`} icon={<SavedIcon />} />
            <UserDetailsCard variant="warning" title="More" tag={`${2} things`} icon={<UtensilsIcon />}/>
          </Column>
        </Grid>
      </Column>
      <Grid mb="xxxl" alignItems="center">
        <EditProfileButton onPress={() => logOut()}>Log out</EditProfileButton>
      </Grid>
    </UserView>
  );
}

export default UserProfilePage;