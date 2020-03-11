import React from 'react';

import { render } from '@testing-library/react-native';

import Line from '~/components/Line';

describe('Line component', () => {
  it('component line', () => {
    render(<Line />);
  });
});
