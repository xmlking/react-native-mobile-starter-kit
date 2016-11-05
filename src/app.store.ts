import { createStore, applyMiddleware } from 'redux';
import { AsyncStorage } from 'react-native';
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './app.reducers'
import { persistStore, autoRehydrate } from 'redux-persist';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
// import createLogger from 'redux-logger';
// const logger = createLogger();

// TODO : remove realtime for prod
const composeEnhancers = composeWithDevTools({ name: 'MobileStarterKit', realtime: true});
const middleware = [thunk,promise];

export default function configureStore(onCompletion?:()=>void, initialState? = {}) {

    const store = createStore(rootReducer, initialState,  composeEnhancers(
        applyMiddleware(...middleware),
        // other store enhancers if any
        // autoRehydrate()
    ));
    persistStore(store, { storage: AsyncStorage }, onCompletion);

    // if (module.hot) {
    //     // Enable hot module replacement for reducers
    //     module.hot.accept(() => {
    //         const nextRootReducer = require('./shared/reducers').default;
    //         store.replaceReducer(nextRootReducer);
    //     });
    // }

    return store;
}