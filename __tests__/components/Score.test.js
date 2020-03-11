import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react-native';

import Score from '~/components/Score';

jest.useFakeTimers();

jest.mock('react-redux');

describe('Score component', () => {
  it('score button', () => {
    useSelector.mockImplementation(cb =>
      cb({
        score: { score: { points: 4, description: 'Pontuacao' } },
      })
    );
    const { getByTestId, getByText } = render(<Score />);

    expect(getByTestId('points')).toHaveProp('value', 4);
    expect(getByText('Pontuacao')).toBeTruthy();
  });
});
