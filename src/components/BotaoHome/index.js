import React from 'react';

import { BotaoHome, ViewBotao } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';

const navigation = useNavigation();

export default function BotaoHome2(){

    <ViewBotao>
          <BotaoHome onPress={() => navigation.navigate('Home')}>

            <Icon
              name='home'
              size={16}
              color={'black'} />

          </BotaoHome>
    </ViewBotao>

}