import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import './Header.css';

const Header = (props) => {
  return (
    <header>
      {props.home && <h1 className='site-title'>Rubberduck</h1>}
      {!props.home &&
        <>
          <Link to='/'>
            <button className='home-button'>Go Home</button>
          </Link>
        </>
      }
      {!props.submit && <Link to='/submit'>
        <button className='submissions-button'>Submit A Strategy</button>
      </Link>}
    </header>
  )
}

Header.propTypes = {
  home: PropTypes.bool,
  submit: PropTypes.bool
};

export default Header;
