import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { t } from 'i18next';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';
import { AuthStack } from '../constants/authStack';

export interface AuthStackParamList extends ParamListBase {
  [AuthStack.SignIn]: undefined;
  [AuthStack.SignUp]: undefined;
}

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthenticationStack = () => (
  <Stack.Navigator initialRouteName={AuthStack.SignIn}>
    <Stack.Screen
      name={AuthStack.SignIn}
      component={SignIn}
      options={{
        headerTitle: t('header.signIn'),
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name={AuthStack.SignUp}
      component={SignUp}
      options={{
        headerTitle: t('header.signUp'),
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

const Navigator = () => {
  return AuthenticationStack();
};

export default Navigator;
