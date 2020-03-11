import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react-native';

import Avatar from '~/components/Avatar';

jest.useFakeTimers();

jest.mock('react-redux');

describe('Avatar component', () => {
  it('Testing if the username is in the component', () => {
    useSelector.mockImplementation(cb =>
      cb({
        user: { user: { name: 'Maurivan Luiz' } },
        score: { score: { points: 4 } },
      })
    );
    const { getByText } = render(<Avatar />);
    expect(getByText('Maurivan Luiz')).toBeTruthy();
  });

  it('Testing if the photo user is in the component', () => {
    useSelector.mockImplementation(cb =>
      cb({
        user: {
          user: {
            name: 'Maurivan Luiz',
            photo: {
              uri: `http://api.adorable.io/avatars/90/123@adorable.png`,
            },
          },
        },
        score: { score: { points: 4 } },
      })
    );
    const { getByTestId } = render(<Avatar />);
    expect(getByTestId('photo')).toBeTruthy();
  });
});
