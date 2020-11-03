import React from 'react';
import BlogForm from './Components/BlogForm';
import Header from './Components/Header';
import Splash from './Pages/Splash';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export const App = () => {

  return (
    // <Router>
    <div className='App'>
      <Header />
      <Splash />
    </div>
    // </Router>
  );
};

export default App;
