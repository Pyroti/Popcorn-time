import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, KeyboardAvoidingView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import {
  AuthTextInputContainer,
  AuthTitle,
  AuthView,
  SignWithContainer,
  SignWithLine,
  SignWithText,
  SingUpButton,
  Spoiler,
  SupportContainer,
} from '../../components/styles/authStyles';
import AuthTextInput from '../../components/inputs/authTextInput/authTextInput';
import AuthButton from '../../components/buttons/authButton/authButton';
import { loginFirabase } from '../../store/actions/auth/loginAction';
import { loginGoogleFirabase } from '../../store/actions/auth/loginGoogleAction';
import IconButton from '../../components/buttons/iconButton/IconButton';
import Images from '../../constants/images';
import { AuthStackParamList } from '../../navigation';
import { AuthStack } from '../../constants/stack';
import { keyboardAvoidingBehavior } from '../../constants/keyboardAvoidingBehavior';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import authSelector from '../../store/selector/authSelector';
import { FirabaseErrorCodes } from '../../constants/firabaseError';

type Navigation = NativeStackNavigationProp<AuthStackParamList, AuthStack.SignIn>;

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(i18next.t('errors.invalidMail'))
    .required(i18next.t('errors.requiredField')),
  password: yup
    .string()
    .min(6, i18next.t('errors.invalidPassword'))
    .required(i18next.t('errors.requiredField')),
});

const SignIn: React.FC = () => {
  const [isSecurity, setIsSecurity] = useState(true);
  const { error } = useTypedSelector(authSelector);

  const navigation = useNavigation<Navigation>();

  const { t } = useTranslation();
  const dispatch = useDispatch();

  const changeSecurityPassword = () => {
    setIsSecurity((prevIsSecurity) => !prevIsSecurity);
  };

  const signInWithGoogle = () => {
    dispatch(loginGoogleFirabase());
  };

  const linkToSignUp = () => {
    navigation.navigate(AuthStack.SignUp);
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      dispatch(loginFirabase(email, password));
    },
  });

  useEffect(() => {
    if (error === FirabaseErrorCodes.userNotFound) {
      formik.setFieldError('email', t('errors.userDoesNotExsist'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  return (
    <KeyboardAvoidingView behavior={keyboardAvoidingBehavior}>
      <AuthView onPress={Keyboard.dismiss}>
        <AuthTitle>{t('auth.welcome')}</AuthTitle>
        <AuthTextInputContainer>
          <AuthTextInput
            label={t('auth.email')}
            placeholder={t('auth.enterEmail')}
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            hasError={formik.touched.email && !!formik.errors.email}
            errorText={formik.errors.email}
            iconLeft={<IconEvilIcons size={22} name="envelope" />}
          />
          <AuthTextInput
            label={t('auth.password')}
            placeholder={t('auth.enterPassword')}
            secureTextEntry={isSecurity}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            hasError={formik.touched.password && !!formik.errors.password}
            errorText={formik.errors.password}
            iconLeft={<IconEvilIcons size={25} name="lock" />}
            iconRight={
              <IconIonicons
                size={20}
                name={isSecurity ? 'eye-outline' : 'eye-off-outline'}
                onPress={changeSecurityPassword}
              />
            }
          />
          <AuthButton text={t('auth.signIn')} onPress={formik.handleSubmit} />
        </AuthTextInputContainer>
        <SignWithContainer>
          <SignWithLine />
          <SignWithText>{t('auth.signInWith')}</SignWithText>
          <SignWithLine />
        </SignWithContainer>
        <IconButton link={Images.googleIcon} onPress={signInWithGoogle} />
        <SupportContainer>
          <Spoiler>{t('auth.dontHaveAnAccount')}</Spoiler>
          <SingUpButton onPress={linkToSignUp}>{t('auth.signUp')}</SingUpButton>
        </SupportContainer>
      </AuthView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
