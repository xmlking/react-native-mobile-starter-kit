import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';

import { openDrawer } from '../shared/actions/drawer';
import { replaceRoute, pushNewRoute } from '../shared/actions/route';
import { setIndex } from '../shared/actions/list';

import myTheme from '../shared/styles/base-theme';
import styles from './styles';

interface StateProps {
  name: string,
  list: [string]
}

interface DispatchProps {
  openDrawer()
  replaceRoute(route: string)
  pushNewRoute(route: string)
  setIndex(index: number)
}

type HomeProps = StateProps & DispatchProps;
type State = any;

function mapDispatchToProps(dispatch) {
    //return bindActionCreators(openDrawer, dispatch)
    return {
        openDrawer: () => dispatch(openDrawer()),
        replaceRoute: route => dispatch(replaceRoute(route)),
        pushNewRoute: route => dispatch(pushNewRoute(route)),
        setIndex: index => dispatch(setIndex(index)),
    };
}

function mapStateToProps(state) {
    return {
        name: state.user.name,
        list: state.list.list,
    };
}

@connect<StateProps, DispatchProps, any>(mapStateToProps, mapDispatchToProps)
export default class Home extends Component<HomeProps, State> {

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  pushNewRoute(route, index) {
    this.props.setIndex(index);
    this.props.pushNewRoute(route);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceRoute('login')}>
            <Icon name="ios-power" />
          </Button>

          <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <Grid style={styles.mt}>
            {this.props.list.map((item, i) =>
              <Row key={i}>
                <TouchableOpacity
                  style={styles.row}
                  onPress={() => this.pushNewRoute('blank', i)}
                >
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </Row>
            )}
          </Grid>
        </Content>
      </Container>
    );
  }
}
