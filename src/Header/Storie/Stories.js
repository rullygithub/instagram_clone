import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { USERS } from '../../data/users'

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {USERS.map((story, index) => (
          <View style={styles.user_box}>
            <Image source={{uri: story.images}}
            style={styles.story}
          />
          <Text style={styles.userText}>{story.user.length > 10 ? story.user.slice(0,9).toLowerCase() + '...' : story.user.toLowerCase()}</Text>
          </View>
        
        ))}
      </ScrollView>
    </View>
  )
}

export default Stories

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  },
  story : {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 7,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
  user_box: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  userText: {
    color: '#ffffff',
    fontSize: 12,
    marginLeft:5 
  }
})