import React, { useEffect, useState } from 'react';
import { LayoutAnimation, TextInputProps } from 'react-native';
import LightTheme from '../../../constants/theme';
import {
  AErrorText,
  AIcon,
  ALabelText,
  ATextInput,
  AView,
  AViewContainer,
  AViewLeftContent,
} from './style';

interface AuthTextInputProps extends TextInputProps {
  errorText?: string;
  hasError?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  label?: string;
}

const AuthTextInput: React.FC<AuthTextInputProps> = ({
  value,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  editable = true,
  hasError = false,
  label,
  onChangeText,
  iconLeft,
  iconRight,
  errorText = '',
  placeholderTextColor = LightTheme.textGray,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
  }, [hasError]);

  return (
    <>
      <AViewContainer>
        <AView isFocused={isFocused}>
          <AViewLeftContent>
            <AIcon>{iconLeft}</AIcon>
            <ATextInput
              {...rest}
              editable={editable}
              autoCapitalize="none"
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
              value={value}
              onChangeText={onChangeText}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </AViewLeftContent>
          <AIcon>{iconRight}</AIcon>
        </AView>
        <ALabelText>{label}</ALabelText>
      </AViewContainer>
      {hasError && <AErrorText>{errorText}</AErrorText>}
    </>
  );
};

export default AuthTextInput;
