import React from 'react';

import Avatar from '~/components/Avatar';
import Score from '~/components/Score';

import DebitCart from './DebitCard';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Avatar />
      <Score />
      <DebitCart />
    </Container>
  );
}
