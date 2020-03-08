import React from 'react';
import { useSelector } from 'react-redux';

import { colors } from '~/styles';

import { Container, Progress, AvatarPhoto, Name } from './styles';

export default function Avatar() {
  const { user } = useSelector(state => state.user);

  return (
    <Container colors={colors.pontuacao_media.backgroundcolor}>
      <Progress>
        <AvatarPhoto source={user?.photo} />
      </Progress>
      <Name>{user?.name}</Name>
    </Container>
  );
}
