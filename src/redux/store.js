import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";

// create the Redux-Saga Middleware
const sagaMiddleware = createSagaMiddleware();

// add middlewares to array
const middlewares = [sagaMiddleware];

// only add logger to middlewares if in dev mode
if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
