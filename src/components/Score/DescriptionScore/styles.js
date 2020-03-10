import LinearGradient from 'react-native-linear-gradient';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const TextPoint = styled.Text`
  font-size: 12px;
  margin-bottom: 10px;
  text-align: center;
  color: #686965;
`;

export const Bar = styled(LinearGradient).attrs({
  start: { x: 0, y: 1 },
  end: { x: 1, y: 1 },
})`
  height: 10px;
  /* background: red; */
  margin-right: 2px;
`;
