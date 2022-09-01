import 'react-native-gesture-handler'
import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import { Container, Textohome, Botao, Botao2, ViewHome, Imagem, ViewBotao } from './styles';


export default function Home() {



    const navigation = useNavigation();

    return (
        <Container>

            <ViewHome>
                <Imagem source={require('../../../images/bike.png')} />
                <Textohome>SUA BIKE AQUI</Textohome>
            </ViewHome>


            <ViewBotao>

                <Botao
                    onPress={() => navigation.navigate('Cadastro')}>

                    <Text style={{ textAlign: 'center' }}>Cadastrar nova bicicleta</Text>
                </Botao>

                <Botao2 onPress={() => navigation.navigate('Bike')}>
                    <Text style={{ textAlign: 'center', color: 'white' }}>Vizualizar bicicletas</Text>
                </Botao2>
            </ViewBotao>


        </Container>
    );
}