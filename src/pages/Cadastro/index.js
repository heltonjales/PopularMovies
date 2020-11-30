import React, { Component, useEffect, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import { 
  Scroller,
  KeyboardAvoidingView,
  Container,
  ContainerLogo,
  Image,
  CadastraUsuario,
  CadastraUsuarioTexto
} from './styles';

import InputArea from '../../components/LoginInput';
import { mask } from 'remask';
import PopularMovies from '../../Api';
import firebase from '../../FirebaseConnection';
import { UserContext } from '../../contexts/UsersContext';

import EmailIcon from '../../images/email.svg';
import LockIcon from '../../images/lock.svg';
import UserIcon from '../../images/person.svg';
import SmartPhoneIcon from '../../images/smartphone.svg';

export default () => { 
  const { dispatch: userDispatch } = useContext(UserContext);
  const navigation = useNavigation();
  
  const [nome, setNomeText] = useState('');
  const [email, setEmailText] = useState('');
  const [telefone, setTelefoneText] = useState('');
  const [senha, setSenhaText] = useState(''); 
  const [repetirSenha, setrepetirSenhaText] = useState(''); 
  
  useEffect(()=>{
    PopularMovies.logout();
  }, []);

function cadastrar (){
  if(nome != '' && email != '' && telefone != '' && senha != '' && repetirSenha != '') {   
    if (senha == repetirSenha) {
      PopularMovies.registerUser(email, senha).catch((error)=>{
        alert(error.code);
      });
    } else {
        alert('A senha não pode ser diferente');
    }

    PopularMovies.addAuthListener((user)=>{
      if(user){
        firebase.database().ref('usuarios').child(user.uid).set({
          nome: nome,
          telefone: telefone,
          email: email  
        });
      
        let token = firebase.auth().currentUser.uid;
        AsyncStorage.setItem('token', token);

        firebase.database().ref('usuarios').child(token).once('value')
        .then((snapshot)=>{
          let nome = snapshot.val().nome;
          let telefone = snapshot.val().telefone;
          let email = snapshot.val().email;
          userDispatch({
            type: 'setName',
            payload:{
              name: nome,
              phone: telefone,
              mail: email
            }
          });
        });
        alert('Usuário criado com sucesso!');
      }
    });
  } else {
    alert('Preencha todos os campos!')
  }
}

return (
  <Scroller>  
    <KeyboardAvoidingView>
      <Container>
        <ContainerLogo>
        <Image source={require('../assets/logo1.png')} />
        </ContainerLogo>  
          <InputArea 
            IconSvg={UserIcon}
            placeholder="Nome"
            autoCorrect={false}
            value={nome}
            onChangeText={e=>setNomeText(e)}  
          />

          <InputArea 
            IconSvg={EmailIcon}
            placeholder="E-mail"
            autoCorrect={false}
            value={email}
            onChangeText={(e)=>setEmailText(e)}        
          />

          <InputArea 
            IconSvg={SmartPhoneIcon}
            placeholder="Telefone"
            autoCorrect={false}
            value={mask(telefone,['(99)9.9999-9999'])}
            onChangeText={(t)=>setTelefoneText(t)}        
          />
        
          <InputArea 
            IconSvg={LockIcon}
            password={true}
            placeholder="Senha"
            autoCorrect={false}
            value={senha}
            onChangeText={(s)=>setSenhaText(s)}     
          />

          <InputArea 
            IconSvg={LockIcon}      
            placeholder="Repetir Senha"
            password={true}
            autoCorrect={false}
            value={repetirSenha}
            onChangeText={(r)=>setrepetirSenhaText(r)}        
          />
        <CadastraUsuario  onPress={cadastrar}>
          <CadastraUsuarioTexto>Cadastrar</CadastraUsuarioTexto>  
        </CadastraUsuario>
      </Container>
    </KeyboardAvoidingView>
  </Scroller>
  )
}
