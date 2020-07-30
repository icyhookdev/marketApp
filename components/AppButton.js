import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styled from 'styled-components';

const AppButton = ({ children, onPress }) => (
  <Button onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </Button>
);

const Button = styled(TouchableOpacity)`
  width: 100%;
  background: #9400ff;
  border-radius: 90px;
  padding: 10px;
`;

const ButtonText = styled(Text)`
  text-align: center;
  font-size: 16px;
  color: #fff;
  font-family: 'ceraround-bold';
`;
export default AppButton;
