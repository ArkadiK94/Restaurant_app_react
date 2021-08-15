import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc';
import {connect} from 'react-redux';
import {menuLoaded,menuRequest,menuError,addToCart} from '../../actions';
import {Error} from '../error';
import Spinner from '../spinner';
import './menu-list.scss';

const MenuListRender =({items})=>{
    return (
        <ul className="menu__list">
            {items}
        </ul>
    )
    
};

class MenuList extends Component{
    async componentDidMount(){
        const {restoService,menuLoaded,menuError,menuRequest} = this.props;
        menuRequest();
        await restoService.getListItem()
        .then(res=>menuLoaded(res))
        .catch(()=>menuError());

    }
    render(){
        const {menuItems,error,loading} = this.props;
        if(error){
            return <Error/>
        }
        if(loading){
            return <Spinner/>
        }
        const items = menuItems.map(menuItem=>{
            return <MenuListItem key={menuItem.id} menu={menuItem} onAdd={(id)=>this.props.addToCart(id)}/>
        });
            
        return (
            <MenuListRender items={items}/>
        )
    }
}


const mapStateToProps = (state)=>{
    return{
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}
const mapDispatchToProps = {
    menuLoaded,
    menuRequest,
    menuError,
    addToCart
}

export default WithRestoService(connect(mapStateToProps,mapDispatchToProps)(MenuList));