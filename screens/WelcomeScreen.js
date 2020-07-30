import React from 'react';
import { Text, Image, View } from 'react-native';
import styled from 'styled-components';
import img from '../assets/shopping.png';
import AppButton from '../components/AppButton';

const WelcomeScreen = () => (
  <>
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <TextTitle>WeeShop!</TextTitle>
      <Description>You'll find the best things around you!</Description>
    </View>

    <Image
      source={img}
      style={{ height: 300, width: '100%', flex: 1, resizeMode: 'contain' }}
    />
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <AppButton>GET STARTED</AppButton>
    </View>
  </>
);

const TextTitle = styled(Text)`
  font-size: 48px;
  text-align: center;
  margin-top: 20px;
  color: #9400ff;
  font-family: 'ceraround-bold';
`;

const Description = styled(Text)`
  text-align: center;
  margin-top: 10px;
  color: #b4b4b4;
  font-size: 20px;
  margin-bottom: 40px;
`;

export default WelcomeScreen;
