import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Avatar, Divider} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

class SideBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            source={require('../Assets/images/gpgcClg.jpg')}
            resizeMode="center"
            style={styles.headerImage}
          />
        </View>
        <View style={{alignItems: 'center', padding: 5}}>
          <Text style={{fontWeight: '700', fontSize: 14, color: 'white'}}>
            Govt Post Graduate College Kohat
          </Text>
          <Text style={{fontWeight: '700', fontSize: 14, color: 'white'}}>
            GPA Calculator
          </Text>
        </View>
        <Divider style={{backgroundColor: 'black'}} />
        <View style={styles.drawerItems}>
          <DrawerContentScrollView {...this.props}>
            <DrawerItemList {...this.props} />
          </DrawerContentScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#41916c',
  },
  headerContainer: {
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  drawerItems: {
    flex: 1,
  },
});

export default SideBar;
