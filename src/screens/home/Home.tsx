import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { TAuthStackScreenProps } from '../../navigation';
import { AuthTitle, AuthView } from '../../components/authStyles';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import authSelector from '../../store/selector/authSelector';
import { Text } from '../../../globalStyled';
import { logoutFirebase } from '../../store/actions/auth/logoutAction';
import AuthButton from '../../components/buttons/authButton/authButton';

const Home: React.FC<TAuthStackScreenProps> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { currentUser } = useTypedSelector(authSelector);

  const logout = () => {
    dispatch(logoutFirebase());
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <AuthView onPress={Keyboard.dismiss}>
        <AuthTitle>{t('auth.welcome')}</AuthTitle>
        <Text>{currentUser?.displayName}</Text>
        <AuthButton text={t('auth.logout')} onPress={logout} />
      </AuthView>
    </KeyboardAvoidingView>
  );
};

export default Home;
