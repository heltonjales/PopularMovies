import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
  Container,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  ListArea,
  Scroller
} from './styles';

import firebase from '../../FirebaseConnection';
import PopularMovies from '../../Api';
import SearchIcon from '../../images/procurar.svg';
import MovieItem from '../../components/MovieItem';

export default () => {

  const navigation = useNavigation();
  const [listaIdFavoritos, setStateListaIdFavoritos] = useState([]);
  const [listaFavoritosFull, setListaFavoritosFull] = useState(null);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    getFavorite();
  }, []);

  function getFavorite() {
    setLoading(true);
    setStateListaIdFavoritos([]);
    PopularMovies.addAuthListener((user)=>{
      if(user) {
        let token = firebase.auth().currentUser.uid;
        firebase.database().ref('favoritos').child(token).on('value', (snapshot)=>{   
          snapshot.forEach((childItem)=>{
            listaIdFavoritos.push({
              id: childItem.val().id,
              title: childItem.val().title,
              poster_path: childItem.val().poster_path,
              vote_average: childItem.val().vote_average,
              status: childItem.val().status  
            })
          });  
        setListaFavoritosFull(listaIdFavoritos);
        });
      }
    });
    setLoading(false);
  }

return(
    <Container>
      <Scroller refreshControl={
          <RefreshControl 
            refreshing={loading} 
            onRefresh={getFavorite} />
        }> 
        <HeaderArea>
            <HeaderTitle>Filmes favorito</HeaderTitle>
            <SearchButton onPress={()=>navigation.navigate('Search')}>
              <SearchIcon width="26" height="26" fill="#FFFFFF" />
            </SearchButton>
        </HeaderArea>
        <ListArea>
        {listaFavoritosFull && listaFavoritosFull.map((item, k)=>(
            <MovieItem key={k} data={item} />  
        ))}     
        </ListArea>
        </Scroller>         
    </Container>
    );
  }

