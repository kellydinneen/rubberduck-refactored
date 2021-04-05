import React from 'react';
import './ErrorPage.css'

const ErrorPage = (props) => {
  return(
    <p className="error-message">{props.message}</p>
  )
}

export default ErrorPage;
