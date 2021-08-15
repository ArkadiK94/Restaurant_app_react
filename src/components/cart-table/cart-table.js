import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {removeFromCart} from '../../actions';

const CartTable = ({items,removeFromCart,count}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {items.map(item=>{
                    const {title,price,url,id} = item;
                    return (   
                        <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-amount">
                                <div className="cart__item-amount-count">{count}</div>
                                <div className="cart__item-amount-price">{price*count}$</div>
                            </div>
                            <div 
                                className="cart__close"
                                onClick={()=>removeFromCart(id)}>
                                    &times;</div>
                        </div>
                    );
                })}
            </div>
        </>
    )
    
};

const mapStateToProps = ({items,count})=>{
    return{
        items,
        count
    }
}
const mapDispatchToProps ={
    removeFromCart
}
export default connect(mapStateToProps,mapDispatchToProps)(CartTable);