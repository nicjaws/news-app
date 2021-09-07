import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

export default function Business () {
  return (
    <View>
      <View style={styles.container}>
      <Text style={styles.text}>Business</Text>
    </View>
    <View>
        <View style={StyleSheet.flex} >
          <Text styles={styles.title} >Title</Text>
          <Text styles={styles.date} >Date</Text>
        </View>
        <View style={StyleSheet.flex} >
          <Text styles={styles.description}>Description</Text>
        </View>
      </View>
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
