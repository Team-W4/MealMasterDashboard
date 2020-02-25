import { createContext } from 'react';

const AuthContext = createContext<{
  logOut:() => void;
  logIn: (email?: string, password?: string) => void;
  register: (email?: string, password?: string) => void;
}>({
  logIn: () => {},
  logOut: () => {},
  register: () => {},
});

export default AuthContext;
