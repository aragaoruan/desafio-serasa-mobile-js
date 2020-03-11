import React from 'react';
import { View } from 'react-native';

import { render } from '@testing-library/react-native';

import Card from '~/components/Card';

jest.useFakeTimers();

jest.mock('react-redux');

describe('Card component', () => {
  it('test component card', () => {
    const description = { title: 'Titulo', color: '#fff', component: <View /> };
    const { getByText } = render(<Card description={description} />);

    expect(getByText('Titulo')).toBeTruthy();
  });
});
