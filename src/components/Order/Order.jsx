import React from 'react';
import { FaTrash } from 'react-icons/fa'

export default class Order extends React.Component {
    render() {
        return (
            <div className="item">
                <img src={"./img/" + this.props.item.img}/>
                <h2>{this.props.item.name}</h2>
                <b>{this.props.item.prices}</b>
                <FaTrash className="delete" onClick={() => this.props.onDelete(this.props.item.id)}/>
            </div>
        );
    }
}
