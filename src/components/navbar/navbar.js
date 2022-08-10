import React from 'react';
import logo from '../../images/shoppingify-logo.png';
import itemIcon from '../../images/menu_FILL0_wght400_GRAD0_opsz48.svg';
import historyIcon from '../../images/refresh_FILL0_wght400_GRAD0_opsz48.svg';
import analysisIcon from '../../images/analytics_FILL0_wght400_GRAD0_opsz48.svg';
import shoppingCart from '../../images/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';

const Nav = () => (
  <div>
    <div className="d-flex flex-column gap-5">
      <div className="p-4">
        <img src={logo} className="icon rounded-circle" alt="shoppingify logo" />
      </div>
      <div className="p-4">
        <div>
          <img src={itemIcon} alt="items" />
        </div>
        <div>
          <img src={historyIcon} alt="history" />
        </div>
        <div>
          <img src={analysisIcon} alt="items" />
        </div>
      </div>
      <div className="p-4">
        <button type="button" className="bg-orange rounded-pill p-2 border-0 position-relative bg-orange">
          <img src={shoppingCart} alt="items" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </div>
  </div>
);

export default Nav;
