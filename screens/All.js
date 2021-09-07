import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Divider, NativeBaseProvider } from 'native-base';

export default function All (){
  return (
    <NativeBaseProvider>
      <View>
      <View style={StyleSheet.container}>
        <Text styles={styles.text}>All</Text>
      </View>
      <View>
        <View style={StyleSheet.flex} >
          <Text styles={styles.title} >Title</Text>
          <Text styles={styles.date} >Date</Text>
        </View>
        <Divider my={2} bg="#e0e0e0"/>
        <View style={StyleSheet.flex} >
          <Text styles={styles.description}>Description</Text>
        </View>
        <Divider my={2} bg="#e0e0e0"/>
        <View style={StyleSheet.flex} >
          <Text styles={styles.description}>Description</Text>
        </View>
        <Divider my={2} bg="#e0e0e0"/>
        <View style={StyleSheet.flex} >
          <Text styles={styles.description}>Description</Text>
        </View>
      </View>

      </View>
    </NativeBaseProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: '#e0e0e0',
    border: '1px solid #bdbdbd',
  },
  text: {
    fontSize: 24,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20
  },
  date: {
    fontSize: 20
  },
  description: {
    padding: 20
  }
})
