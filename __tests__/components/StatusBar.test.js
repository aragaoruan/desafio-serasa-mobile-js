import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react-native';

import StatusBar from '~/components/StatusBar';

jest.useFakeTimers();

jest.mock('react-redux');

describe('StatusBar component', () => {
  it('component status bar ', () => {
    useSelector.mockImplementation(cb =>
      cb({
        user: { user: { name: 'Maurivan Luiz' } },
        score: { score: { points: 4 } },
      })
    );

    render(<StatusBar />);
  });
});
