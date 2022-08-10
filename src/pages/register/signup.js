import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/shoppingify-logo.png';
import Register from '../../components/signup/register';

const SignupPage = () => (
  <div>
    <div className="text-center">
      <img src={logo} alt="app logo" className="small" />
    </div>
    <div className="row">
      <div className="col-md-4 col-10 offset-md-4 offset-1">
        <div className="shadow p-4 rounded bg-white">
          <div className="card-body">
            <div className="text-center p-2">
              <h3> Welcome to Shoppingify </h3>
              <small> Please provide your email and password to login </small>
              <Register />
              <div className="p-4">
                <Link to="/"> I have an account! sign in </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SignupPage;
