import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main/Main';
import './App.css';
import TestPage from "./components/TestPage/TestPage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route path='/' exact component={Main} />
          <Route path='/test' exact component={TestPage} />
        </Switch>
      </>
    </BrowserRouter>
  );
}

export default App;
