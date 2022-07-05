import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { t } from 'i18next';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';

export interface IAuthStackParamList extends ParamListBase {
  SignIn: undefined;
  SignUp: undefined;
}

export type TAuthStackScreenProps<T extends keyof IAuthStackParamList = string> =
  NativeStackScreenProps<IAuthStackParamList, T>;

const Stack = createNativeStackNavigator<IAuthStackParamList>();

const AuthenticationStack = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        headerTitle: t('header.signIn'),
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="SignUp"
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
