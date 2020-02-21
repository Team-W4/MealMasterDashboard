import React, { createContext, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { userActions } from '../../actions';
import LoadingPage from '../loading';
import LoginPage from '../login';
import { RecipeDetailsPage } from '../recipes';
import { StockDetailsPage } from '../stock';
import UserDetailsPage, { UserEditPage } from '../user';
import HomeNavigator from '../navigator/HomeNavigator';
import * as navigator from '../navigator/Navigator';

export type AuthStackParamList = {
  Login: undefined;
  Loading: undefined;
  Home: undefined;
  RecipeDetails: { recipeId: number };
  StockDetails: { stockId: number };
  UserDetails: undefined;
  UserEdit: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthContext = createContext({
  logIn: () => {},
  logOut: () => {},
  register: () => {},
});

export type Props = {
  logIn: (email?: string, password?: string) => void;
  logOut: () => void;
  register: (email?: string, password?: string) => void;
  restoreToken: (token: string | null) => void;
  userToken: string | null;
  isLoading: boolean;
  isLoggedOut: boolean;
};

const AuthProvider: React.FC<Props> = ({
  logIn,
  logOut,
  register,
  restoreToken,
  userToken,
  isLoading,
  isLoggedOut,
}) => {
  useEffect(() => {
    const retoreTokenAsync = async () => {
      let token = null;

      try {
        token = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log('Failed to retrieve user token');
      }

      restoreToken(token);
    };

    retoreTokenAsync();
  });

  const authContext = useMemo(() => ({ logIn, logOut, register }), [
    logIn,
    logOut,
    register,
  ]);

  if (isLoading) {
    navigator.navigate('Loading');
  } else {
    navigator.navigate(userToken ? 'Home' : 'Login');
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="Login"
          component={LoginPage}
          options={{ animationTypeForReplace: isLoggedOut ? 'pop' : 'push' }}
        />
        {userToken ? (
          <>
            <Stack.Screen name="Home" component={HomeNavigator} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetailsPage} />
            <Stack.Screen name="StockDetails" component={StockDetailsPage} />
            <Stack.Screen name="UserDetails" component={UserDetailsPage} />
            <Stack.Screen name="UserEdit" component={UserEditPage} />
          </>
        ) : (
          <Stack.Screen name="Home" component={LoginPage}/>
        )}
        <Stack.Screen name="Loading" component={LoadingPage} />
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

const mapStateToProps = (state: any) => ({
  userToken: state.user.userToken,
  isLoading: state.user.isFetching,
  isLoggedOut: state.user.isLoggedOut,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      logIn: userActions.logIn,
      logOut: userActions.logOut,
      register: userActions.register,
      restoreToken: userActions.restoreToken,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthProvider);
