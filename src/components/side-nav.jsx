import './side-nav.css';
import logo from '../images/shoppingify-logo.png';
import { ReactComponent as IconShoppingCart } from '../images/shopping_cart_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as IconMenu } from '../images/menu_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as IconRefresh } from '../images/refresh_FILL0_wght400_GRAD0_opsz48.svg';
import { ReactComponent as IconInsertChart } from '../images/insert_chart_FILL0_wght400_GRAD0_opsz48.svg';


const SideNav = () => {
    return (
        <article className='sidenav-section'>
            <a href='/'>
                <img src={logo} alt="shoppingify-logo" className='logo' />
            </a>

            <a href='#'>
                <span className='menu-box'>
                    <IconMenu className='menu'></IconMenu>
                </span>
            </a>

            <a href='#'>
                <span className='refresh-box'>
                    <IconRefresh className='refresh'></IconRefresh>
                </span>
            </a>

            <a href='#'>
                <span className='insert-chart-box'>
                    <IconInsertChart className='insert-chart'></IconInsertChart>
                </span>
            </a>

            <a href='#' className='shopping-cart-link'>
                <div className='shopping-cart-box'>
                    <IconShoppingCart className='shopping-cart' />
                </div>
            </a>

        </article>
    );
}

export default SideNav;