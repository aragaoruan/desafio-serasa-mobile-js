import React from 'react';

import Card from '~/components/Card';

import Debit from './Debt';
import { Container } from './styles';

export default function DebitCard() {
  return (
    <Container>
      <Card
        description={{
          title: 'Negocie suas Dividas',
          icon: 'file-alt',
          color: '#edb761',
          component: <Debit />,
        }}
      />
    </Container>
  );
}
