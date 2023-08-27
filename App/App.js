import React, {Component} from 'react';
import {View, Text, Button, StatusBar} from 'react-native';
import DrawerStack from './Navigators/DrawerNavigator';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#41916c" barStyle="light-content" />
        <DrawerStack />
      </View>
    );
  }
}

export default App;
