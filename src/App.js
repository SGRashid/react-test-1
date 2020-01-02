import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path='/' exact component={Main} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
