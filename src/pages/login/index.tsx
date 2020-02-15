import React, { useState } from 'react';
import styled from '../../styled';
import Text from '../../components/Texts/Text';
import Heading from '../../components/Texts/Heading';
import Box from '../../components/Containers/Box';
import Input from '../../components/Inputs/Input';
import Back from '../../components/Icons/Back';

const LoginButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 50px;
  right: ${({ theme: { space } }) => space.xxl};
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
    if (!registerMode || password === newPassword) {
      //TODO: #API Login API here;
      alert(`${email}+${password}`);
    }
  };

  return (
    <Box height="100%" justifyContent="center" px="xxl">
      <Text size="large" mb="xxxl">
        {registerMode ? 'Sign Up' : 'Log In'}
      </Text>
      <Heading>Email</Heading>
      <Input value={email} onChangeText={e => setEmail(e)} />
      <Heading mt="xxxl">Password</Heading>
      <Input
        secureTextEntry
        value={password}
        onChangeText={e => setPassword(e)}
      />
      {registerMode && (
        <>
          <Heading mt="xxxl">Confirm Password</Heading>
          <Input
            secureTextEntry
            value={newPassword}
            onChangeText={e => setNewPassword(e)}
          />
        </>
      )}
      <LoginButton onPress={handleLogin}>
        <LoginIcon size="large" />
      </LoginButton>
    </Box>
  );
};

LoginPage.defaultProps = {
  registerMode: false,
};

export default LoginPage;
