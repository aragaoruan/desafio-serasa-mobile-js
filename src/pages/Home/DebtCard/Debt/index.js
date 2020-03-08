import React from 'react';

import {
  Container,
  TitleDesciption,
  DescriptionContainer,
  Image,
  ValuesContainer,
  OldValue,
  NewValue,
  ButtonContainer,
  ButtonDebit,
} from './styles';

export default function Debit() {
  return (
    <>
      <Container>
        <TitleDesciption>Você possuí uma pendência com</TitleDesciption>

        <DescriptionContainer>
          <Image
            source={{
              uri: 'https://i.ya-webdesign.com/images/xbox-one-icon-png-2.png',
            }}
          />
          <ValuesContainer>
            <OldValue>R$280,00</OldValue>
            <NewValue>por R$79,90</NewValue>
          </ValuesContainer>
        </DescriptionContainer>
      </Container>
      <ButtonContainer>
        <ButtonDebit>Negociar Agora</ButtonDebit>
      </ButtonContainer>
    </>
  );
}
