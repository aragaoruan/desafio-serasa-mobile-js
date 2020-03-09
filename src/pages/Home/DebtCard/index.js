import React from 'react';
import { useSelector } from 'react-redux';

import Card from '~/components/Card';

import Debit from './Debt';
import { Container, View, Text } from './styles';

export default function DebitCard() {
  const { score } = useSelector(state => state.score);

  const description = {
    title: 'Negocie suas Dividas',
    icon: 'file-alt',
    color: '#edb761',
  };

  return (
    <>
      {score.debt.length === 0 && (
        <Container>
          <Card
            description={{
              ...description,
              component: (
                <View>
                  <Text>Você não possui dividas.</Text>
                </View>
              ),
            }}
          />
        </Container>
      )}

      {score.debt.map(deb => (
        <Container key={deb.id}>
          <Card
            description={{ ...description, component: <Debit deb={deb} /> }}
          />
        </Container>
      ))}
    </>
  );
}
