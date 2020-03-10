import React from 'react';
import { StatusBar as Status } from 'react-native';
import { useSelector } from 'react-redux';

import { progessColor } from '~/helper/color';

export default function StatusBar() {
  const { score } = useSelector(state => state.score);
  return (
    <Status
      barStyle="light-content"
      backgroundColor={progessColor(score.points)}
    />
  );
}
