import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import {Route,Switch} from 'react-router-dom';
import {ErrorPage404} from '../error';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import styled from 'styled-components';

const ItemWrapper = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    cursor:default;
    *{
        cursor:default;
    }
`

const App = ({menuItems}) => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/basket' exact component={CartPage}/>
                <Route path="/:id" exact render={
                    ({match})=>{
                        const {id} = match.params;
                        const currentItem =menuItems.filter(menuItem=>{
                            if((menuItem.title.match(/\S/g)).join("").toLowerCase().includes(id) ){
                                return menuItem;
                            } 
                            return "";
                        });
                        if(currentItem[0]){
                            return (
                                <MenuListItemWrapper currentItem={currentItem[0]}/>
                            );
                        } else {
                            return(
                                <ErrorPage404/>
                            )
                        }
                    }
                }/>
                <Route render={()=>{
                    return(
                        <ErrorPage404/>
                    )
                }}/>
            </Switch>  
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        menuItems: state.menu
    }
}
const MenuListItemWrapper=({currentItem})=>{
    return (
        <ItemWrapper>
            <MenuListItem menu={currentItem}/>
        </ItemWrapper>
    )
}
export default connect(mapStateToProps)(App);