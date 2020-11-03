import React from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Splash() {
  return (
    <div className="center" id="splash">
      <h5>Welcome to</h5>
      <h1 className="big-text">Storie</h1>
      <h5 className="m-bot-5">Share. Your. Experience.</h5>
      <Link to="/stories">
        <Button variant="contained">View Stories</Button>
      </Link>
    </div>
  )
}
