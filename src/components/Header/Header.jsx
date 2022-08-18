import React, { useState } from 'react';
import "../../App.css"
import s from "./header.module.css"
import { FaShoppingCart } from "react-icons/fa";
import Order from "../Order/Order";

const showOrders = (props) => {
    let total = 0
    props.orders.forEach(el => total += Number.parseInt(el.prices))
    return (<div>
        {props.orders.map(el => (
            <Order onDelete={props.onDelete} key={el.id} item={el}/>
        ))}
        <p className={s.total}>Total: {total}$</p>
    </div>)
}

const showNothing = () => {
    return (<div className="empty">
        <h2>Товаров нет</h2>
    </div> )
}

function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <div>
                <span className={s.logo}>House Staff</span>
                <ul className={s.nav}>
                    <li>Про нас</li>
                    <li>Контакты</li>
                    <li>Кабинет</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)}
                                className={`shopCartBtn ${cartOpen && 'active'}`}/>
                {cartOpen && (
                    <div className="shopCart">
                        {props.orders.length > 0 ?
                            showOrders(props) : showNothing()}
                    </div>
                )}
            </div>
            <div className={s.presentation}></div>

        </header>
    );
}

export default Header;