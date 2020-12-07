import React, { PureComponent } from 'react';

import { connect } from 'react-redux';

import {
    incAction,
    addAction,
    changeBannersActon,
    changeRecommendsActon
} from '../store/actionCreators';
import { StoreContext } from '../utils/context';
import axios from 'axios';

class Home extends PureComponent {

    static contextType = StoreContext;

    componentDidMount() {

        axios({
            url: "http://123.207.32.32:8000/home/multidata",
        }).then(res => {
            console.log(res)
            const data = res.data.data
            console.log("轮播图", data.banner.list)
            console.log("推荐", data.recommend.list)
            this.props.changeBanners(data.banner.list)
            this.props.changeRecommends(data.recommend.list)

        })
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
    changeBanners(banners) {
        dispatch(changeBannersActon(banners));
    },
    changeRecommends(recommends){
        dispatch(changeRecommendsActon(recommends));
    }

})

export default connect(mapStateToprops, mapDispathToProps)(Home);