import React from 'react';
import { useSelector } from 'react-redux';

import { desaturate } from 'polished';

import { colors } from '~/styles';

import { Container, Progress, AvatarPhoto, Name } from './styles';

export default function Avatar() {
  const { user } = useSelector(state => state.user);
  const { score } = useSelector(state => state.score);

  return (
    <Container colors={colors.pontuacao_media.backgroundcolor}>
      <Progress
        borderWidth={5}
        percent={100 - score.points}
        shadowColor={desaturate(0.1, colors.pontuacao_media.primaryColor)}
        radius={70}
        color="#fff"
      >
        <AvatarPhoto source={user?.photo} />
      </Progress>
      <Name>{user?.name}</Name>
    </Container>
  );
}
