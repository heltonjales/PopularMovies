import React from 'react';
import styled from 'styled-components/native';


export const Container = styled.SafeAreaView`
    flex:1;
    background-color: #000;
    justify-content: center;
    align-items: center;
`;

export const ImageArea = styled.TouchableOpacity`
    width:150px;
    height:150px;
    border-radius: 75px;
    margin-top: 30px;
    margin-bottom: 50px;
    background-color: #FF0000;   
`;

export const Foto = styled.Image`
    width:150px;
    height:150px;
    border-radius: 75px;
`;

export const LogoutButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    background-color: #CC0000;
    width: 90%;
    height: 50px;
    border-radius: 7px;
`;

export const MessagenButtonText = styled.Text`
    color:#FFF;
    font-size:20px;
    margin-top:10px;
`;