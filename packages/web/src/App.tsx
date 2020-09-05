import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import AddEntries from './views/AddEntries';
import Entries from './views/Entries';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <AddEntries />
        </Route>
        <Route path="/entries">
          <Entries />
        </Route>
        <Route path="*">
          <h1>Not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
