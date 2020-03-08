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

export default function Credit() {
  return (
    <>
      <Container>
        <TitleDesciption>
          Encontramos uma oferta de cartao de credito
        </TitleDesciption>

        <DescriptionContainer>
          <Image
            source={{
              uri:
                'https://assets.b9.com.br/wp-content/uploads/2019/01/mastercard-2019.jpg',
            }}
          />
          <ValuesContainer>
            <OldValue>Anuidade Grátis</OldValue>
            <NewValue>Limite de R$2.000,00</NewValue>
          </ValuesContainer>
        </DescriptionContainer>
      </Container>
      <ButtonContainer>
        <ButtonDebit>Ver oferta</ButtonDebit>
      </ButtonContainer>
    </>
  );
}
