import React from 'react';
import {MainPage, CartPage,ItemPage} from '../pages';
import AppHeader from '../app-header';
import Background from './food-bg.jpg';
import {Route,Switch} from 'react-router-dom';
import {ErrorPage404} from '../error';
import {connect} from 'react-redux';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/basket' exact component={CartPage}/>
                <Route path="/:id" exact component={ItemPage}/>
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

export default connect(mapStateToProps)(App);