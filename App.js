import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import React from 'react';
import { Platform, SafeAreaView, StatusBar, Text } from 'react-native';
import styled from 'styled-components';
import WelcomeScreen from './screens/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen';
import colors from './config/colors';
import Card from './components/Card';
import couchImg from './assets/couch.jpg';

export default function App() {
  const [fontsLoaded] = useFonts({
    'ceraround-bold': require('./assets/fonts/ceraround-bold.otf'),
    'ceraround-regular': require('./assets/fonts/ceraround-regular.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeView>
      {/* <WelcomeScreen /> */}
      <Text>test</Text>
      <Card image={couchImg} title="Selling couch" subtitle="$900" />
    </SafeView>
  );
}

const SafeView = styled(SafeAreaView)`
  flex: 1;
  background: ${colors.screenBackground};
  padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0};
  padding: 20px;
`;
