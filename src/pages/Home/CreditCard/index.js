import React from 'react';
import { useSelector } from 'react-redux';

import Card from '~/components/Card';
import { colors } from '~/styles';

import Credit from './Credit';
import { Container, View, Text } from './styles';

export default function CreditCard() {
  const { score } = useSelector(state => state.score);
  const description = {
    title: 'Propostas de crédito',
    icon: 'credit-card',
    color: colors.pontuacao_media.primaryColor,
  };
  return (
    <>
      {score.credit.length === 0 && (
        <Container>
          <Card
            description={{
              ...description,
              component: (
                <View>
                  <Text>Você não possui ofertas de crédito.</Text>
                </View>
              ),
            }}
          />
        </Container>
      )}

      {score.credit.map(cred => (
        <Container key={cred.id}>
          <Card
            description={{
              ...description,
              component: <Credit cred={cred} />,
            }}
          />
        </Container>
      ))}
    </>
  );
}
