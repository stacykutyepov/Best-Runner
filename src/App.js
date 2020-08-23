import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/main-page/main-page.component";
import GraphPage from './pages/graph-page/graph-page.component';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/chart" component={GraphPage} />
      </Switch>
    </div>
  );
}

export default App;
