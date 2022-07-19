import React from 'react';
import { Text } from '../../styles/globalStyled';
import { ButtonIcon, ButtonLeftContent, ButtonPressable } from './style';

interface AuthTextInputProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  text: string;
  onPress: () => void;
}

const Button: React.FC<AuthTextInputProps> = ({ text, iconLeft, iconRight, onPress }) => {
  return (
    <ButtonPressable onPress={onPress}>
      <ButtonLeftContent>
        <ButtonIcon>{iconLeft}</ButtonIcon>
        <Text>{text}</Text>
      </ButtonLeftContent>
      <ButtonIcon>{iconRight}</ButtonIcon>
    </ButtonPressable>
  );
};

export default Button;
