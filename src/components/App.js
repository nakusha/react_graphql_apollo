import React from 'react';
import {HashRouter as Router, Route, Redirect} from "react-router-dom";
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
      <Route path="/:id" component={Detail}/>
      <Redirect path="*" to="/"/>
    </Router>
  );
}

export default App;
