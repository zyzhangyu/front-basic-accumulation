
import {applyMiddleware, createStore, compose} from 'redux';
import reducer from './reducer.js';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import saga from './saga';
// 应用一些向中间件
// applyMiddleware（中间件1, 中间件2, 中间件3）
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;


///saga 中间件
const  sagaMiddleware = createSagaMiddleware();


const storeEnhancer = applyMiddleware(thunkMiddleware, sagaMiddleware);


const store = createStore(reducer, composeEnhancers(storeEnhancer));
sagaMiddleware.run(saga);

export default store; 