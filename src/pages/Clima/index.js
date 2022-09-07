import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import { Container, BotaoHome, ViewBotao } from './styles';

export default function Clima() {

    const [location, setLocation] = useState('');
    const [clima, setClima] = useState()

    const navigation = useNavigation();


    const getClima = async () => {
          const response =  await api.get('https://api.openweathermap.org/data/2.5/weather?q=bahia&appid=03df13a98740ae340f98c71e84bd0ab7&lang=pt_br&units=metric')
          setClima(response.data.main)
    }


   useEffect(() => {
        getClima()
    }, [])

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

            <View>
                <Text>Temperatura Atual : {clima.temp}  °C</Text>
                <Text>Temperatura Maxima : {'clima'} </Text>
                <Text>Temperatura Minima : x° </Text>
                <Text>Umidade : x° </Text>
            </View>



        </Container>
    );
}