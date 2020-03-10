import React from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

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
  const { score } = useSelector(state => state.score);
  function handleDebt() {
    Alert.alert(
      'Atenção',
      'Deseja efetuar o pagamento ?',
      [
        {
          text: 'Cancelar',
        },
        {
          text: 'Confirmar',
          onPress: () => dispatch(getScoreRequest(score.points)),
        },
      ],
      { cancelable: false }
    );
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
