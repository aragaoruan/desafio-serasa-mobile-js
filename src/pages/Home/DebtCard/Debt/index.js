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

export default function Debit() {
  const { score } = useSelector(state => state.score);
  const dispatch = useDispatch();
  function handleDebt() {
    dispatch(getScoreRequest('2'));
  }
  return (
    <>
      {score.debt.map(deb => (
        <Container key={deb.id}>
          <TitleDesciption>Você possuí uma pendência com</TitleDesciption>

          <DescriptionContainer>
            <Image source={deb.photo} />
            <ValuesContainer>
              <OldValue>{deb.oldValue}</OldValue>
              <NewValue>{deb.newValue}</NewValue>
            </ValuesContainer>
          </DescriptionContainer>

          <ButtonContainer>
            <ButtonDebit onPress={() => handleDebt()}>
              Negociar Agora
            </ButtonDebit>
          </ButtonContainer>
        </Container>
      ))}
    </>
  );
}
