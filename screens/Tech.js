import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

export default function Tech () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tech</Text>
    </View>
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
  }
})
