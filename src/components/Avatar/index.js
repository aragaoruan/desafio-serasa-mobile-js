import React from 'react';
import { Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { useSelector } from 'react-redux';

import { desaturate } from 'polished';

import { backgroudColor, progessColor } from '~/helper/color';

import { Container, Progress, AvatarPhoto, Name } from './styles';

export default function Avatar() {
  const { user } = useSelector(state => state.user);
  const { score } = useSelector(state => state.score);

  return (
    <Container colors={backgroudColor(score.points)}>
      <Progress
        rotation={0}
        size={140}
        width={3}
        fill={100 - score.points}
        tintColor="#fff"
        backgroundColor={desaturate(0.3, progessColor(score.points))}
      >
        {() => <AvatarPhoto source={user?.photo} />}
      </Progress>

      <Name>{user?.name}</Name>
    </Container>
  );
}
