// export default 生成器函数;

import axios from 'axios';
import { takeEvery, put, all }  from 'redux-saga/effects';
import {
    FETCH_HOME_MULTIDATA
} from "./constants"

import {
    changeBannersActon,
    changeRecommendsActon
} from "./actionCreators"

function* fetchHomeMultidata(action) {
    const res = yield axios.get("http://123.207.32.32:8000/home/multidata")
    console.log(res);
    // yield put(changeBannersActon(res.data.data.banner.list))
    // yield put(changeRecommendsActon(res.data.data.recommend.list))

    yield all([
        yield put(changeBannersActon(res.data.data.banner.list)),
        yield put(changeRecommendsActon(res.data.data.recommend.list))
    ])
}

function* mySaga() {
    yield takeEvery(FETCH_HOME_MULTIDATA, fetchHomeMultidata);
} 

export default mySaga;