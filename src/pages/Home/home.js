import React from 'react';
import Nav from '../../components/navbar/navbar';
import './home.css';
import AddItemCard from '../../components/add-item-card/addItemCard';
import ItemCard from '../../components/itemCard/itemCard';

const Home = () => (
  <div>
    <div className="row">
      <div className="col-3 col-md-1">
        <Nav />
      </div>
      <div className="col-7 col-md-8 p-md-5">
        <div className="intro">
          <h3>
            <span className="text-orange"> Shoppingify </span>
            allows you take your
            <br />
            shopping list wherever you go
          </h3>
        </div>
        <div className="mt-3 mt-md-5">
          <h5 className="cat-name"> Category name</h5>
        </div>
        <div>
          <ItemCard />
        </div>
      </div>
      <div className="col-md-3 sidebar">
        <AddItemCard />
      </div>
    </div>
  </div>
);

export default Home;
