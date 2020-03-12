# Serasa Consumidor
### Pré requisitos
Acesse a o [github da api](https://github.com/aragaoruan/desafio-sarasa-consumidor-api) siga as instruções para o funcionamento da api.

### Instruções para instalação

Baixe o projeto.
```
git clone https://github.com/aragaoruan/desafio-serasa-consumidor.git
```

Instalando dendencias do projeto.

```
yarn
```
ou
```
npm install
```

duplique o arquivo .env.example
```
API_KEY={o host da sua maquina}
```

rode o projeto

```
react-native run-android
```
ou
```
react-native run-ios
```

## Regras do app
* Caso a pontuação esteja **abaixo de 30**, ele recebe ofertas para negociar suas dívidas;
* Caso sua pontuação esteja entre **31 e 60**, ele está elegível para solicitar crédito, podendo escolher uma das proposta oferecidas;
* Caso sua pontuação esteja **acima de 50**, será apresentado para ele um card com um plano de proteção ao RG;
* Caso sua pontuação esteja **acima de 90**, ele receberá um desconto (%) para obter o seu programa de proteção ao RG.



