import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textbold}>Jirat Kaennak</Text>
      <Text>Mr.Jirat Kaennak</Text>
      <StatusBar style="auto" />
    </View>
  );
}

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
