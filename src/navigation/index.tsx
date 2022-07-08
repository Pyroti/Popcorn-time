import React from 'react';
import { ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { t } from 'i18next';
import SignIn from '../screens/signIn/SignIn';
import SignUp from '../screens/signUp/SignUp';
import { useTypedSelector } from '../hooks/useTypeSelector';
import authSelector from '../store/selector/authSelector';
import Home from '../screens/home/Home';

export interface IAuthStackParamList extends ParamListBase {
  SignIn: undefined;
  SignUp: undefined;
  Home: undefined;
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

const MainStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerTitle: t('header.home'),
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

const Navigator = () => {
  const { currentUser } = useTypedSelector(authSelector);

  return !currentUser ? AuthenticationStack() : MainStack();
};

export default Navigator;
