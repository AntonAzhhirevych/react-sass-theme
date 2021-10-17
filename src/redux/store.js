import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';

const middlewares = [thunk];
const devtools = composeWithDevTools()

const enhancer = compose(applyMiddleware(...middlewares), devtools)

export const store = createStore(rootReducer, enhancer);