import styled from "styled-components/native";

export const Container= styled.View`
background-color: #D8BFD8;
height: 100%;
`;

export const TextoBotao = styled.Text`
justify-content: center;
text-align:center;
color: black;
font-weight: bold;
`;


export const ViewBotao= styled.View`
justify-content: space-between;
align-items: center;
flex-direction: row;
padding: 10px;
`;


export const Botao = styled.TouchableOpacity`
background-color: #7FFF00;
padding: 2%;
border-radius: 9px;
margin: 10px;
`;

export const BotaoHome = styled.TouchableOpacity`
background-color: #7FFF00;
padding: 2%;
border-radius: 9px;
`;

export const ViewInput= styled.View`
background-color: #FFD700;
justify-content: center;
align-items: center;
margin: 5px;
`;

export const Input= styled.TextInput`
text-align: center;
justify-content: center;
border-radius: 4px;
height:40px ;
margin:12px;
border-width:1px;
padding: 10px;
background-color: white;
width: 70%;
`;