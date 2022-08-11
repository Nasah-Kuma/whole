import React from 'react';
import plugImg from '../../images/add_FILL0_wght400_GRAD0_opsz48.svg';
import './itemCard.css';

const ItemCard = () => {
  console.log('hello');
  return (
    <div>
      <div className="w260 p-4 shadow-sm bg-white rounded-4">
        <div className="card-body flex">
          <div>
            <p className="pt-2">
              pipe-apple
            </p>
          </div>
          <div>
            <img src={plugImg} alt="add sign" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
