import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex:1;
    background-color:#000;
`;

export const Scroller = styled.ScrollView`
    flex:1;
    padding:20px;
`;

export const HeaderArea = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const UserName = styled.Text`
    font-size: 14px;
    color: #FFF;
    font-weight: bold;
`;

export const HeaderTitle = styled.Text`
    width: 250px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
`;
export const SearchButton = styled.TouchableOpacity`
    width: 26px;
    height: 26px;
`;

export const ListArea = styled.View`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const EmptyWarning = styled.Text`
    text-align: center;
    margin-top: 30px;
    color: #FFF;
    font-size: 14px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 30px;
`;