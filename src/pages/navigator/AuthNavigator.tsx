import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../login';
import LoadingPage from '../loading';
import HomeNavigator from './HomeNavigator';
import * as RootNavigator from './RootNavigator';
import { RecipeDetailsPage } from '../recipes';

const Stack = createStackNavigator();

export type Props = {
  loading?: boolean;
  authenticated?: boolean;
};

const AuthNavigator: React.FC<Props> = ({ loading, authenticated }) => {
  if (loading) {
    RootNavigator.navigate('Loading');
  } else if (authenticated) {
    RootNavigator.navigate('Home');
  }

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Loading" component={LoadingPage} />
      <Stack.Screen name="Home" component={HomeNavigator} />
      <Stack.Screen name="RecipeDetails" component={RecipeDetailsPage} />
    </Stack.Navigator>
  );
};

const mapStateToProps = (state: any) => ({
  loading: state.user.isFetching,
  authenticated: state.user.profile,
});

export default connect(
  mapStateToProps,
  null,
)(AuthNavigator);
