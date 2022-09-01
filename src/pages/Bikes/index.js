import React from 'react';
import {  Text } from 'react-native';
import { Container, BotaoHome, ViewBotao,Vieww } from './styles';

import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';



export default function Bike() {

  const navigation = useNavigation();

  return (
    <Container>

      <ViewBotao>
        <BotaoHome onPress={() => navigation.navigate('Home')}>

          <Icon
            name='home'
            size={16}
            color={'black'} />

        </BotaoHome>

      </ViewBotao>

    <Vieww>
      <Text>Bikes</Text>
    </Vieww>
    </Container>
  );
}
