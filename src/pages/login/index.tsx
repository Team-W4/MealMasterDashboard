import React, { useContext, useState } from 'react';
import styled from '../../styled';
import Text from '../../components/Texts/Text';
import TextButton from '../../components/Buttons/TextButton';
import Box from '../../components/Containers/Box';
import Input from '../../components/Inputs/Input';
import Back from '../../components/Icons/Back';
import Grid, { Column } from '../../components/Containers/Grid';
import { emailChecker } from '../../utils';
import IconButton from '../../components/Buttons/IconButton';
import { AuthContext } from '../auths';

const ERROR_MSGS = {
  emptyEmail: 'Please enter your email.',
  invalidEmail: 'Please enter a valid email.',
  emailTaken: 'Email is already taken. Try another.',
  passwordTooShort: 'Use 8 characters or more for your password',
  passwordsDontMatch: "Those passwords don't match. Try again.",
};

const LoginView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  padding-left: ${({ theme: { space } }) => space.xxxl};
  padding-right: ${({ theme: { space } }) => space.xxxl};
`;

const LoginIcon = styled(Back)`
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

    if (!emailChecker(email)) {
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
      const passwordMatched =
        password &&
        password.length > 0 &&
        newPassword &&
        newPassword.length > 0 &&
        password === newPassword;

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
      logIn(email, password);
    } else {
      register(email, password);
    }
  };

  return (
    <LoginView>
      <Box position="relative" flexGrow={1} justifyContent="center">
        <Box mb="l">
          <Text size="large" mb="xxxl">
            {registerMode ? 'Sign Up' : 'Log In'}
          </Text>
          <Input
            title="Email"
            error={errors.email || ''}
            value={email}
            onChangeText={e => setEmail(e)}
          />
        </Box>
        <Box mb="l">
          <Input
            secureTextEntry
            title="Password"
            error={errors.password || ''}
            value={password}
            onChangeText={e => setPassword(e)}
          />
        </Box>
        {registerMode && (
          <Box mb="l">
            <Input
              secureTextEntry
              title="Confirm Password"
              error={errors.cfPassword || ''}
              value={newPassword}
              onChangeText={e => setNewPassword(e)}
            />
          </Box>
        )}
        <Grid position="absolute" bottom="30px" right="0">
          <Column justifyContent="center">
            <SwitchModeButton onPress={() => setRegisterMode(!registerMode)}>
              {registerMode
                ? 'Already have an account?'
                : "Don't have an account?"}
            </SwitchModeButton>
          </Column>
          <IconButton size="large" onPress={handleSubmit}>
            <LoginIcon size="large" />
          </IconButton>
        </Grid>
      </Box>
    </LoginView>
  );
};

LoginPage.defaultProps = {};

export default LoginPage;
