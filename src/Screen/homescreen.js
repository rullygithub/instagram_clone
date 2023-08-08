import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Header/Header'
import Stories from '../Header/Storie/Stories'

const Homescreen = () => {
  return (
    <View style={styles.container}>
      <Header/>
      <Stories/>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',

    }
})