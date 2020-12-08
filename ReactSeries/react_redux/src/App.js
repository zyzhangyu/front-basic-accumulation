import React from "react";
import "./App.css";

import Home from "./pages/about6";
import About from "./pages/home6";
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
  
  <About></About>
  <Home></Home>
</div>
  );
}

export default App; 
