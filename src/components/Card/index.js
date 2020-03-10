import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import PropTypes from 'prop-types';

import Line from '~/components/Line';

import { Container, Title } from './styles';

export default function Card({ description }) {
  const { title, icon, color, component } = description;
  return (
    <Container>
      <Title color={color}>
        {icon && <Icon name={icon} size={20} color={color} />}
        {'  '}
        {title}
      </Title>

      <Line />
      {component}
    </Container>
  );
}

Card.propTypes = {
  description: PropTypes.oneOfType([PropTypes.object]),
};

Card.defaultProps = {
  description: {},
};
