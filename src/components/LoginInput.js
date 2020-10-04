import React from 'react';
import styled from 'styled-components/native';

export const InputArea = styled.View`
    width: 90%;
    height: 60px;
    background-color:#FFF;
    margin-bottom: 15px;
    border-radius: 7px;
    flex-direction: row;
    padding-left: 15px;
    align-items:center;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 18px;
    color: #000000;
    margin-left: 10px;
    
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#000000" />
            <Input
                placeholder={placeholder} 
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={password}
            />
        </InputArea>
    );
}