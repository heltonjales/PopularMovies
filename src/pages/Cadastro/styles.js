import React from 'react';
import styled from 'styled-components/native';

export const Scroller = styled.ScrollView`
    flex:1;
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
    background-color: #000;   
`;
export const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin-top:49px;
    padding-bottom: 56px;
`;
export const ContainerLogo = styled.View`
    justify-content: center; 
    margin-bottom: 30px; 
`;
export const Image = styled.Image`
    width: 100px;
    height: 100px;   
`;
export const TextInput = styled.TextInput`
    background-color: #FFF;
    width: 90%;
    margin-bottom: 15px;
    color: #222;
    font-size: 17px;
    border-radius: 7px;
    padding: 10px;
`;
export const CadastraUsuario = styled.TouchableOpacity`
    background-color: #CC0000;
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
`;
export const CadastraUsuarioTexto = styled.Text`
    color: #FFF;
    font-size:18px;
`;


