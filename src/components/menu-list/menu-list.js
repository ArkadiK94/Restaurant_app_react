import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import WithRestoService from '../hoc';
import {connect} from 'react-redux';
import {menuLoaded,menuRequest,menuError} from '../../actions';
import {Error} from '../error';
import Spinner from '../spinner';
import './menu-list.scss';

const MenuListRender =({menuItems,error,loading,onClick})=>{
    if(error){
        return <Error/>
    }
    if(loading){
        return <Spinner/>
    }
    return (
        <ul className="menu__list">
            {menuItems.map(menuItem=>{
                return (
                    <MenuListItem key={menuItem.id} menu={menuItem} onClick={onClick}/>
                )
            })}
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
        return <MenuListRender {...this.props} onClick={this.onClick}/>
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
    menuError
}

export default WithRestoService(connect(mapStateToProps,mapDispatchToProps)(MenuList));