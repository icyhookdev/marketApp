import React from 'react';
import { View, Text, Image } from 'react-native';
import styled from 'styled-components';
import colors from '../config/colors';

const Card = ({ title, subtitle, image }) => (
  <CardContainer>
    <CardImage source={image} />
    <BodyCard>
      <CardText size="18px">{title}</CardText>
      <CardText size="20px" weight="bold" color="secondary">
        {subtitle}
      </CardText>
    </BodyCard>
  </CardContainer>
);

const CardContainer = styled(View)`
  border-radius: 15px;
  background: ${colors.cardBackground};
  margin-bottom: 20px;
  overflow: hidden;
`;

const CardText = styled(Text)`
  font-size: ${props => props.size || '16px'};
  color: ${props => colors[props.color] || colors.black};
  margin-bottom: 10px;
  font-weight: ${props => props.weight || 'normal'};
`;

const CardImage = styled(Image)`
  width: 100%;
  height: 200px;
`;

const BodyCard = styled(View)`
  padding: 10px;
`;
export default Card;
