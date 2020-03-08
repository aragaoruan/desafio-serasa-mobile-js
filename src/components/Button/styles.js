import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContainerText = styled.View`
  flex-direction: row;
`;
export const Text = styled.Text`
  color: #be3a84;
  font-weight: bold;
  font-size: 16px;
  margin-right: 5px;
`;
