
import {applyMiddleware, createStore} from 'redux';
import reducer from './reducer.js';
import thunkMiddleware from 'redux-thunk';

// 应用一些向中间件
// applyMiddleware（中间件1, 中间件2, 中间件3）

const storeEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, storeEnhancer);
export default store;