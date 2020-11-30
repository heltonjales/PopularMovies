import React from 'react';
import styled from 'styled-components/native';


export const Scroller = styled.ScrollView`
    flex:1;
`;
export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
    flex:1;
    align-items: center;
    justify-content: center;
    backgroundColor: #000;
`;
export const Container = styled.View`
   flex:1;
   align-items: center;
   justify-content: center;
   width: 90%;
   padding-bottom: 204px;
   margin-top:100px;
   
`;
export const Image = styled.Image`
    width:100px;
    height:100px;
    margin-bottom: 40px;
`;
export const TextTitle = styled.Text`
    color: #FFF;
    font-size:24px;
    font-Weight: bold;
    padding: 30px;
`;
export const RecoveryButton = styled.TouchableOpacity`
    background-color: #CC0000;
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
`;
export const TextButton = styled.Text`
    color: #FFF;
    font-size: 18px;
`;

