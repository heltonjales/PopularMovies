import React, { useState, useEffect, useContext, Component } from 'react';
import { UserContext } from '../../contexts/UsersContext';
import { useNavigation } from '@react-navigation/native';
import { 
  Container,
  HeaderArea,
  HeaderTitle,
  SearchButton,
  ListArea,
  UserName,
  Scroller
} from './styles';

import SearchIcon from '../../images/procurar.svg';
import MovieItem from '../../components/MovieItem';
import ApiMovies from '../../ApiMovies';

export default () => {
  const { state:user } = useContext(UserContext); 

  const navigation = useNavigation();
  const [lista, setStateLista] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    getAllMovies();
  }, []);

async function getAllMovies() {
  let response = await ApiMovies.gelAllMovies(`${page}`);
    
  setStateLista(response);
}

return(
    <Container>
      <Scroller>
        {user.name != '' ? 
          <UserName>Bem-vindo(a), {user.name}</UserName>
          :
          <UserName>Bem-vindo</UserName>
        }
        <HeaderArea>
            <HeaderTitle numberOfLines={2}>Encontre seu filme favorito</HeaderTitle>
            <SearchButton onPress={()=>navigation.navigate('Search')}>
              <SearchIcon width="26" height="26" fill="#FFFFFF" />
            </SearchButton>
        </HeaderArea> 

        <ListArea>
          {lista && lista.results.map((item, k)=>(
            <MovieItem key={k} data={item} />  
          ))}     
        </ListArea>
        </Scroller>         
    </Container>
    );
  }

