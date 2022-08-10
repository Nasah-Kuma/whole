import React from 'react';
import Nav from '../../components/navbar/navbar';
import './home.css';

const Home = () => (
  <div>
    <div className="row">
      <div className="col-1">
        <Nav />
      </div>
      <div className="col-md-8">
        <div className="px-5 py-4">
          <h3>
            <span className="text-orange"> Shoppingify </span>
            allows you take your
            <br />
            shopping list wherever you go
          </h3>
        </div>
      </div>
      <div className="col-md-3">
        right
      </div>
    </div>
  </div>
);

export default Home;
