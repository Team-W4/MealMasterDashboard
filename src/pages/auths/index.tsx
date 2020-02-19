import React, { createContext, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingPage from '../loading';
import LoginPage from '../login';
import RecipeDetailsPage from '../recipes';
import StockDetailsPage from '../stock';
import HomeNavigator from '../navigator/HomeNavigator';
import { bindActionCreators } from 'redux';
import { userActions } from '../../actions';
import { connect } from 'react-redux';

export type AuthStackParamList = {
  Login: undefined;
  Loading: undefined;
  Home: undefined;
  RecipeDetails: { recipeId: number };
  StockDetails: { stockId: number };
};

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthContext = createContext({});

export type Props = {
  logIn: () => void;
  logOut: () => void;
  register: () => void;
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
    return <LoadingPage />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator headerMode="none">
        {!userToken ? (
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ animationTypeForReplace: isLoggedOut ? 'pop' : 'push' }}
          />
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeNavigator} />
            <Stack.Screen name="RecipeDetails" component={RecipeDetailsPage} />
            <Stack.Screen name="StockDetails" component={StockDetailsPage} />
          </>
        )}
      </Stack.Navigator>
    </AuthContext.Provider>
  );
};

const mapStateToProps = (state: any) => ({
  userToken: state.user.userToken,
  isLoading: state.user.isLoading,
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
