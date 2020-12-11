
import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Link, NavLink, Route, Switch } from 'react-router-dom';
import routes from '../route';


export function History() {
  return (
    <div>
        悠久的历史文化
    </div>
  );
}
export function Culture() {
  return (
    <div>
        创新发展共赢
    </div>
  );
}

export function Contact() {
  return (
    <div>
        联系电话 110
    </div>
  );
}

export function Join() {
  return (
    <div>
        欢迎您加入我们
    </div>
  );
}
export default function About(props) {

 

 
    return (
      <div>

        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``

          <NavLink exact to="/about/history">企业历史</NavLink>
          <NavLink  to="/about/culture">企业文化</NavLink>
          <NavLink  to="/about/contact">联系我们</NavLink>

          <button onClick={()=>{
            jumpToJoin();
          }}>加入我们</button>
          {/* <Switch> */}
            {/* <Route exact path="/about/culture" component={Culture}></Route>
            <Route  path="/about/contact" component={Contact}></Route>
            <Route  path="/about/history" component={History}></Route>
            <Route  path="/about/join" component={Join}></Route> */}



          {/* </Switch> */}


            {renderRoutes(props.route.routes)}
          ###########################
          <h2>About</h2>
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~``
      </div>
    );


    function jumpToJoin() {
      console.log(props.history);
      console.log(props.location) ;
      console.log(props.match) ;
      props.history.push("/about/join");

    }
  }

