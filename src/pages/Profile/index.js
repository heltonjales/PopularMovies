import React, { useState, useContext, useEffect } from 'react';
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
import { UserContext } from '../../contexts/UsersContext';
import EmailIcon from '../../images/email.svg'
import UserIcon from '../../images/person.svg'
import SmartphoneIcon from '../../images/smartphone.svg'
import InputArea from '../../components/LoginInput';
import firebase from '../../FirebaseConnection';
import RNFetchBlob from 'react-native-fetch-blob';
import PopularMovies from '../../Api';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;
const Fetch = RNFetchBlob.polyfill.Fetch
window.fetch = new Fetch({
    auto : true,
    binaryContentTypes : [
        'image/',
        'video/',
        'audio/',
        'foo/',
    ]
}).build()

export default () => {
  const { state:user } = useContext(UserContext); 
  const navigation = useNavigation();

  const [foto, setFoto] = useState({});
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const Logout = async () => {
    await firebase.auth().signOut();
    navigation.reset({
      index:0,
      routes:[{name:'Login'}]
    });
  }
  
  useEffect(()=>{
    setNome(user.name);
    setTelefone(user.phone);
    setEmail(user.mail);
    getAvatar();
  },[]);
  

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
          
          firebase.auth().onAuthStateChanged((user)=>{
            if(user){
              let uri = response.uri.replace('file://', '');
              let imagem = firebase.storage().ref().child('avatar').child(user.uid);
              let mime = 'image/jpeg';

              RNFetchBlob.fs.readFile(uri, 'base64')
              .then((data)=>{
                return RNFetchBlob.polyfill.Blob.build(data, {type:mime+';BASE64'});
              })
              .then((blob)=>{
                imagem.put(blob, {contentType:mime})
                .then(()=>{
                  blob.close();
                  imagem.getDownloadURL().then((url)=>{
                    setFoto({uri:url});
                  });
                  alert("Processo concluído!");
                })
                .catch((error)=>{
                  alert(error.code);
                })
              });
              setFoto(foto);    
            }  
          })
      }
  });
};

const getAvatar = () => {
  PopularMovies.addAuthListener((user)=>{
    if (user) {
      let token = firebase.auth().currentUser.uid;
      firebase.storage().ref().child('avatar').child(token).getDownloadURL().then((url)=>{
        setFoto({uri:url});
      });
    } 
  })
}
return (
    <Container>
      <Text>Profile</Text>
      
      <ImageArea onPress={selectImage}>
        <Foto source={foto} />
      </ImageArea>

      <InputArea 
          IconSvg={UserIcon}
          placeholder="Nome"
          autoCorrect={false}
          value={nome}
          onChangeText={e=>setNome(e)}        
      />

      <InputArea 
          IconSvg={SmartphoneIcon}
          placeholder="Telefone"
          autoCorrect={false}
          value={telefone}
          onChangeText={e=>setTelefone(e)}        
      />

      <InputArea 
          IconSvg={EmailIcon}
          placeholder="E-Mail"
          autoCorrect={false}
          value={email}
          onChangeText={e=>setEmail(e)}        
      />
      <LogoutButton onPress={Logout}>
        <MessagenButtonText>SAIR</MessagenButtonText>
      </LogoutButton>

    </Container>
  );
}

