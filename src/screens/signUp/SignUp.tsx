import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Keyboard, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import i18next from 'i18next';
import * as yup from 'yup';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {
  AuthTextInputContainer,
  AuthView,
  SingUpButton,
  Spoiler,
  SupportContainer,
} from '../../components/styles/authStyles';
import AuthTextInput from '../../components/inputs/authTextInput/authTextInput';
import AuthButton from '../../components/buttons/authButton/authButton';
import { AuthStackParamList } from '../../navigation';
import { AuthStack } from '../../constants/authStack';

type navigation = NativeStackNavigationProp<AuthStackParamList, AuthStack.SignUp>;

const keyBoardBehavior = Platform.OS === 'ios' ? 'padding' : 'height';

const validationSchema = yup.object().shape({
  name: yup.string().required(i18next.t('errors.requiredField')),
  email: yup
    .string()
    .email(i18next.t('errors.invalidMail'))
    .required(i18next.t('errors.requiredField')),
  password: yup
    .string()
    .min(6, i18next.t('errors.invalidPassword'))
    .required(i18next.t('errors.requiredField')),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], i18next.t('errors.invalidConfirmPassword'))
    .required(i18next.t('errors.requiredField')),
});

const SignUp: React.FC = () => {
  const [isSecurity, setIsSecurity] = useState(true);
  const [isSecurityConfirm, setIsSecurityConfirm] = useState(true);

  const navigation = useNavigation<navigation>();

  const { t } = useTranslation();

  const changeSecurityPassword = () => {
    setIsSecurity((prevIsSecurity) => !prevIsSecurity);
  };

  const changeSecurityConfirmPassword = () => {
    setIsSecurityConfirm((prevIsSecurityConfirm) => !prevIsSecurityConfirm);
  };

  const linkToSignIn = () => {
    navigation.navigate(AuthStack.SignIn);
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', password: '', confirmPassword: '' },
    validationSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <KeyboardAvoidingView behavior={keyBoardBehavior}>
      <AuthView onPress={Keyboard.dismiss}>
        <AuthTextInputContainer>
          <AuthTextInput
            label={t('auth.userName')}
            placeholder={t('auth.enterName')}
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
            hasError={formik.touched.name && !!formik.errors.name}
            errorText={formik.errors.name}
          />
          <AuthTextInput
            label={t('auth.email')}
            placeholder={t('auth.enterEmail')}
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
            hasError={formik.touched.email && !!formik.errors.email}
            errorText={formik.errors.email}
          />
          <AuthTextInput
            label={t('auth.password')}
            placeholder={t('auth.enterPassword')}
            secureTextEntry={isSecurity}
            onChangeText={formik.handleChange('password')}
            value={formik.values.password}
            hasError={formik.touched.password && !!formik.errors.password}
            errorText={formik.errors.password}
            iconRight={
              <IconIonicons
                size={20}
                name={isSecurity ? 'eye-outline' : 'eye-off-outline'}
                onPress={changeSecurityPassword}
              />
            }
          />
          <AuthTextInput
            label={t('auth.confirmPassword')}
            placeholder={t('auth.confirmYourPassword')}
            secureTextEntry={isSecurityConfirm}
            onChangeText={formik.handleChange('confirmPassword')}
            value={formik.values.confirmPassword}
            hasError={formik.touched.confirmPassword && !!formik.errors.confirmPassword}
            errorText={formik.errors.confirmPassword}
            iconRight={
              <IconIonicons
                size={20}
                name={isSecurityConfirm ? 'eye-outline' : 'eye-off-outline'}
                onPress={changeSecurityConfirmPassword}
              />
            }
          />
          <AuthButton text={t('auth.signUp')} onPress={formik.handleSubmit} />
        </AuthTextInputContainer>
        <SupportContainer>
          <Spoiler>{t('auth.haveAnAccount')}</Spoiler>
          <SingUpButton onPress={linkToSignIn}>{t('auth.signIn')}</SingUpButton>
        </SupportContainer>
      </AuthView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
