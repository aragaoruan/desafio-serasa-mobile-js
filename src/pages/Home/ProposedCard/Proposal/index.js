import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getScoreRequest } from '~/store/modules/score/actions';

import {
  Container,
  TitleDesciption,
  DescriptionContainer,
  Image,
  ValuesContainer,
  OldValue,
  NewValue,
  ButtonContainer,
  ButtonDebit,
} from './styles';

export default function Proposal() {
  const { score } = useSelector(state => state.score);
  const dispatch = useDispatch();
  function handleDebt() {
    dispatch(getScoreRequest('2'));
  }
  return (
    <>
      {score.protection.map(pro => (
        <Container key={pro.id}>
          <TitleDesciption>Plano de proteção do RG</TitleDesciption>

          <DescriptionContainer>
            <Image source={pro.photo} />
            <ValuesContainer>
              <OldValue>{pro.oldValue}</OldValue>
              <NewValue>{pro.newValue}</NewValue>
            </ValuesContainer>
          </DescriptionContainer>
          <ButtonContainer>
            <ButtonDebit onPress={() => handleDebt()}>Ver oferta</ButtonDebit>
          </ButtonContainer>
        </Container>
      ))}
    </>
  );
}
