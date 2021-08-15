import React from 'react';
import './menu-list-item.scss';
import {Link} from 'react-router-dom';



const MenuListItem = ({menu,onAdd}) => {
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
        <li className="menu__item">
            <Link style={{color:"black",textDecoration:"none",listStyle:"none"}} to={"/"+id}>
                <div className="menu__title">{title}</div>
                <img className="menu__img" src={url} alt={title}></img>
                <div className="menu__category">
                    Category: <span>{category}</span>
                    <br/>{categoryImg}
                </div>
                <div className="menu__price">Price: <span>{price}$</span></div>
            </Link>
            <button 
                className="menu__btn"
                onClick={()=>onAdd(id)}>
                    Add to cart
            </button>
        </li>
    )
}
export default MenuListItem;