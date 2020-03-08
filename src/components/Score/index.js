import React from 'react';

import Line from '~/components/Line';

import ScoreDescriotion from './DescriptionScore';
import {
  Container,
  Points,
  DescriptionPoints,
  Button,
  ContainerDescriptionScore,
} from './styles';

export default function Score() {
  return (
    <Container>
      <Points>26</Points>
      <DescriptionPoints>Sua pontuação é baixa</DescriptionPoints>
      <Line />
      <Button icon="expand-less">Saiba mais</Button>
      <ContainerDescriptionScore>
        <ScoreDescriotion
          description={{
            desc: '0 a 30',
            colorStart: '#d87516',
            colorEnd: '#b9bf0b',
          }}
        />
        <ScoreDescriotion
          description={{
            desc: '31 a 60',
            colorStart: '#b9bf0b',
            colorEnd: '#3df4ee',
          }}
        />
        <ScoreDescriotion
          description={{
            desc: '61 a 100',
            colorStart: '#3df4ee',
            colorEnd: '#0410f2',
          }}
        />
      </ContainerDescriptionScore>
    </Container>
  );
}
