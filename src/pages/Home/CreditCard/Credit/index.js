import React from 'react';
import { Alert } from 'react-native';
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

export default function Credit({ cred }) {
  const dispatch = useDispatch();
  function handleDebt() {
    Alert.alert(
      'Atenção',
      'Deseja confirmar proposta de credito ?',
      [
        {
          text: 'Cancelar',
        },
        { text: 'Confirmar', onPress: () => dispatch(getScoreRequest('3')) },
      ],
      { cancelable: false }
    );
  }
  return (
    <>
      <Container>
        <TitleDesciption>
          Encontramos uma oferta de cartao de credito
        </TitleDesciption>

        <DescriptionContainer>
          <Image source={cred.photo} />
          <ValuesContainer>
            <OldValue>{cred.oldValue}</OldValue>
            <NewValue>{cred.newValue}</NewValue>
          </ValuesContainer>
        </DescriptionContainer>

        <ButtonContainer>
          <ButtonDebit onPress={() => handleDebt()}>Ver oferta</ButtonDebit>
        </ButtonContainer>
      </Container>
    </>
  );
}

Credit.propTypes = {
  cred: PropTypes.oneOfType([PropTypes.object]),
};

Credit.defaultProps = {
  cred: {},
};