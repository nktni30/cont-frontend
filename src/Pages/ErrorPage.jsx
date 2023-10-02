import React from 'react';
import Error from '../img/error.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-lg-7">
          <figure>
            <img alt='errorimg' className='img-fluid' src={Error}></img>
          </figure>
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-sm-12 text-center">
          <Link className='btn btn-warning' to={'/'}>Home</Link>
        </div>
      </div>
    </div>

  )
}

export default ErrorPage;