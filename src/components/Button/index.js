import React from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { Container, ContainerText, Text } from './styles';

export default function Button({ children, loading, icon, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#be3a84" />
      ) : (
        <ContainerText>
          <Text>{children}</Text>
          {icon && <Icon name={icon} size={20} color="#be3a84" />}
        </ContainerText>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  icon: PropTypes.string,
};

Button.defaultProps = {
  loading: false,
  icon: null,
};
