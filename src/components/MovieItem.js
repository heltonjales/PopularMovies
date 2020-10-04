import React, { Component } from 'react';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import Rating from './Rating.js';

const Area = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-bottom: 20px;
    border-radius: 20px;
    padding: 15px;
    flex-direction: row;
`;
const Avatar = styled.Image`
    width: 88px;
    height: 100px;
    border-radius: 20px;
`;
const InfoArea = styled.View`
    margin-left: 20px;
    justify-content: space-between;
`;
const MovieTitle = styled.Text`
    font-size: 17px;
    font-weight: bold;
    width:230px;
`;
const SeeProfileButton = styled.View`
    width: 85px;
    height: 26px;
    border: 1px solid #CC0000;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;
const SeeProfileButtonText = styled.Text`
    font-size: 13px;
    color: #000;
`;

const AreaRatingFavorite = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const FavoriteButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
    align-items: center;
`;

const IMAGE_DOMAIN_URL = 'https://image.tmdb.org/t/p/w500/';

export default ({data}) => {
    const navigation = useNavigation();
    const handleClick = () => {  
    navigation.navigate('Movie', {
            id: data.id,
            name: data.title,
            avatar: data.poster_path,
            rating: data.vote_average / 2,
            note: data.vote_average 
    });
  }

    return(
        <Area onPress={handleClick}>
            <Avatar source={{uri: IMAGE_DOMAIN_URL + data.poster_path }} />
            <InfoArea>
                <MovieTitle numberOfLines={2}>{data.title}</MovieTitle>
                <Rating 
                        stars={data.vote_average / 2} 
                        note={data.vote_average}
                        showNumber={true} 
                /> 
                <SeeProfileButton>
                  <SeeProfileButtonText>Descricão</SeeProfileButtonText>
                </SeeProfileButton> 
                  
            </InfoArea>
        </Area>
    );

}