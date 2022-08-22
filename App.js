import 'react-native-gesture-handler'
import React from 'react';
import { Text } from 'react-native';

import { Container, Textohome, Botao, Botao2, ViewHome, Bode, ViewBotao } from './src/pages/Home/styles';

export default function teemocar() {
  return (
    <Container>

      <ViewHome>
        <Bode
          source={require('./images/bike.png')}
        />

        <Textohome>SUA NOVA BICICLETA</Textohome>

      </ViewHome>


      <ViewBotao>
        <Botao>
          <Text style={{ textAlign: 'center' }}>Cadastrar nova bicicleta</Text>
        </Botao>

        <Botao2>
          <Text style={{ textAlign: 'center',color:'white' }}>Vizualizar bicicleta </Text>
        </Botao2>
      </ViewBotao>


    </Container>
  );
}