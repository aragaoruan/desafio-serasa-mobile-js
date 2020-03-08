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

export default function Proposal() {
  return (
    <>
      <Container>
        <TitleDesciption>Plano de proteção do RG</TitleDesciption>

        <DescriptionContainer>
          <Image
            source={{
              uri:
                'https://icon-icons.com/icons2/1732/PNG/48/iconfinder-securityprotectlockshield46-4021440_113126.png',
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
