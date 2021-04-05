import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Duck from '../Duck/Duck';
import './Home.css';

const Home = () => {

  return (
    <main>
      <div className='can-i-be-yours-div'>
      <h2>Hello, can I be your rubberduck?</h2>
      <Link to='/form'>
        <button className='yes-button'>Yes</button>
      </Link>
      </div>
      <Duck />
    </main>
  )
}

export default Home;
