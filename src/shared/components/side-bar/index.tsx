import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';

import { setIndex } from '../../actions/list';
import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';
import myTheme from '../../styles/base-theme';
import styles from './styles';

interface Props {
  closeDrawer: Function,
  setIndex: Function,
  replaceOrPushRoute: Function,
}

type State = any;

function mapDispatchToProps(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
    setIndex: index => dispatch(setIndex(index)),
  };
}

@connect(null, mapDispatchToProps)
export default class SideBar extends Component<Props, State> {

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.setIndex(undefined);
    this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Content theme={myTheme} style={styles.sidebar} >
        <List>
          <ListItem button onPress={() => this.navigateTo('home')} >
            <Text>Home</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('blank')} >
            <Text>Blank Page</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('counter')} >
            <Text>Counter Page</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}


