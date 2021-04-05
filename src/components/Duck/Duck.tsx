import React from 'react';
// import { Link } from "react-router-dom";
import './Duck.css';

const Duck = () => {
  return (
    <svg className='duck' viewBox='0 0 200 150'>
      <path fill="#F19C56" strokeLinecap="round" strokeLinejoin="round"
            stroke="#F19C56" strokeWidth="20"
            d="M35 30 l20 0 Z" />
      <ellipse cx="80" cy="30" rx="30" ry="30" fill="yellow" />
      <ellipse cx="65" cy="20" rx="5" ry="5" fill="#000" />
      <ellipse cx="130" cy="80" rx="60" ry="50" fill="yellow" />
      <path id="hidden_water" fill="#56B3F1"
        stroke="#56B3F1" strokeWidth="10"
        d="M5 100 q25 20 50 0 q25 -20 50 0 q25 20 50 0 q25 -20 50 0 q25 20 50 0 l0 35 l-250 0 Z" />
      <path id="water" strokeLinecap="round" fill="none"
        stroke="#99D6FF" strokeWidth="10"
        strokeLinejoin="round"
        d="M5 90 q25 20 50 0 q25 -20 50 0 q25 20 50 0 q25 -20 50 0 q25 20 50 0" />
    </svg>
  )
}

export default Duck;
