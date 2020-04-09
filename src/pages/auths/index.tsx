import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userActions } from '../../actions';
import HomeNavigator from '../navigator/HomeNavigator';
import * as navigator from '../navigator/Navigator';
import LoadingPage from '../loading';
import LoginPage from '../login';
import SearchPage from '../search';
import { RecipeDetailsPage } from '../recipes';
import { StockDetailsPage } from '../stock';
import RecipeEditPage from '../recipeEdit';
import FoodDetailsPage from '../food';
import UserDetailsPage, { UserEditPage } from '../user';
import ReceiptParsePage from '../receiptParse';
import ConsumePage from '../consume';
import AuthStack from './AuthStack';
import AuthContext from './AuthContext';

export const AUTH_TIMEOUT = 5000;

export type Props = {
  logOut: () => void;
  logIn: (email?: string, password?: string) => void;
  register: (email?: string, password?: string) => void;
  restoreToken: () => void;
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
    const retoreTokenAsync = async () => restoreToken();

    retoreTokenAsync();
  });

  let authTimeoutId: number;
  useEffect(() => {
    if (isLoading) {
      navigator.reset('Loading');

      authTimeoutId = setTimeout(() => {
        navigator.reset('Login');
      }, AUTH_TIMEOUT);
    } else {
      if (authTimeoutId) {
        clearTimeout(authTimeoutId);
      }

      const rootRoute = userToken ? 'Home' : 'Login';
      navigator.reset(rootRoute);
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
        {userToken ? (
          <>
            <AuthStack.Screen name="Home" component={ HomeNavigator } />
            <AuthStack.Screen name="Search" component={ SearchPage } />
            <AuthStack.Screen name="RecipeDetails" component={ RecipeDetailsPage } />
            <AuthStack.Screen name="RecipeEdit" component={ RecipeEditPage } />
            <AuthStack.Screen name="StockDetails" component={ StockDetailsPage } />
            <AuthStack.Screen name="FoodDetails" component={ FoodDetailsPage } />
            <AuthStack.Screen name="UserDetails" component={ UserDetailsPage } />
            <AuthStack.Screen name="UserEdit" component={ UserEditPage } />
            <AuthStack.Screen name="ReceiptParse" component={ ReceiptParsePage } />
            <AuthStack.Screen name="Consume" component={ ConsumePage } />
          </>
        ) : (
          <AuthStack.Screen
            name="Login"
            component={ LoginPage }
            options={{ animationTypeForReplace: isLoggedOut ? 'pop' : 'push' }}
          />
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
