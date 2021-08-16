import React from 'react';
import cartIcon from './shopping-cart-solid.svg';
import './app-header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const AppHeader = ({items}) => {
    let total = items.map(item=>{
        return item.totalPrice;
    });
    total = total.reduce((sum,item)=>sum+=item,0);
    return (
        <header className="header">
            <Link className="header__link" to="/">
                Menu
            </Link>
            <Link className="header__link" to="/basket">
                <img className="header__cart" src={cartIcon} alt="cart"></img>
                Total: {total} $
            </Link>
        </header>
    )
};

const mapStateToProps = ({items})=>{
    return{
        items
    }
}
export default connect(mapStateToProps)(AppHeader);