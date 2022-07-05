import styled from 'styled-components';
import { TouchableOpacity } from 'react-native';
import { Text } from '../../../../globalStyled';

export const AView = styled(TouchableOpacity)`
  margin-top: 10px;
  background-color: ${(props) => props.theme.main};
  color: ${(props) => props.theme.white};
  border-radius: 20px;
  width: 350px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const AText = styled(Text)`
  color: ${(props) => props.theme.white};
`;
