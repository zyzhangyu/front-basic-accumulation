import React, { PureComponent } from "react";
import { renderRoutes } from 'react-router-config';
import routes from './route';
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
import DetailMore from "./page/detailMore";
import DetailAdvance from "./page/detailadvance";

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
      <NavLink to="/about" activeClassName="zy-active">
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

        {/* query search */}
      <NavLink exact to={`/detailmore?name=nick&age=18`} activeClassName="zy-active">
        详情更多
      </NavLink>
      <NavLink exact to={{
         pathname: "/detailadvance",
         search: "?name:John&age=20",
         state: {
           a:1,
           b:2
         }
      }} activeClassName="zy-active">
        详情进阶
      </NavLink>
      <button
        onClick={() => {
          console.log(props);
          props.history.push("/shop");
        }}
      >
        商品
      </button>
      {/* <Switch> */}
        {/* <Route exact path="/home" component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/user" component={User}></Route>

        <Route path="/detail/:id" component={Detail}></Route>
        <Route path="/detailmore" component={DetailMore}></Route>
        <Route path="/detailadvance" component={DetailAdvance}></Route> */}

        {/* 通配路由 */}
        {/* <Route component={NoMatch}></Route> */}
        {/* 动态路由 */}
        {/* <Route exact path="/:id" component={User}></Route> */}
      {/* </Switch> */}
      <h2>hehehe</h2>
      {/* </BrowserRouter>  */}
      {/* </BrowserRouter> */}




        <h2>使用一个路由配合</h2>

        {renderRoutes(routes)}
      App
    </div>
  );
}

export default withRouter(App);

