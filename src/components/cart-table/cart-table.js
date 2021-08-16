import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import {removeFromCart,addToCart,lowerFromCart} from '../../actions';

const CartTable = ({items,removeFromCart,addToCart,lowerFromCart}) => {
    return (
        <>
            <div className="cart__title">Ваш заказ:</div>
            <div className="cart__list">
                {items.map(item=>{
                    const {title,price,url,id,count} = item;
                    return (   
                        <div key={id} className="cart__item">
                            <img src={url} className="cart__item-img" alt={title}></img>
                            <div className="cart__item-title">{title}</div>
                            <div className="cart__item-amount">
                                <div className="cart__item-amount-count">
                                    <button onClick={()=>lowerFromCart(id)} className="cart__item-amount-count-lower-btn">
                                        -
                                    </button>
                                    <div>{count}</div>
                                    <button onClick={()=>addToCart(id)} className="cart__item-amount-count-add-btn">
                                        +
                                    </button>
                                </div>
                                <div className="cart__item-amount-price">{price*count}$</div>
                            </div>
                            <div 
                                className="cart__close"
                                onClick={()=>removeFromCart(id)}>
                                    &times;
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
    
};

const mapStateToProps = ({items})=>{
    return{
        items
    }
}
const mapDispatchToProps ={
    removeFromCart,
    addToCart,
    lowerFromCart
}
export default connect(mapStateToProps,mapDispatchToProps)(CartTable);