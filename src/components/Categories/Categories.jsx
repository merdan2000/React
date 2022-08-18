import React, {Component} from 'react';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [
                {
                    key: "all",
                    name: "Все",
                },
                {
                    key: "Chairs",
                    name: "Стулья",
                },
                {
                    key: "Kreslo",
                    name: "Кресла",
                },
                {
                    key: "Divan",
                    name: "Divan",
                },
                {
                    key: "Lamps",
                    name: "Лампы",
                },
                {
                    key: "Tables",
                    name: "Столы",
                }
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
            </div>
        );
    }
}

export default Categories;