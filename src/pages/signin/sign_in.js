import React from 'react';
import Signin from '../../components/signin/signin';
import logo from '../../images/shoppingify-logo.png';
import './signin.css';

const SignInPage = () => (
  <div>
    <div className="text-center">
      <img src={logo} alt="app logo" className="small" />
    </div>
    <div className="row">
      <div className="col-md-4 col-10 offset-md-4 offset-1">
        <div className="shadow p-4 rounded bg-white">
          <div className="card-body">
            <div className="text-center p-5">
              <h2> Welcome to Shoppingify </h2>
              <small> Please provide your email and password to login </small>
            </div>
            <Signin />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SignInPage;
