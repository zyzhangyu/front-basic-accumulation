import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMEND,
  FETCH_HOME_MULTIDATA
} from "./constants.js";
import axios from "axios";

export const addAction = (num) => ({
  type: ADD_NUMBER,
  num,
});

export const subAction = (num) => ({
  type: SUB_NUMBER,
  num,
});

export const incAction = () => ({
  type: INCREMENT,
});

export const decAction = () => ({
  type: DECREMENT,
});

export const changeBannersActon = (banners) => ({
  type: CHANGE_BANNERS,
  banners: banners,
});

export const changeRecommendsActon = (recommend) => ({
  type: CHANGE_RECOMMEND,
  recommends: recommend,
});

/// redux-thunk中定义的action函数
export const getHomeMultidataAction = (dispatch) => {
  console.log("来到action函数中");
  axios({
    url: "http://123.207.32.32:8000/home/multidata",
  }).then((res) => {
    const data = res.data.data;
    dispatch(changeBannersActon(data.banner.list));
    dispatch(changeRecommendsActon(data.recommend.list));
  });
};


/// redux-saga拦截的action
export const fetchHomeMultidataAction = {
  type: FETCH_HOME_MULTIDATA
}