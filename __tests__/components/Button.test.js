import React from 'react';

import { render } from '@testing-library/react-native';

import Button from '~/components/Button';

jest.useFakeTimers();

jest.mock('react-native-gesture-handler');

describe('Button component', () => {
  it('component button', () => {
    render(<Button>teste botao</Button>);
  });
});
