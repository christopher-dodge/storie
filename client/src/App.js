import React from 'react';
import BlogForm from './Components/BlogForm';
import Header from './Components/Header';
import Splash from './Pages/Splash';
import Stories from './Pages/Stories';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

export const App = () => {

  return (
    <Router>
      <div className='App'>
        <Header />
        <Switch>
          <Route path="/" exact component={Splash} />
          <Route path="/stories" exact component={Stories} />
          <Route path="/stories/new" exact component={BlogForm} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
