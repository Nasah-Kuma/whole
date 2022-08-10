import React from 'react';
import Nav from '../../components/navbar/navbar';
import './home.css';

const Home = () => (
  <div>
    <div className="row">
      <div className="navb col-1">
        <Nav />
      </div>
      <div className="col-md-8">
        center
      </div>
      <div className="col-md-3">
        right
      </div>
    </div>
  </div>
);

export default Home;
