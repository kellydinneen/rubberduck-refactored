import React from 'react';
import './ErrorPage.css';

type ErrorProps = {
  message: string
};

const ErrorPage = (props: ErrorProps) => {
  return(
    <p className="error-message">{props.message}</p>
  )
}

export default ErrorPage;
