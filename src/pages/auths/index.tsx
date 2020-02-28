import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { userActions } from '../../actions';
import HomeNavigator from '../navigator/HomeNavigator';
import * as navigator from '../navigator/Navigator';
import LoadingPage from '../loading';
import LoginPage from '../login';
import { RecipeDetailsPage } from '../recipes';
import { StockDetailsPage, StockEditPage } from '../stock';
import UserDetailsPage, { UserEditPage } from '../user';
import AuthStack from './AuthStack';
import AuthContext from './AuthContext';

export type Props = {
  logOut: () => void;
  logIn: (email?: string, password?: string) => void;
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

  useEffect(() => {
    if (isLoading) {
      navigator.navigate('Loading');
    } else {
      navigator.navigate(userToken ? 'Home' : 'Login');
    }
  }, [userToken, isLoading]);

  const authContext = useMemo(() => ({ logIn, logOut, register }), [
    logIn,
    logOut,
    register,
  ]);

  return (
    <AuthContext.Provider value={ authContext }>
      <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen
          name="Login"
          component={ LoginPage }
          options={{ animationTypeForReplace: isLoggedOut ? 'pop' : 'push' }}
        />
        {userToken ? (
          <>
            <AuthStack.Screen name="Home" component={ HomeNavigator } />
            <AuthStack.Screen name="RecipeDetails" component={ RecipeDetailsPage } />
            <AuthStack.Screen name="StockDetails" component={ StockDetailsPage } />
            <AuthStack.Screen name="StockEdit" component={ StockEditPage } />
            <AuthStack.Screen name="UserDetails" component={ UserDetailsPage } />
            <AuthStack.Screen name="UserEdit" component={ UserEditPage } />
          </>
        ) : (
          <AuthStack.Screen name="Home" component={ LoginPage } />
        )}
        <AuthStack.Screen name="Loading" component={ LoadingPage } />
      </AuthStack.Navigator>
    </AuthContext.Provider>
  );
};

const mapStateToProps = (state: any) => ({
  userToken: state.user.userToken,
  isLoading: state.user.isFetching,
  isLoggedOut: state.user.isLoggedOut,
});

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
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
