import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from './components/BubblePage'

import Login from "./components/Login";
import "./styles.scss";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={ Login } />
        <PrivateRoute exact path="/protected" component={ BubblePage } />
        {/* 
          Build a PrivateRoute component that willl 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
};

export default App;
