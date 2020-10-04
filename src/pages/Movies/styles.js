import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #FFF;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
`;

export const SwipeDot = styled.View`
    width: 10px;
    height: 10px;
    background-color: #FFFFFF;
    border-radius: 5px;
    margin: 3px;
`;

export const SwipeDotActive = styled.View`
    width: 10px;
    height: 10px;
    background-color: #000000;
    border-radius: 5px;
    margin: 3px;
`;
export const SwipeItem = styled.View`
    flex: 1;
    background-color: #FFF;

`;
export const SwipeImage = styled.Image`
    width: 100%;
    height: 240px;  
`;

export const FakeSwiper = styled.View`
`;

export const PageBody = styled.View`
    background-color: #FFFFFF;
    border-top-left-radius: 50px;
    margin-top: -50px;
    min-height: 400px;
`;

export const UserInfoArea = styled.View`
    flex-direction: row;
    margin-top: -40px;
`;

export const UserAvatar = styled.Image`
    width: 110px;
    height: 150px;
    border-radius: 20px;
    margin-left: 30px;
    margin-right: 20px;
    border-width: 4px;
    border-color: #FFFFFF;
    margin-top:-30px;
`;

export const UserInfo = styled.View`
    flex:1
    justify-content: flex-end;
`;

export const UserInfoName = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const UserFavButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    background-color: #FFFFFF;
    border: 2px solid #999999;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    margin-left: 10px;
    margin-top: 20px;
`;

export const ElencoArea = styled.View`
    flex-direction: row;
`;

export const SinopseArea = styled.View`
    flex:1
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
    margin-top: -15px;
`;

export const SinopseTitle = styled.Text`
    color: #000000;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
`;
    
export const SinopseInfo = styled.Text`
    color: #000000;
    text-align:justify;
    font-size: 16px;
    margin-bottom: 20px;
`;

export const ElencoItem = styled.View`
    border-radius: 10px;
    height:200px;
`;

export const ElencoAvatar = styled.Image`
    margin-left:5px;
    width: 120px;
    height: 120px;
    border-radius: 5px;
    border-radius: 60px;
`;

export const ElencoPersonName = styled.Text`
    width:130px;
    margin-top: 2px;
    margin-right: 30px;
    font-size: 14px;
    text-align:center; 
`;

export const ActorName = styled.Text`
    width:130px;
    margin-top: 5px;    
    margin-right: 30px;
    color: #000000;
    font-size: 16px;
    font-weight:bold;
    text-align:center;
`;

export const ElencoTitle = styled.Text`
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
    margin-top:-5px;
`;

export const ItemMovieArea = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
    margin-top: -15px;
`;

export const InfosMovieAreaLeft = styled.View`
    flex:1
    margin-top:20px;
    margin-left:20px;
    margin-bottom:20px;
`;

export const InfosMovieAreaRight = styled.View`
    flex:1
    margin-top:20px;
    margin-left: 50px;
    margin-bottom:20px;
`;

export const GenresArea = styled.View`
    margin-top: 20px;
    margin-left: 20px;
    flex-direction: row;
`;

export const MoviesGenres = styled.Text`
    font-size: 14px;
    font-weight: bold;
`;

export const DirectorMovies = styled.Text`
    width: 230px;
    font-size: 14px;
`;

export const ReleaseDate = styled.Text`
    font-size: 14px;    
`;

export const TimeMovie = styled.Text`
    font-size: 14px;
`;

export const BoldText = styled.Text`
    font-size: 15px;
    font-weight:bold;
`;

export const Scroller2 = styled.ScrollView`
    flex:1;
    padding:20px;
`;

export const TagLineArea = styled.View`
    flex:1;
`;

export const TagLineInfo = styled.View`
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px; 
    margin-top: -15px;
    margin-bottom: 30px;
`;

export const TaglineText = styled.Text`
    font-size:16px;
    font-style: italic;
    text-align:justify;
`;

export const FakeTaglineInfo = styled.View`
    margin-bottom: -20px;
`;

