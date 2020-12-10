import React, { PureComponent } from "react";

import "./App.css";

import {
  HashRouter,
  Link,
  Route,
  BrowserRouter,
  NavLink,
  Switch,
  Router,
  withRouter,
} from "react-router-dom";
import Home from "./page/home";
import About from "./page/about";
import Profile from "./page/profile";
import User from "./page/user";
import NoMatch from "./page/noMatch";
import Shop from "./page/shop";
import Detail from "./page/detail";

function App(props) {
  const id = "abc";
  return (
    <div className="App">
      {/* <HashRouter>
       <Link  to="/">首页</Link>
       <Link  to="/about">关于</Link>
       <Link  to="profile">我的</Link>
     </HashRouter> */}
      {/* <BrowserRouter> */}
      {/* Link都会渲染出来 显示的是a标签 */}
      {/* 
        <Link to="/">首页</Link>
        <Link to="/about">关于</Link>
        <Link to="profile">我的</Link> */}
      {/* <NavLink exact to="/" activeStyle={{color:"red"}}> 首页</NavLink>
        <NavLink exact to="/about" activeStyle={{color:"red"}}> 关于</NavLink>
        <NavLink exact to="/profile" activeStyle={{color:"red"}}> 我的</NavLink> */}
      {/*  */}
      <h2>哈哈哈</h2>
      {/* <BrowserRouter>  */}
      {/* <BrowserRouter> */}
      <NavLink exact to="/" activeClassName="zy-active">
        首页
      </NavLink>
      <NavLink to="/about" a activeClassName="zy-active">
        关于
      </NavLink>
      <NavLink exact to="/profile" activeClassName="zy-active">
        我的
      </NavLink>
      <NavLink exact to="/user" activeClassName="zy-active">
        用户
      </NavLink>
      <NavLink exact to={`/detail/${id}`} activeClassName="zy-active">
        详情
      </NavLink>
      <button
        onClick={() => {
          console.log(props);
          props.history.push("/shop");
        }}
      >
        商品
      </button>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route path="/shop" component={Shop}></Route>
        {/* 动态路由 */}
        {/* <Route exact path="/:id" component={User}></Route> */}

        <Route path="/detail/:id" component={Detail}></Route>

        <Route path="/user" component={User}></Route>
        {/* <Route component={NoMatch}></Route> */}
      </Switch>
      <h2>hehehe</h2>
      {/* </BrowserRouter>  */}
      {/* </BrowserRouter> */}
      App
    </div>
  );
}

export default withRouter(App);
