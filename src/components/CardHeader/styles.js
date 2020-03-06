import LinearGradient from 'react-native-linear-gradient';
import ProgressCircle from 'react-native-progress-circle';

import styled from 'styled-components/native';

export const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  padding: 25px 0 90px;
`;

export const Progress = styled(ProgressCircle).attrs({
  borderWidth: 3,
  percent: 50,
  shadowColor: '#000',
  radius: 75,
  color: '#fff',
})``;

export const Avatar = styled.Image`
  height: 140px;
  width: 140px;
  border-radius: 70px;
  resize-mode: contain;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: 30px;
`;
