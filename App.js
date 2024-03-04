import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import React from 'react';
import Header from './src/components/Header';
import Albumlist from './src/components/Albumlist'
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto"/>
      <Header/>
      
      <Image style={styles.img} source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW8-MAV2EsZg0_gThikAbew6_JF-yuANy-Jg&usqp=CAU'}} 
              
      />
      <Albumlist />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C9F9FF',
    alignItems: 'center',
    
  },
  text:{
    fontSize:20,
    color:'#fff'
  },
  img:{
    width:50,
    height:50,
    
  }
});
