import styled from 'styled-components/native';

import { fonts } from '~/styles';

export const Container = styled.View`
  margin: 10px 10px 0 10px;
  padding: 10px 20px 10px 20px;
  background: white;
  border-radius: 5px;
  border: #c1c1c1 1px solid;
  box-shadow: 0px 0px 2px #4f514f;

  justify-content: center;
  align-items: flex-start;
`;

export const Title = styled.Text`
  font-size: ${fonts.regular}px;
  color: ${props => props.color};
  margin-bottom: 10px;
`;
