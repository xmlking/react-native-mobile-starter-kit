import React, { Component } from 'react';
import { View } from 'native-base';
import { Navigator } from 'react-native';

interface Props {
  navigator: Navigator
}

type State = any;

export default class Splash extends Component<Props, State> {

  componentWillMount() {
    const navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'index',
      });
    }, 1500);
  }

  render() {
    return (
      <View />
    );
  }
}
