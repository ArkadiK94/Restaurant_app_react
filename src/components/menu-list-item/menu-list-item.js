import React from 'react';
import './menu-list-item.scss';
import {Link} from 'react-router-dom';



const MenuListItem = ({menu}) => {
    const {title,url,category,price,id} = menu;
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
    return (
        
        <Link style={{color:"black",textDecoration:"none",listStyle:"none"}} to={"/"+id}>
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
        </Link> 
        
    )
}
export default MenuListItem;