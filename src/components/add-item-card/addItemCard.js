import React from 'react';
import bottle from '../../images/fa-solid_wine-bottle.svg';

const AddItemCard = () => (
  <div>
    <div className="card-body rounded-4 mt-2 mx-4 p-4 bg-brown">
      <div className="row">
        <div className="col-4">
          <img src={bottle} alt="bottle" />
        </div>
        <div className="col-8 pt-2">
          <div className="text-white">
            Did not find what you need?
          </div>
          <div className="pt-2">
            <button type="button" className="btn btn-lg bg-white"> Add item </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AddItemCard;
