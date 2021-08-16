import React,{Component} from 'react';
import CartTable from '../cart-table';
import './cart-page.scss';
import WithRestoService from '../hoc';
import {connect} from 'react-redux';


class CartPage extends Component{
    postCartList=(items)=>{
        this.props.restoService.postCartList(items);
    }
    render(){
        return (
            <div className="cart"> 
                <CartTable/>
                <button onClick={()=>this.postCartList(this.props.items)} className="cart__save-list">
                    place an order
                </button>
            </div>
        )
    }
}

const mapStateToProps =({items})=>{
    return{
        items
    }
}
export default connect(mapStateToProps)(WithRestoService(CartPage));