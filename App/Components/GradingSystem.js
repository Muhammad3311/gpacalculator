import React, {Component} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

class GradingSystem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 20}}>
        <ScrollView>
          <View style={{marginTop: 20}}>
            <Image
              source={require('../Assets/images/GPA1.png')}
              resizeMode="contain"
              style={{width: 400, height: 500}}
            />
          </View>
          <View style={{marginTop: 20}}>
            <Image
              source={require('../Assets/images/GPA2.png')}
              resizeMode="contain"
              style={{width: 400, height: 500}}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default GradingSystem;
