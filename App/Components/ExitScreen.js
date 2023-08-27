import React, {Component} from 'react';
import {BackHandler, View} from 'react-native';

class ExitScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <View></View>;
  }
  componentDidMount() {
    BackHandler.exitApp();
  }
}

export default ExitScreen;
