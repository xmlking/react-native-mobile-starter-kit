import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './app.component';
import configureStore from './app.store';

//import configureCounterStore from './counter/counter.store';

interface Props {

}

interface State {
    store?: any
    isLoading: boolean
}
export default class Root extends Component<Props, State> {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({ isLoading: false })),
        };
    }

    render() {
        return (
            <Provider store={this.state.store}>
                <App />
            </Provider>
        );
    }
}
