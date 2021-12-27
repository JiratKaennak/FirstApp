import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Styles from './common-styles'
import ColumnItems from './column-items'

export default function App() {
  return (
    <View style={Styles.container}>
      <Text style={Styles.textTitle}>React Native</Text>
      <Text>Mr.Jirat Kaennak</Text>
      <ColumnItems/>
      <StatusBar style="auto" />
    </View>
  );
}
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#339999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbold:{
    color:'#fff',
    fontSize: 20,
    fontWeight: 'bold',
    border: '5px solid red',
  }
});
*/