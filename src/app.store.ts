import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import { persistStore } from 'redux-persist';
import reducer from './shared/reducers'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import createLogger from 'redux-logger';

export default function configureStore(onCompletion:()=>void):any {
    const enhancer = compose(
        applyMiddleware(thunk, promise),
        devTools({
            name: 'MobileStarterKit', realtime: true,
        }),
    );

    const store = createStore(reducer, enhancer);
    persistStore(store, { storage: AsyncStorage }, onCompletion);

    return store;
}