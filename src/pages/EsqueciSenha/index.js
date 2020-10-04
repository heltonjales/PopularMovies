import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native';
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

import firebase from '../../FirebaseConnection';

export default class EsqueciSenha extends Component {
  constructor(Props){
    super(Props);
    this.state = {
      email:''
    }

    this.recuperarSenha = this.recuperarSenha.bind(this);
  }

recuperarSenha(){
  firebase.auth().sendPasswordResetEmail(this.state.email).catch((error)=>{
    alert(error.code);
  });
  alert('Um Link foi enviado para o e-mail cadastrado.');
  this.props.navigation.navigate('Login');  
}
  
render(){
  return (
    <ScrollView> 
    <KeyboardAvoidingView style={styles.background}>
    
      <View style={styles.container}>
        <Image
        style={{
            width:50,
            height:50,
            bottom: 40
        }} 
        source={require('../assets/logo1.png')}  
        />
        <Text style={styles.TitleRecovery}>
          Recuperação de Senha
        </Text>
        <TextInput 
          style={styles.input}
          placeholder="E-Mail"
          autoCorrect={false}
          onChangeText={(email)=>this.setState({email})}        
        />
    
      <TouchableOpacity 
        style={styles.btnSubmit}
        onPress={this.recuperarSenha}
      >
        <Text style={styles.SubmitText}>Enviar</Text>  
      </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
    </ScrollView>
  );
}
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#000'
  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom: 520,
    top: 170
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
  },
  TitleRecovery:{
    color:'#FFF',
    fontSize:24,
    fontWeight: "bold",
    padding: 30
  }
});