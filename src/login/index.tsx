import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, InputGroup, Input, Button, Icon, View } from 'native-base';

import { replaceRoute } from '../shared/actions/route';
import { setUser } from './login.actions';
import styles from './styles';

const background = require('../assets/images/shadow.png');

interface Props {
  setUser(name: string)
  replaceRoute(route: string)
}

interface State {
  name: string
}

// todo https://github.com/browniefed/react-native-screens/blob/master/app/screens/login/login1.js

function mapDispatchToProps(dispatch) {
  return {
    setUser: name => dispatch(setUser(name)),
    replaceRoute: route => dispatch(replaceRoute(route))
  };
}


@connect(null, mapDispatchToProps)
export default class Login extends Component<Props, State> {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  setUser(name) {
    this.props.setUser(name);
  }

  replaceRoute(route) {
    this.setUser(this.state.name);
    this.props.replaceRoute(route);
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                <InputGroup style={styles.input}>
                  <Icon name="ios-person" />
                  <Input placeholder="EMAIL" onChangeText={name => this.setState({ name })} />
                </InputGroup>
                <InputGroup style={styles.input}>
                  <Icon name="ios-unlock-outline" />
                  <Input
                    placeholder="PASSWORD"
                    secureTextEntry
                  />
                </InputGroup>
                <Button style={styles.btn} onPress={() => this.replaceRoute('home')}>
                  Login
                </Button>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}

