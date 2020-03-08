import React from 'react';

import Card from '~/components/Card';

import Credit from './Credit';
import { Container } from './styles';

export default function CreditCard() {
  return (
    <Container>
      <Card
        description={{
          title: 'Propostas de crédito',
          icon: 'credit-card',
          color: '#3df4ee',
          component: <Credit />,
        }}
      />
    </Container>
  );
}
