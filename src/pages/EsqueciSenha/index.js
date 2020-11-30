import React, { Component, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  Scroller,
  KeyboardAvoidingView,
  Container,
  Image,
  TextTitle,
  RecoveryButton,
  TextButton
} from './styles';

import InputArea from '../../components/LoginInput';
import EmailIcon from '../../images/email.svg';
import firebase from '../../FirebaseConnection';

export default () => {  
const navigation = useNavigation();
const [email, setEmailText] = useState('');

function recuperarSenha(){
  if (email != '') {
    firebase.auth().sendPasswordResetEmail(email).catch((error)=>{
      alert(error.code);
    });
    alert('Um Link foi enviado para o e-mail cadastrado.');
    navigation.navigate('Login');
  } else {
    alert('Informe um e-mail válido')
  }
}
  
return (
    <Scroller> 
      <KeyboardAvoidingView>
        <Container>
          <Image source={require('../assets/logo1.png')} />
          <TextTitle>Recuperação de Senha</TextTitle>
          <InputArea 
            IconSvg={EmailIcon}
            placeholder="E-mail"
            autoCorrect={false}
            value={email}
            onChangeText={(e)=>setEmailText(e)}           
          />
          <RecoveryButton onPress={recuperarSenha}>
            <TextButton>Enviar</TextButton>  
          </RecoveryButton>
        </Container>
      </KeyboardAvoidingView>
    </Scroller>
  );
}
