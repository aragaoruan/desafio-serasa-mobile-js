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

export default function Proposal({ pro }) {
  const dispatch = useDispatch();
  function handleDebt() {
    dispatch(getScoreRequest('2'));
  }
  return (
    <>
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
    </>
  );
}

Proposal.propTypes = {
  pro: PropTypes.oneOfType([PropTypes.object]),
};

Proposal.defaultProps = {
  pro: {},
};
