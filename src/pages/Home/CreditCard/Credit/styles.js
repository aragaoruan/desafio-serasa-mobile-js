import styled from 'styled-components/native';

import Button from '~/components/Button';
import { fonts } from '~/styles';

export const Container = styled.View`
  flex-direction: column;
  width: 100%;
`;

export const TitleDesciption = styled.Text`
  margin-top: 10px;
  font-size: ${fonts.regular}px;
`;

export const DescriptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-top: 15px;
  align-items: flex-end;
`;

export const Image = styled.Image`
  height: 50px;
  width: 80px;
  resize-mode: contain;
`;

export const ValuesContainer = styled.View`
  margin: 10px;
`;

export const OldValue = styled.Text`
  font-size: 12px;
  text-align: right;
  color: #c1c1c1;
`;

export const NewValue = styled.Text`
  font-size: 18px;
  color: #5c5e5c;
`;

export const ButtonContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ButtonDebit = styled(Button)`
  padding: 10px;
`;
