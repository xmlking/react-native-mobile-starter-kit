import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import { openDrawer } from '../shared/actions/drawer';
import { popRoute } from '../shared/actions/route';
import styles from './styles';

interface Props {
  popRoute:Function,
  openDrawer: Function,
  name: string,
  index: number,
  list: [string],
}

interface State {
}

function mapDispatchToProps(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

function mapStateToProps(state) {
  return {
    name: state.user.name,
    index: state.list.selectedIndex,
    list: state.list.list,
  };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class Blank extends Component<Props, State> {

  popRoute() {
    this.props.popRoute();
  }

  render() {
    const { props: { name, index, list } } = this;

    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>{(name) ? this.props.name : 'Blank Page'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Text>
            {(!isNaN(index)) ? list[index] : 'Create Something Awesome . . .'}
          </Text>
        </Content>
      </Container>
    );
  }
}


