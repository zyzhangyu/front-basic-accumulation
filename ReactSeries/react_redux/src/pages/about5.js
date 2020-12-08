import React from 'react';
import { connect } from 'react-redux';

import {
    decAction,
    subAction
} from "../store/actionCreators";


function About(props) {
    return (
        <div>
            <hr></hr>
            <h1>About3 把redux的订阅和取消订阅封装到了一个connect函数中  用conncet链接组件  解耦封装</h1>
            <h2>当前计数: {props.counter}</h2>
            <button onClick={e => props.decrement()}>  -1 </button>
            <button onClick={e => props.subNumber(5)}> -5 </button>
            <h1>Banner</h1>
            <ul>
               {
                    props.banners.map((item, index) => {
                        return (<li key={item.acm}> {item.title}</li>);
                    })
               }
            </ul>
            <h1>Recommends</h1>
            <ul>
                {
                    props.recommends.map((item, index) => {
                            return (<li key={item.acm}> {item.title} </li>)
                    })
                }
            </ul>
        </div>
    )
}


const mapStateToProps  = state => {
    return {
        counter: state.counter,
        banners: state.banners,
        recommends: state.recommends,
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