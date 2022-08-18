import React from 'react';
import s from "./item.module.css"

export default class Item extends React.Component {
    render() {
        return (
            <div className={s.item}>
                <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
                <h2>{this.props.item.name}</h2>
                <p>{this.props.item.description}</p>
                <b>{this.props.item.prices}</b>
                <div className={s.addToCart} onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        );
    }
}
