import styled from 'styled-components/native';

import ComponentButton from '~/components/Button';
import { fonts } from '~/styles';

export const Container = styled.View`
  margin: -50px 10px 0 10px;
  padding: 10px 20px 10px 20px;
  background: white;
  border-radius: 5px;
  border: #c1c1c1 1px solid;
  box-shadow: 0px 0px 5px #4f514f;

  justify-content: center;
  align-items: center;
`;

export const Points = styled.Text`
  font-size: 50px;
  color: #4f514f;
  font-weight: bold;
  padding: 15px;
`;

export const DescriptionPoints = styled.Text`
  font-size: ${fonts.big}px;
  color: #4f514f;
  margin-bottom: 10px;
`;

export const Button = styled(ComponentButton)`
  margin-bottom: 10px;
`;

export const ContainerDescriptionScore = styled.View`
  flex-direction: row;
`;
