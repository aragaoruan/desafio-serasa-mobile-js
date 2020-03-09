import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

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

export default function Debit({ deb }) {
  const dispatch = useDispatch();
  function handleDebt() {
    dispatch(getScoreRequest('2'));
  }
  return (
    <>
      <Container>
        <TitleDesciption>Você possuí uma pendência com</TitleDesciption>

        <DescriptionContainer>
          <Image source={deb.photo} />
          <ValuesContainer>
            <OldValue>{deb.oldValue}</OldValue>
            <NewValue>{deb.newValue}</NewValue>
          </ValuesContainer>
        </DescriptionContainer>

        <ButtonContainer>
          <ButtonDebit onPress={() => handleDebt()}>Negociar Agora</ButtonDebit>
        </ButtonContainer>
      </Container>
    </>
  );
}

Debit.propTypes = {
  deb: PropTypes.oneOfType([PropTypes.object]),
};

Debit.defaultProps = {
  deb: {},
};
