import React from 'react';

import { Container, Progress, Avatar, Name } from './styles';

export default function CardHeader() {
  return (
    <Container colors={['#d87516', '#f3a82c']}>
      <Progress>
        <Avatar
          source={{
            uri:
              'http://api.adorable.io/avatars/90/serasaconsumidor@adorable.png',
          }}
        />
      </Progress>
      <Name>RUAN ARAGAO</Name>
    </Container>
  );
}
