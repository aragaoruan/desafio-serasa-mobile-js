import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Avatar from '~/components/Avatar';
import Score from '~/components/Score';
import { getScoreRequest } from '~/store/modules/score/actions';
import { getUserRequest } from '~/store/modules/user/actions';

import CreditCard from './CreditCard';
import DebitCart from './DebtCard';
import ProposedCard from './ProposedCard';
import { Container } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  useEffect(() => {
    dispatch(getScoreRequest('0'));
  }, []);

  return (
    <Container>
      <Avatar />
      <Score />

      <DebitCart />
      <CreditCard />
      <ProposedCard />
    </Container>
  );
}
