import React, {useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { UserContext } from '../../contexts/UsersContext';
import { 
  StyleSheet, 
  Animated,
  Keyboard 
} from 'react-native';

import { 
  Container,
  ContainerLogo,
  LoginButton,
  LoginButtonText,
  RegisterUser,
  RecoveryKey,
  MessagenButtonText
} from './styles';

import PopularMovies from '../../Api';
import firebase from '../../FirebaseConnection';
import InputArea from '../../components/LoginInput';
import EmailIcon from '../../images/email.svg'
import LockIcon from '../../images/lock.svg'

export default function Login({navigation}) {

  const { dispatch: userDispatch } = useContext(UserContext);

  const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x: 1.5, y: 1.5}));
  const [emailText, setEmail] = useState('');
  const [senhaText, setSenha] = useState('');

  useEffect(()=> {
     Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
     Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
        useNativeDriver: true
      }),
      Animated.timing(opacity, {
        toValue:1,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();

  }, []);

  function _keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(logo.y, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true
      }),
    ]).start();
  }

  function _keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 1.5,
        duration: 100,
        useNativeDriver: true
      }),
      Animated.timing(logo.y, {
        toValue: 1.5,
        duration: 100,
        useNativeDriver: true
      }),
    ]).start();
  }

  function logar(){
    
    if (emailText != ''  && senhaText != '') {
      PopularMovies.login(emailText, senhaText).catch((error)=>{
        alert (error.code);
      });
    
      PopularMovies.addAuthListener((user)=>{
        if(user) {
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
            alert('Bem Vinda(a) ' + nome);
          });
        
          navigation.reset({
            routes:[{name:'MainTab'}]
          })
        }

      });
    } else {
      alert ('Campo e-mail e senha são de preenchimento obrigatório.');
    }
  }

  return (
    <Container>
      <ContainerLogo>
        < Animated.Image
        style={{
          transform: 
          [
            {scaleX: logo.x},
						{scaleY: logo.y},
          ],
        }} 
          source={require('../assets/logo1.png')}  
        />
      </ContainerLogo>  

      <Animated.View style={[
        styles.container,
        {
          opacity: opacity,
          transform: [
            {translateY: offset.y}
          ]
        }
        ]}
      >
        <InputArea 
          IconSvg={EmailIcon}
          placeholder="Digite o seu email"
          autoCorrect={false}
          value={emailText}
          onChangeText={e=>setEmail(e)}        
        />

        <InputArea 
          IconSvg={LockIcon}
          placeholder="Digite o sua senha"
          value={senhaText}
          onChangeText={s=>setSenha(s)} 
          password={true}       
          
        />
    
      <LoginButton onPress={logar}>
        <LoginButtonText>LOGIN</LoginButtonText>  
      </LoginButton>

      <RegisterUser onPress={()=> navigation.navigate('Cadastro')}>
        <MessagenButtonText>Ainda não possui conta? Cadastre-se</MessagenButtonText>  
      </RegisterUser>

      <RecoveryKey onPress={()=> navigation.navigate('EsqueciSenha')} >
        <MessagenButtonText>Esqueci a senha</MessagenButtonText>  
      </RecoveryKey>

      </Animated.View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    width:'90%',
    paddingBottom: 0
  },
});