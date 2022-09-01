import React from 'react';
import { SafeAreaView, View , TouchableOpacity, Text, StyleSheet } from 'react-native';

export function ActionModal({handleClose}) {
 return (
   <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{flex:1}} onPress={handleClose}></TouchableOpacity>
      <View style={styles.content}>
        <TouchableOpacity style={styles.actionBtn}
         onPress={()=> {}}
        >
            <Text style={styles.actionText}>Adicionar</Text>
        </TouchableOpacity>
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    content:{
        flex:1,
        alignContent:'flex-start',
        justifyContent:'flex-start',
        marginVertical: 20,
        marginLeft:10,
        marginRight:10,
    },
    actionBtn:{
        
        backgroundColor:'#FFF',
        borderRadius: 6,
        padding: 8,
        borderColor: 'rgba(0,0,0, 0.2)',
        shadowColor:'rgba(0,0,0, 0.2)',
        shadowOffset:{
            width: 0,
            height: 2,
        },
        elevation:5,


    },
    actionText:{
        textAlign:'center',
        fontWeight:'bold',
        color:'black',

    }
})