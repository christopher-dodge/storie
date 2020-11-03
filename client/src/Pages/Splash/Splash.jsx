import React from 'react';
import '../../App.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export default function Splash() {
  return (
    <div className="center p-top-10">
      <h5>Welcome to</h5>
      <h1 className="big-text">Storie</h1>
      <h5 className="m-bot-5">Share. Experience. Your.</h5>

        <Button variant="contained">View Stories</Button>

    </div>
  )
}
