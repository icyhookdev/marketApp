import React from 'react';
import { Image, View } from 'react-native';
import styled from 'styled-components';

import colors from '../config/colors';

export default function ViewImageScreen() {
  return (
    <ImageContainer>
      <CloseIcon />
      <DeleteIcon />

      <ViewImage
        source={require('../assets/chair.jpg')}
        style={{ resizeMode: 'contain' }}
      />
    </ImageContainer>
  );
}

const ViewImage = styled(Image)`
  height: 100%;
  width: 100%;
`;

const CloseIcon = styled(View)`
  width: 50px;
  height: 50px;
  background-color: ${colors.primary};
  position: absolute;
  top: 20px;
  left: 10px;
`;

const DeleteIcon = styled(View)`
  width: 50px;
  height: 50px;
  background-color: ${colors.secondary};
  position: absolute;
  top: 20px;
  right: 10px;
`;

const ImageContainer = styled(View)`
  flex: 1;
  background: ${colors.black};
`;
