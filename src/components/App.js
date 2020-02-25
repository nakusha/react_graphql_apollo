import React from 'react';
import {HashRouter as Router, Route} from "react-router-dom";
import home from '../routes/home';
import detail from '../routes/detail';

function App() {
  return (
    <Router>
      <Route exact path="/" component={home}/>
      <Route exact path="/:id" component={detail}/>
    </Router>
  );
}

export default App;
