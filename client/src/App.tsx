import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import SearchResults from './components/SearchResults';

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/search" component={SearchResults}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
