import thunkMiddleWare from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import musicReducer from './music-reducer';
import listeningReducer from './listening-reducer';

let reducers = combineReducers({
    music: musicReducer,
    listening: listeningReducer
}
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

window.__store__ = store;

export default store;