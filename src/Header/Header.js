import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require('../../assets/img/name.png')}
        />
      </TouchableOpacity>
      <View style={styles.icon_container}>
        <TouchableOpacity>
            <Image style={styles.icons} source={require('../../assets/icons/add.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <Image style={styles.icons} source={require('../../assets/icons/heart.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
            
        <Image style={styles.icons} source={require('../../assets/icons/chat.png')}/>
        <View style={styles.unreadBadges}>
                <Text style={styles.badgeText}>9</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15
    },
    icon_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icons: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        margin: 10,
    },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  text_header: {
    color: 'white',
  },
  unreadBadges: {
    position: 'absolute',
    backgroundColor: 'red',
    height: 17, 
    width: 20,
    left: 20,
    top: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    zIndex: 99,
  },
  badgeText: {
    color: 'white',
    position: 'absolute',
    top: -2,
  }
});
