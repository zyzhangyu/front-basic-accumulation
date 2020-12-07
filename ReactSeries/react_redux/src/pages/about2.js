import React from 'react';
import { connect } from '../utils/connect';

import {
    decAction,
    subAction
} from "../store/actionCreators";


function About(props) {
    return (
        <div>
            <hr></hr>
            <h1>About2 把redux的订阅和取消订阅封装到了一个connect函数中  用conncet链接组件  解耦封装</h1>
            <h2>当前计数: {props.counter}</h2>
            <button onClick={e => props.decrement()}> ∫吧 -1 </button>
            <button onClick={e => props.subNumber(5)}> -5 </button>
        </div>
    )
}


const mapStateToProps  = state => {
    return {
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        decrement: function() {
            dispatch(decAction())
        },
        subNumber: function(num) {
            dispatch(subAction(num))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(About);