import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Categories from "./components/Categories/Categories";
import ShowFullItem from "./components/ShowFullItem/ShowFullItem";

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          orders: [],
          currentItems: [],
          items: [
              {
                  id: 1,
                  name: "Стул",
                  img: "Stul.jpeg",
                  description: "Коричневый",
                  category: "Chairs",
                  prices: "50$",
              },

              {
                  id: 2,
                  name: "Кресло",
                  img: "Kreslo.jpg",
                  description: "Серый",
                  category: "Kreslo",
                  prices: "90$",
              },

              {
                  id: 3,
                  name: "Диван",
                  img: "Divan.jpg",
                  description: "Оранжевый",
                  category: "Divan",
                  prices: "100$",
              },

              {
                  id: 4,
                  name: "Лампа",
                  img: "Lampa.jpg",
                  description: "Черная",
                  category: "Lamps",
                  prices: "20$",
              },
              {
                  id: 5,
                  name: "Стол",
                  img: "Stol.jpg",
                  description: "Белый",
                  category: "Tables",
                  prices: "70$",
              },
              {
                  id: 6,
                  name: "Стол",
                  img: "Stol2.jpg",
                  description: "Белый",
                  category: "Tables",
                  prices: "150$",
              }
          ],
          showFullItem: false,
          fullItem: {}
      }
      this.state.currentItems = this.state.items
      this.addToOrder = this.addToOrder.bind(this)
      this.deleteOrder = this.deleteOrder.bind(this)
      this.chooseCategory = this.chooseCategory.bind(this)
      this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
      return (
          <div className="app-wrapper">
              <Header orders={this.state.orders} onDelete={this.deleteOrder} />
              <Categories chooseCategory={this.chooseCategory} />
              <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

              {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
              <Footer />
          </div>
      );
  }

  onShowItem(item) {
      this.setState({fullItem: item})
      this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
      if(category === "all") {
          this.setState({currentItems: this.state.items})
          return
      }

      this.setState({
          currentItems: this.state.items.filter(el => el.category === category)
      })
  }

  deleteOrder(id) {
      this.setState({
          orders: this.state.orders.filter(el => el.id !== id)
      })
  }

  addToOrder(item) {
      let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id)
            isInArray = true
        })
        if(!isInArray)
          this.setState({orders: [...this.state.orders, item]})
     }
  }

export default App;
