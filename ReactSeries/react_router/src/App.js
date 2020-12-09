import React, {PureComponent} from 'react';


import './App.css';

import {
    HashRouter,
    Link,
    Route,
    BrowserRouter
} from 'react-router-dom';
import Home from './page/home';
import About from './page/about';
import Profile from './page/profile';
function App() {
  return (
    <div className="App">
     {/* <HashRouter>
       <Link  to="/">首页</Link>
       <Link  to="/about">关于</Link>
       <Link  to="profile">我的</Link>
     </HashRouter> */}


      <BrowserRouter>

        <Link  to="/">首页</Link>
       <Link  to="/about">关于</Link>
       <Link  to="profile">我的</Link>

        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/profile" component={Profile}></Route>

      </BrowserRouter>
      App
    </div>
  );
}

export default App;
