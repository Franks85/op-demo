import React from "react";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { apiMiddleware } from 'redux-api-middleware';
import logger from 'redux-logger';

import reducer from "./store/reducers/index";

const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhances(applyMiddleware(apiMiddleware, thunk, logger)));

export default props => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}