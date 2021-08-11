import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc';
import Background from './food-bg.jpg';
import {Route,Switch,Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import styled from 'styled-components';

const ErrorPage = styled.div`
    height:100vh;
    display:flex;
    flex-direction:column;
    align-items: center;
`
const TextColor = styled.div`
    color:white;
    font-size: 20px;
`
const App = ({restoService}) => {
    restoService.getListItem()
        .then(menu=>console.log(menu))
        .catch(error=> {
            throw new Error (`${error}`)
        });

    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Switch>
                <Route path='/' exact component={MainPage}/>
                <Route path='/basket' exact component={CartPage}/>
                <Route render={()=>{
                    return(
                        <ErrorPage404/>
                    )
                }}/>
            </Switch>  
        </div>
    )
}
const ErrorPage404 = ()=>{
    return(
        <ErrorPage>
            <TextColor>404 Page Not Found</TextColor>
            <Button>
                <Link to="/">
                    go to main page
                </Link>
            </Button>
        </ErrorPage>
    )
}

export default WithRestoService(App);