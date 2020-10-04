import React, { useState } from 'react';

import {
    Container,
    Scroller,
    HeaderArea,
    HeaderTitle,
    SearchButon,
    
    MovieArea,
    MovieInput,
    MovieFinder,
    LoadingIcon

} from './styles';

import MyMovieIcon from '../../images/procurar.svg';
import ApiMovies from '../../ApiMovies';
import MovieItem from '../../components/MovieItem';

export default () => {

  const [movieText, setMovieText] = useState('');
  const [lista, setLista] = useState(null);
  const [loading, setLoading] = useState(false);

  async function getSearchMovies() {
    setLoading(true);

    if (movieText.length > 0 ) {
      let response = await ApiMovies.getSearch(`${movieText}`);
      setLista(response);
    } else {
      alert ('Digite o nome do filme');
    }

    setLoading(false);
  }

  return (
    <Container>
      <Scroller>

        <HeaderArea>
          <HeaderTitle>Busca</HeaderTitle>
          <SearchButon>
          
          </SearchButon>
        </HeaderArea>

        <MovieArea>
          <MovieInput 
            placeholder="Digite o seu filme"
            placeholderTextColor="#000000"
            value={movieText}
            onChangeText={t=>setMovieText(t)}
            />
          <MovieFinder onPress={getSearchMovies}>
            <MyMovieIcon width="24" height="24" fill="#000000" />
          </MovieFinder>
        </MovieArea>

        {loading &&
          <LoadingIcon size="large" color="#CC0000" />
        }

        {lista && lista.results.map((item, k)=>(
            <MovieItem key={k} data={item} />  
          ))}     

      </Scroller>
    </Container>
  );
}