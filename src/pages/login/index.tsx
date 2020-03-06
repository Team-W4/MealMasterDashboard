import React, { useContext, useState } from 'react';
import styled from '../../styled';
import { emailChecker } from '../../utils';
import AuthContext from '../auths/AuthContext';
import { Box, Grid, Column } from '../../components/Containers';
import { Text } from '../../components/Texts';
import { TextButton, IconButton } from '../../components/Buttons';
import { Input } from '../../components/Inputs';
import { BackIcon } from '../../components/Icons';
import ScrollList from '../../components/ScrollList';

const ERROR_MSGS = {
  emptyEmail: 'Please enter your email.',
  invalidEmail: 'Please enter a valid email.',
  emailTaken: 'Email is already taken. Try another.',
  passwordTooShort: 'Use 8 characters or more for your password',
  passwordsDontMatch: "Those passwords don't match. Try again.",
};

const LoginView = styled(ScrollList)`
  padding-left: ${({ theme: { space } }) => space.xxxl};
  padding-right: ${({ theme: { space } }) => space.xxxl};
`;

const LoginIcon = styled(BackIcon)`
  transform: rotate(180deg);
`;

const SwitchModeButton = styled(TextButton)`
  text-decoration: underline;
`;

const errorInitialState = {
  email: '',
  password: '',
  cfPassword: '',
};

const LoginPage: React.FC = () => {
  const { logIn, register } = useContext(AuthContext);
  const [registerMode, setRegisterMode] = useState(false);
  const [errors, setErrors] = useState(errorInitialState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSubmit = () => {
    if (!email || email.length === 0) {
      setErrors({ ...errorInitialState, email: ERROR_MSGS.emptyEmail });
      return;
    }

    if (!emailChecker(email.trim())) {
      setErrors({ ...errorInitialState, email: ERROR_MSGS.invalidEmail });
      return;
    }

    if (!password || password.length < 8) {
      setErrors({
        ...errorInitialState,
        password: ERROR_MSGS.passwordTooShort,
      });
      return;
    }

    if (registerMode) {
      const passwordMatched = password
        && password.length > 0
        && newPassword
        && newPassword.length > 0
        && password === newPassword;

      if (!passwordMatched) {
        setErrors({
          ...errorInitialState,
          cfPassword: ERROR_MSGS.passwordsDontMatch,
        });
        return;
      }
    }

    setErrors({ ...errorInitialState });
    if (!registerMode) {
      logIn(email.trim(), password.trim());
    } else {
      register(email.trim(), password.trim());
    }
  };

  return (
    <LoginView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
      <Box mb="l">
        <Text size="large" mb="xxxl">
          {registerMode ? 'Sign Up' : 'Log In'}
        </Text>
        <Input
          title="Email"
          error={ errors.email || '' }
          value={ email }
          onChangeText={ (e) => setEmail(e) }
        />
      </Box>
      <Box mb="l">
        <Input
          secureTextEntry
          title="Password"
          error={ errors.password || '' }
          value={ password }
          onChangeText={ (e) => setPassword(e) }
        />
      </Box>
      {registerMode && (
        <Box mb="l">
          <Input
            secureTextEntry
            title="Confirm Password"
            error={ errors.cfPassword || '' }
            value={ newPassword }
            onChangeText={ (e) => setNewPassword(e) }
          />
        </Box>
      )}
      <Grid mb="l" mr="s">
        <Column justifyContent="center">
          <SwitchModeButton onPress={ () => setRegisterMode(!registerMode) }>
            {registerMode
              ? 'Already have an account?'
              : "Don't have an account?"}
          </SwitchModeButton>
        </Column>
        <IconButton size="large" onPress={ handleSubmit }>
          <LoginIcon size="large" />
        </IconButton>
      </Grid>
    </LoginView>
  );
};

LoginPage.defaultProps = {};

export default LoginPage;
