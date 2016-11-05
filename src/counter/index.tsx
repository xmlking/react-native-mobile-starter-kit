import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon } from 'native-base';
import CounterComponent from './components/counter.component';
import * as CounterActions from './counter.actions';
import { openDrawer } from '../shared/actions/drawer';
import { popRoute } from '../shared/actions/route';
import styles from './styles';

interface StateProps {
    counter: number,
    name: string,
}

interface DispatchProps {
    openDrawer()
    popRoute()
}

type CounterContainerProps = StateProps & DispatchProps;
type State = any;

function mapStateToProps(state) {
    return {
        counter: state.counter,
        name: state.user.name
    };
}

function mapDispatchToProps(dispatch) {
    return {
        openDrawer: () => dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute()),
        counterActions: bindActionCreators(CounterActions, dispatch)
    };
}

@connect(mapStateToProps, mapDispatchToProps)
export default class CounterContainer extends Component<CounterContainerProps, State> {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        const { props: { name, counter } } = this;
        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name="ios-arrow-back" />
                    </Button>

                    <Title>{(name) ? this.props.name : 'Counter Page'}</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                </Header>

                <Content padder>
                    <CounterComponent {...this.props}/>
                </Content>
            </Container>
        );
    }
}