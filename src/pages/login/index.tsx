import React, { useState } from 'react';
import styled from '../../styled';
import Text from '../../components/Texts/Text';
import Box from '../../components/Containers/Box';
import Input from '../../components/Inputs/Input';
import Back from '../../components/Icons/Back';

const LoginView = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  padding-left: ${({ theme: { space } }) => space.xxxl};
  padding-right: ${({ theme: { space } }) => space.xxxl};
`;

const LoginButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 30px;
  right: 0;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: { colors } }) => colors.silver};
`;

const LoginIcon = styled(Back)`
  transform: rotate(180deg);
`;

type Props = {
  registerMode?: boolean;
};

const LoginPage: React.FC<Props> = ({ registerMode }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleLogin = () => {
    if (
      password &&
      password.length > 0 &&
      (!registerMode || password === newPassword)
    ) {
      //TODO: #API Login API here;
      alert(`${email}+${password}`);
    }
  };

  return (
    <LoginView behavior="padding" enabled>
      <Box position="relative" flexGrow={1} justifyContent="center">
        <Box mb="l">
          <Text size="large" mb="xxxl">
            {registerMode ? 'Sign Up' : 'Log In'}
          </Text>
          <Input
            mb="l"
            title="Email"
            value={email}
            onChangeText={e => setEmail(e)}
          />
        </Box>
        <Box mb="l">
          <Input
            secureTextEntry
            title="Password"
            value={password}
            onChangeText={e => setPassword(e)}
          />
        </Box>
        {registerMode && (
          <Box mb="l">
            <Input
              secureTextEntry
              title="Confirm Password"
              value={newPassword}
              onChangeText={e => setNewPassword(e)}
            />
          </Box>
        )}
        <LoginButton onPress={handleLogin}>
          <LoginIcon size="large" />
        </LoginButton>
      </Box>
    </LoginView>
  );
};

LoginPage.defaultProps = {
  registerMode: true,
};

export default LoginPage;
