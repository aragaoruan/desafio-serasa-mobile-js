import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
  const { score } = useSelector(state => state.score);
  useEffect(() => {
    dispatch(getUserRequest());
  }, []);

  useEffect(() => {
    dispatch(getScoreRequest('1'));
  }, []);

  return (
    <Container>
      <Avatar />
      <Score />

      {score.debt.length !== 0 && <DebitCart />}
      {score.credit.length !== 0 && <CreditCard />}
      {score.protection.length !== 0 && <ProposedCard />}
    </Container>
  );
}
