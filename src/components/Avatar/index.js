import React from 'react';

import { colors } from '~/styles';

import { Container, Progress, AvatarPhoto, Name } from './styles';

export default function Avatar() {
  return (
    <Container colors={colors.pontuacao_media.backgroundcolor}>
      <Progress>
        <AvatarPhoto
          source={{
            uri:
              'http://api.adorable.io/avatars/90/serasaconsumidor@adorable.png',
          }}
        />
      </Progress>
      <Name>Maurivan Luiz</Name>
    </Container>
  );
}
