import { colors } from '~/styles/';

export function backgroudColor(number) {
  if (number <= 30) return colors.pontuacao_baixa.backgroundcolor;

  if (number > 30 && number <= 60)
    return colors.pontuacao_media.backgroundcolor;

  if (number > 60) return colors.pontuacao_alta.backgroundcolor;

  return colors.pontuacao_baixa.backgroundcolor;
}

export function progessColor(number) {
  if (number <= 30) return colors.pontuacao_baixa.primaryColor;

  if (number > 30 && number <= 60) return colors.pontuacao_media.primaryColor;

  if (number > 60) return colors.pontuacao_alta.primaryColor;

  return colors.pontuacao_baixa.primaryColor;
}
