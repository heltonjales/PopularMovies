import React, { Component, useEffect, useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { 
  View, 
  KeyboardAvoidingView, 
  TextInput, 
  Image, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView
} from 'react-native';

import PopularMovies from '../../Api';
import firebase from '../../FirebaseConnection';
import { UserContext } from '../../contexts/UsersContext';

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
          telefone: telefone  
        });

        

        let token = firebase.auth().currentUser.uid;
        AsyncStorage.setItem('token', token);

        firebase.database().ref('usuarios').child(token).once('value')
        .then((snapshot)=>{
          let nome = snapshot.val().nome;
          console.log('Nome', nome);
          userDispatch({
            type: 'setName',
            payload:{
              name: nome
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
    <ScrollView>  
    <KeyboardAvoidingView style={styles.background}>
     
      <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
        style={{
            width:50,
            height:50
        }} 
        source={require('../assets/logo1.png')}  
        />
      </View>  
        <TextInput 
          style={styles.input}
          placeholder="Nome"
          autoCorrect={false}
          value={nome}
          onChangeText={(n)=>setNomeText(n)}        
        />

        <TextInput 
          style={styles.input}
          placeholder="E-mail"
          autoCorrect={false}
          value={email}
          onChangeText={(e)=>setEmailText(e)}        
        />

        <TextInput 
          style={styles.input}
          placeholder="Telefone"
          autoCorrect={false}
          value={telefone}
          onChangeText={(t)=>setTelefoneText(t)}        
        />
       
        <TextInput 
          style={styles.input}
          secureTextEntry={true}
          placeholder="Senha"
          autoCorrect={false}
          value={senha}
          onChangeText={(s)=>setSenhaText(s)}        
        />

        <TextInput       
          style={styles.input}
          placeholder="Repetir Senha"
          secureTextEntry={true}
          autoCorrect={false}
          value={repetirSenha}
          onChangeText={(r)=>setrepetirSenhaText(r)}        
        />
     

      <TouchableOpacity style={styles.btnSubmit} onPress={cadastrar}>
        <Text style={styles.SubmitText}>Cadastrar</Text>  
      </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#000'
  },
  containerLogo:{
    justifyContent:'center', 
    bottom: 30 
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom: 260,
    top:140
  },
  input:{
    backgroundColor:'#FFF',
    width:'90%',
    marginBottom:15,
    color:'#222',
    fontSize:17,
    borderRadius:7,
    padding:10
  },
  btnSubmit:{
    backgroundColor: '#CC0000',
    width:'90%',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:7
  },
  SubmitText:{
    color:'#FFF',
    fontSize:18
  }
});