import React,{Component} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Spinner from '../spinner';
import {menuLoaded,menuRequest,menuError} from '../../actions';
import WithRestoService from '../hoc';
import {ErrorPage404} from '../error';

const ItemWrapper = styled.div`
    height:100vh;
    display:flex;
    justify-content:center;
    cursor:default;
    li{
        height:480px;
        list-style:none;
    }
`;

class ItemPage extends Component{
    async componentDidMount(){
        const {restoService,menuLoaded,menuError,menuRequest} = this.props;
        menuRequest();
        await restoService.getListItem()
            .then(res=>menuLoaded(res))
            .catch(()=>menuError());

    }
    render(){
        if(this.props.loading){
            return <Spinner/>
        }
        const {id} = this.props.match.params;
        const menuData = this.props.menuItems.find(element=>element.id === +id);
        if(!menuData){
            return <ErrorPage404/>
        }
        const {title,url,category,price} = menuData;
        
        let categoryImg = <></>;
        switch(category){
            case "salads":
                categoryImg = <i className="fas fa-carrot"></i>;
                break;
            case "pizza":
                categoryImg = <i className="fas fa-pizza-slice"></i>;
                break;
            case "meat":
                categoryImg = <i className="fas fa-drumstick-bite"></i>;
                break;
            default:
                categoryImg = <></>;
        }
        return(
            <ItemWrapper>
                <li className="menu__item">
                    <div className="menu__title">{title}</div>
                    <img className="menu__img" src={url} alt={title}></img>
                    <div className="menu__category">
                        Category: <span>{category}</span>
                        <br/>{categoryImg}
                    </div>
                    <div className="menu__price">Price: <span>{price}$</span></div>
                    <button className="menu__btn">Add to cart</button>
                </li>
            </ItemWrapper>
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
    menuError
}

export default WithRestoService(connect(mapStateToProps,mapDispatchToProps)(ItemPage));


                


