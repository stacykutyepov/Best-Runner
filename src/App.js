import React, { useEffect } from 'react';
import SmoothScroll from "smooth-scroll";
import './App.css';
import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/main-page/main-page.component";
import GraphPage from './pages/graph-page/graph-page.component';
import IntroPage from './pages/intro-page/intro-page.component';

function App() {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 600,
    });
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={IntroPage} />
        <Route path="/main" component={MainPage} />
        <Route path="/chart" component={GraphPage} />
      </Switch>
    </div >
  );
}

export default App;
