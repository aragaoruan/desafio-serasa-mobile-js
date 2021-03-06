import { RectButton } from 'react-native-gesture-handler';

import styled from 'styled-components/native';

import { colors } from '~/styles';

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
  color: ${colors.button};
  font-weight: bold;
  font-size: 16px;
  margin-right: 5px;
`;
