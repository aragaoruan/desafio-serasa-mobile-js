import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

import { fonts } from '~/styles';

export const Container = styled(LinearGradient)`
  justify-content: center;
  align-items: center;
  padding: ${getStatusBarHeight() + 25}px 0 90px;
`;

export const Progress = styled(AnimatedCircularProgress)``;

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
