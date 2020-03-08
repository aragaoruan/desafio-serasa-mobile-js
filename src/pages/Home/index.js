import React from 'react';

import Avatar from '~/components/Avatar';
import Score from '~/components/Score';

import CreditCard from './CreditCard';
import DebitCart from './DebtCard';
import ProposedCard from './ProposedCard';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Avatar />
      <Score />

      <DebitCart />
      <CreditCard />
      <ProposedCard />
    </Container>
  );
}
