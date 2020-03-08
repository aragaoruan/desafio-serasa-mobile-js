import React from 'react';

import Card from '~/components/Card';

import Proposal from './Proposal';
import { Container } from './styles';

export default function ProposedCard() {
  return (
    <Container>
      <Card
        description={{
          title: 'Plano de proteção',
          icon: 'shield-alt',
          color: '#0b827e',
          component: <Proposal />,
        }}
      />
    </Container>
  );
}
