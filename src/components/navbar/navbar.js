import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/shoppingify-logo.png';
import itemIcon from '../../images/menu_FILL0_wght400_GRAD0_opsz48.svg';
import historyIcon from '../../images/refresh_FILL0_wght400_GRAD0_opsz48.svg';
import analysisIcon from '../../images/analytics_FILL0_wght400_GRAD0_opsz48.svg';
import shoppingCart from '../../images/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';

import './navbar.css';

const Nav = () => (
  <div className="test shadow-sm">
    <div className="flex-container">
      <div>
        <Link to="/home">
          <img src={logo} className="icon" alt="shoppingify logo" />
        </Link>
      </div>
      <div>
        <div data-bs-toggle="tooltip" data-bs-placement="right" title="Items">
          <Link to="/home">
            <img src={itemIcon} alt="items" />
          </Link>
        </div>
        <div className="history" data-bs-toggle="tooltip" data-bs-placement="right" title="History">
          <Link to="/history">
            <img src={historyIcon} alt="history" />
          </Link>
        </div>
        <div data-bs-toggle="tooltip" data-bs-placement="right" title="Reports">
          <Link to="/report">
            <img src={analysisIcon} alt="Report" />
          </Link>
        </div>
      </div>
      <div>
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
