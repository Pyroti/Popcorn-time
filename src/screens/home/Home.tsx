import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { AuthTitle, AuthView } from '../../components/styles/authStyles';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import authSelector from '../../store/selector/authSelector';
import { logoutFirebase } from '../../store/actions/auth/logoutAction';
import AuthButton from '../../components/buttons/authButton/authButton';
import { keyboardAvoidingBehavior } from '../../constants/keyboardAvoidingBehavior';
import { Text } from '../../components/styles/globalStyled';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { currentUser } = useTypedSelector(authSelector);

  const logout = () => {
    dispatch(logoutFirebase());
  };

  return (
    <KeyboardAvoidingView behavior={keyboardAvoidingBehavior}>
      <AuthView onPress={Keyboard.dismiss}>
        <AuthTitle>{t('auth.welcome')}</AuthTitle>
        <Text>{currentUser?.displayName}</Text>
        <AuthButton text={t('auth.logout')} onPress={logout} />
      </AuthView>
    </KeyboardAvoidingView>
  );
};

export default Home;
