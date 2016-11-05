import React, {
    Component,
    PropTypes,
} from 'react';
import {
    Text,
    View,
    TouchableHighlight,
} from 'react-native';

import {colors, styles } from './counter.styles'

interface Props {
    increment: PropTypes.func.isRequired,
    incrementIfOdd: PropTypes.func.isRequired,
    incrementAsync: PropTypes.func.isRequired,
    decrementAsync: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
}

interface StateProps {
    counter: number,
}

interface DispatchProps {
    increment()
    decrement()
    incrementIfOdd()
    incrementAsync(delay: number)
    decrementAsync(delay: number)
}

type CounterProps = StateProps & DispatchProps;
type State = any;

export default class CounterComponent extends Component<CounterProps, State> {
    render() {
        // var { increment, incrementIfOdd, incrementAsync, decrement, decrementAsync, counter } = this.props;
        var { increment, incrementIfOdd, incrementAsync, decrement, decrementAsync } = this.props.counterActions;
        var { counter } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.displayPanel}>
                    <Text style={styles.numberBlock}>{counter}</Text>
                    <Text style={styles.unitBlock}>/ times</Text>
                </View>
                <View style={[styles.controlPanel, styles.inline]}>
                    <TouchableHighlight onPress={increment} style={styles.buttonAddSmall} underlayColor={colors.add.bg}>
                        <Text style={[styles.text, styles.textColorAdd]}>+</Text>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={decrement} style={styles.buttonMinusSmall} underlayColor={colors.minus.bg}>
                        <Text style={[styles.text, styles.textColorMinus]}>-</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.controlPanel}>
                    <TouchableHighlight onPress={incrementIfOdd} style={styles.buttonAdd} underlayColor={colors.add.bg}>
                        <Text style={[styles.text, styles.textColorAdd]}>Increment if odd</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => incrementAsync()} style={styles.buttonAdd} underlayColor={colors.add.bg}>
                        <Text style={[styles.text, styles.textColorAdd]}>Increment async</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => decrementAsync()} style={styles.buttonMinus} underlayColor={colors.minus.bg}>
                        <Text style={[styles.text, styles.textColorMinus]}>Decrement async</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}
