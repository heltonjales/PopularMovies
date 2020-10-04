import React, {Component, useEffect } from 'react';
import {View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PopularMovies from '../../Api';

export default () => {
    
        const navigation = useNavigation();
        const checkToken = () => {
            PopularMovies.addAuthListener((user)=>{
                if (user) {
                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });
                } else {
                    navigation.reset({
                        routes:[{name:'Login'}]
                    });
                }
            });
        }    
        
        useEffect(()=>{
            checkToken();
        }, []);

        return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                style={{
                    width:200,
                    height:200
                }} 
                source={require('../assets/logo1.png')}  
                />
            </View>
            <View styles={styles.loading}>
                <ActivityIndicator size="large" color="#CC0000"/>
            </View>    
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#000'
    },
    logo:{
        paddingTop:50,
        paddingBottom:50   
    },
    loading:{
        backgroundColor:'#000'
    }
})