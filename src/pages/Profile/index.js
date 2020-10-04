import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ImagePicker from 'react-native-image-picker';
import { 
  Container,
  ImageArea,
  Foto,
  LogoutButton,
  MessagenButtonText
} from './styles';

import EmailIcon from '../../images/email.svg'
import UserIcon from '../../images/person.svg'
import SmartphoneIcon from '../../images/smartphone.svg'
import InputArea from '../../components/LoginInput';
import firebase from '../../FirebaseConnection';

export default () => {

  const navigation = useNavigation();

  const [foto, setFoto] = useState({});

  const Logout = async () => {
    await firebase.auth().signOut();
    navigation.reset({
      index:0,
      routes:[{name:'Login'}]
    });
  }

  
  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
        storageOptions: {
        skipBackup: true,
      path: 'images'
      }
    };  
      ImagePicker.launchImageLibrary(options, response => {
        if(response.uri) {
          let foto = {uri:response.uri};
          setFoto(foto);
          
        }
  });
};
console.log(foto);
  return (
    <Container>
      <Text>Profile</Text>
      
      <ImageArea onPress={selectImage}>
        <Foto source={foto} />
      </ImageArea>

      <InputArea 
          IconSvg={UserIcon}
          placeholder="Digite o seu nome"
          autoCorrect={false}
          //value={emailText}
          onChangeText={e=>setEmail(e)}        
      />

      <InputArea 
          IconSvg={SmartphoneIcon}
          placeholder="Digite o seu telefone"
          autoCorrect={false}
          //value={emailText}
          onChangeText={e=>setEmail(e)}        
      />

      <InputArea 
          IconSvg={EmailIcon}
          placeholder="Digite o seu email"
          autoCorrect={false}
          //value={emailText}
          onChangeText={e=>setEmail(e)}        
      />

    
      <LogoutButton onPress={Logout}>
        <MessagenButtonText>SAIR</MessagenButtonText>
      </LogoutButton>

    </Container>
  );
}

