import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Splash() {
  // const bgStyle = {
  //   backgroundImage: url("https://images.unsplash.com/photo-1569073120512-05362a6b92e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")
  // };

  return (
    <div id="splash" className="full-screen">
      <h5>Welcome to</h5>
      <h1 className="big-text">Storie</h1>
      <h5 className="m-bot-5">Share. Your. Experience.</h5>
      <Link to="/stories">
        <Button variant="contained">View Stories</Button>
      </Link>
    </div>
  )
}
