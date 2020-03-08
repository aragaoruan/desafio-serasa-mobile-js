import LinearGradient from 'react-native-linear-gradient';
import ProgressCircle from 'react-native-progress-circle';

import { desaturate } from 'polished';
import styled from 'styled-components/native';

import { colors, fonts } from '~/styles';

export const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  padding: 25px 0 90px;
`;

export const Progress = styled(ProgressCircle).attrs({
  borderWidth: 3,
  percent: 50,
  shadowColor: desaturate(0.1, colors.pontuacao_media.primaryColor),
  radius: 75,
  color: '#fff',
})``;

export const AvatarPhoto = styled.Image`
  height: 140px;
  width: 140px;
  border-radius: 70px;
  resize-mode: contain;
`;

export const Name = styled.Text`
  margin-top: 10px;
  color: #fff;
  font-size: ${fonts.bigger}px;
`;
