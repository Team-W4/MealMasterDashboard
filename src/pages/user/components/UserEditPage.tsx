import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../../auths/AuthStack';
import styled from '../../../styled';
import Box from '../../../components/Containers/Box';
import { Column } from '../../../components/Containers/Grid';
import ProfileImage from '../../../components/ProfileImage';
import Input from '../../../components/Inputs/Input';
import Button from '../../../components/Buttons/Button';
import Subtitle from '../../../components/Texts/Subtitle';

export type Props = {
  navigation: StackNavigationProp<AuthStackParamList, 'UserEdit'>;
  updateProfile: (profile: any) => void;
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
  justify-content: center;
`;

const UserProfile = styled(ProfileImage)`
  width: 200px;
  height: 200px;
`;

const AboutInput = styled(Input)`
  height: 200px;
`;

const AboutTextLength = styled(Subtitle)`
  position: absolute;
  right: ${({ theme: { space } }) => space.s};
  bottom: ${({ theme: { space } }) => space.s};
`;

const errorInitialState = {
  email: '',
};

const ABOUT_MAX_LENGTH = 200;

const UserEditPage: React.FC<Props> = ({
  navigation,
  updateProfile,
  profile,
}) => {
  const {
    firstName: firstNameProps,
    lastName: lastNameProps,
    email: emailProps,
  } = profile;
  const [email, setEmail] = useState(emailProps);
  const [firstName, setFirstName] = useState(firstNameProps);
  const [lastName, setLastName] = useState(lastNameProps);
  const [about, setAbout] = useState('');
  const [errors] = useState(errorInitialState);

  return (
    <UserView>
      <UserProfile rounded />
      <Column mt="xxxl" px="xxxl" width="100%">
        <Column>
          <Box mb="l">
            <Input
              title="First Name"
              value={ firstName }
              onChangeText={ (e) => setFirstName(e) }
            />
          </Box>
          <Box mb="l">
            <Input
              title="Last Name"
              value={ lastName }
              onChangeText={ (e) => setLastName(e) }
            />
          </Box>
          <Box mb="l">
            <Input
              title="Email"
              error={ errors.email || '' }
              value={ email }
              onChangeText={ (e) => setEmail(e) }
            />
          </Box>
          <Box position="relative" mb="l">
            <AboutInput
              multiline
              title="About Me"
              placeholder="We're making you a cookie. Get some milk!"
              maxLength={ ABOUT_MAX_LENGTH }
              value={ about }
              onChangeText={ (e) => setAbout(e) }
            />
            <AboutTextLength>
              {`${about.length
              || 0}/${ABOUT_MAX_LENGTH}`}
            </AboutTextLength>
          </Box>
        </Column>
        <Box mb="xxxl">
          <Button
            title="Save"
            variant="warning"
            onPress={ () => {
              navigation.pop(1);
              updateProfile({
                ...profile,
                firstName,
                lastName,
                email,
              });
            } }
          />
        </Box>
      </Column>
    </UserView>
  );
};

export default UserEditPage;
