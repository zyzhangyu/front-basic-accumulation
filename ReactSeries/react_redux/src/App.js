import React from "react";
import "./App.css";

import Home from "./pages/home6";
import About from "./pages/about6";
function App() {
  return (
    // 2
    // <div className="App">
    //   <StoreContext.Provider value={store}>
    //     <Home></Home>
    //     <About></About>
    //   </StoreContext.Provider>
    // </div> 

<div className="App">
  <Home></Home>
  <About></About>
</div>
  );
}

export default App; 
 