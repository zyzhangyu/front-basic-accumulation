import React, { PureComponent } from 'react';
 
import { connect } from 'react-redux';

import {
    incAction,
    addAction,
    getHomeMultidataAction
} from '../store/actionCreators';
import { StoreContext } from '../utils/context';
 
class Home extends PureComponent {

    static contextType = StoreContext;

    componentDidMount() {
        this.props.getHomeMiltidata()

    }

    render() {
        console.log("home3 打印 context", this.context)
        return (
            <div>
                <h1>Home3-自定义的conncet</h1>
                <h2>当前计数 {this.props.counter}</h2>
                <button onClick={e=> this.props.increment()}> +1 </button>
                <button onClick={e => this.props.addNumber(5)}> +5</button>
            </div>
        )
    }
}


const mapStateToprops = state => ({
    counter: state.counter
})

const mapDispathToProps = dispatch => ({
    increment()  {
        dispatch(incAction());
    },
    addNumber(num) {
        dispatch(addAction(num));
    },
    ///中间件的使用
    getHomeMiltidata(){
        dispatch(getHomeMultidataAction);
    }

})

export default connect(mapStateToprops, mapDispathToProps)(Home);