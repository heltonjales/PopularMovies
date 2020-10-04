import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex:1;
    justify-content: center;
    align-items: center;
    background-color:#000;
`;

export const ContainerLogo = styled.View`
    flex:1;
    justify-content:center;
`;

export const LoginButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    margin-bottom: 20px;
    background-color: #CC0000;
    width: 90%;
    height: 50px;
    border-radius: 7px;
`;
export const RegisterUser = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
  
`;
export const RecoveryKey = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;    
`;

export const LoginButtonText = styled.Text`
    color:#FFF;
    font-size:20px;
    margin-top:10px;
`;
export const MessagenButtonText = styled.Text`
    font-size: 16px;
    color: #FFF;
`;


