import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
