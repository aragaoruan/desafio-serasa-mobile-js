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

export default function Credit() {
  const { score } = useSelector(state => state.score);
  const dispatch = useDispatch();
  function handleDebt() {
    dispatch(getScoreRequest('3'));
  }
  return (
    <>
      {score.credit.map(cred => (
        <Container key={cred.id}>
          <TitleDesciption>
            Encontramos uma oferta de cartao de credito
          </TitleDesciption>

          <DescriptionContainer>
            <Image source={cred.photo} />
            <ValuesContainer>
              <OldValue>Anuidade Grátis</OldValue>
              <NewValue>Limite de R$2.000,00</NewValue>
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
