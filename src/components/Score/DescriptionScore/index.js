import React from 'react';

import PropTypes from 'prop-types';

import { Container, TextPoint, Bar } from './styles';

export default function DescriptionScore({ description }) {
  const { desc, colorStart, colorEnd } = description;
  return (
    <Container>
      <TextPoint>{desc}</TextPoint>
      <Bar colors={[colorStart, colorEnd]} />
    </Container>
  );
}

DescriptionScore.propTypes = {
  description: PropTypes.oneOfType([PropTypes.object]),
};

DescriptionScore.defaultProps = {
  description: {},
};
