import React from 'react';
import { useSelector } from 'react-redux';

import Card from '~/components/Card';

import Proposal from './Proposal';
import { Container, View, Text } from './styles';

export default function ProposedCard() {
  const { score } = useSelector(state => state.score);
  const description = {
    title: 'Plano de proteção',
    icon: 'shield-alt',
    color: '#0b827e',
  };
  return (
    <>
      {score.protection.length === 0 && (
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

      {score.protection.map(pro => (
        <Container key={pro.id}>
          <Card
            description={{ ...description, component: <Proposal pro={pro} /> }}
          />
        </Container>
      ))}
    </>
  );
}
