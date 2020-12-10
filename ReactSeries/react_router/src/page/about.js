
import React from 'react';
import { Link, NavLink, Route, Switch } from 'react-router-dom';


function History() {
  return (
    <div>
        悠久的历史文化
    </div>
  );
}
function Culture() {
  return (
    <div>
        创新发展共赢
    </div>
  );
}

function Contact() {
  return (
    <div>
        联系电话 110
    </div>
  );
}

function Join() {
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
            <Route exact path="/about/culture" component={Culture}></Route>
            <Route  path="/about/contact" component={Contact}></Route>
            <Route  path="/about/history" component={History}></Route>
            <Route  path="/about/join" component={Join}></Route>



          {/* </Switch> */}
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

