import React, {Component} from 'react';
import s from "../Item/item.module.css"

class ShowFullItem extends Component {
    render() {
        return (
            <div className={s.full_item}>
                <div>
                    <img src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)}/>
                    <h2>{this.props.item.name}</h2>
                    <p>{this.props.item.description}</p>
                    <b>{this.props.item.prices}</b>
                    <div className={s.addToCart} onClick={() => this.props.onAdd(this.props.item)}>+</div>
                </div>
            </div>
        );
    }
}

export default ShowFullItem;