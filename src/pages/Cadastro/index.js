import React, { useEffect, useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Container, Botao, ViewBotao, TextoBotao, ViewInput, Input, BotaoHome, ViewBotaoHome } from './styles';
import Icon from 'react-native-vector-icons/Feather';

import { ActionModal } from '../../ActionModal';
import { useNavigation } from '@react-navigation/native';

import { Modal } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cadastro() {

  const [visibleModal, setVisibleModal] = useState(false);
  const [nome, setNome] = useState('');
  const [modelo, setModelo] = useState('');
  const [valor, setValor] = useState('');
  const [aro, setAro] = useState('');

  const [value, setValue] = useState('');


  const navigation = useNavigation();

   async function handleAsync(){
    //armazenar valor no asyncStorage
    await AsyncStorage.setItem('@App1', nome)
    getData()

  }

  async function getData(){
    const response = await AsyncStorage.getItem('@App1')
      if(response){
        setValue(response)
      }
  }


useEffect(()=>{
  getData()
},[])


  return (
          
           <Container>
            <ScrollView >
          {/* <Modal animationType='slide' visible={visibleModal}
         transparent={true}
         onRequestClose={() => setVisibleModal(false)}
       >

         <ActionModal  
           handleClose={()=> setVisibleModal(false)}
         />

       </Modal> */}

         <ViewBotao>
           <Botao onPress={handleAsync}>

             <TextoBotao>Cadastrar</TextoBotao>

           </Botao>
           <BotaoHome onPress={() => navigation.navigate('Home')}>

             <Icon
               name='home'
               size={16}
               color={'black'} />

           </BotaoHome>
         </ViewBotao>

         <ViewInput>
           <Text>Nome</Text>
           <Input          
            value={nome}
            onChangeText={(value)=>setNome(value)}
             placeholder="Joana"           
           />

           <Text>Modelo</Text>
           <Input
           
           value={modelo}
             onChangeText={(value)=>setModelo(value)}            
             placeholder="Monark"
             
           />
           <Text>Valor</Text>
           <Input

            value={valor}
             onChangeText={(value)=>setValor(value)}            
             keyboardType="numeric"
             placeholder="R$ 1.500,00"
             
           />
           <Text>Aro</Text>
            <Input
             value={aro}
             onChangeText={(value)=>setAro(value)}           
             keyboardType="numeric"
             placeholder="26'"
           />
           <Text>{value}</Text>
           
         </ViewInput>
         </ScrollView>
         </Container>
    
   );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: "space-around"
  },
  header: {
    fontSize: 36,
    marginBottom: 48
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36
  },
  btnContainer: {
    backgroundColor: "white",
    marginTop: 12
  }
});
