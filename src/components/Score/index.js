import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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
  const { score } = useSelector(state => state.score);

  return (
    <Container>
      <Points value={score?.points} countBy={1} />

      <DescriptionPoints>{score?.description}</DescriptionPoints>
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
