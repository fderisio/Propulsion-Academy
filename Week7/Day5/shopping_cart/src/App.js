import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import AppBarIcon from './components/AppBarIcon';
import BlouseGrid from './components/Grid';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import blouse1 from './components/Grid/Images/blouse1.jpg';
import blouse2 from './components/Grid/Images/blouse2.jpg';
import blouse3 from './components/Grid/Images/blouse3.jpg';
import blouse4 from './components/Grid/Images/blouse4.jpg';
import blouse5 from './components/Grid/Images/blouse5.jpg';
import blouse6 from './components/Grid/Images/blouse6.jpg';
import blouse7 from './components/Grid/Images/blouse7.jpg';
import blouse8 from './components/Grid/Images/blouse8.jpg';
import blouse9 from './components/Grid/Images/blouse9.jpg';

class App extends Component {

  constructor(props) {
    super(props); // constructor of react component
    this.state = {
      blouses : [
        { id: 1, img: blouse1, title: 'Palms', quantity: 1, price: 10 , discount: 20 },
        { id: 2, img: blouse2, title: 'Black Ribbon', quantity: 1, price: 20, discount: 20 },
        { id: 3, img: blouse3, title: 'Flower Path', quantity: 1,price: 9.90 , discount: 0 },
        { id: 4, img: blouse4, title: 'Light Green', quantity: 1, price: 15.90 , discount: 0 },
        { id: 5, img: blouse5, title: 'Black', quantity: 1, price: 9.90 , discount: 0 },
        { id: 6, img: blouse6, title: 'Dark Orange', quantity: 1, price: 9.90 , discount: 0 },
        { id: 7, img: blouse7, title: 'White', quantity: 1, price: 9.90 , discount: 0 },
        { id: 8, img: blouse8, title: 'Dark Green', quantity: 1, price: 19.90 , discount: 0 },
        { id: 9, img: blouse9, title: 'Blue Flowers', quantity: 1, price: 9.90 , discount: 0 },
      ],
      inCart : {},
      totalPrice : 0,
    }
  }
  
  addToCart = (id) => {
    const products = [ ...this.state.blouses ]
    let selectedProducts = { ...this.state.inCart };
    let total = this.state.totalPrice;

    // update products in the cart
    if (selectedProducts[id]) {
      selectedProducts[id]++;
    } else {
      selectedProducts[id] = 1;  
    }

    // calculates total price
    for (let i=0; i<products.length; i++) {
      if (id === products[i].id && products[i].discount > 0) {
        total = total + (products[i].price * (1-products[i].discount/100));
      } else if (id === products[i].id) {
        total += products[i].price;
      }
    }

    // update state
    this.setState({
      inCart : selectedProducts,
      totalPrice : total
    })    
  }

  deleteItem = (id) => {
    const products = [ ...this.state.blouses ]
    const selectedProducts = { ...this.state.inCart };
    let total = this.state.totalPrice;

    // updates total price
    for (let i=0; i<products.length; i++) {
      if (id === products[i].id && products[i].discount > 0) {
        let finalPrice = (products[i].price * (1-(products[i].discount/100)) * selectedProducts[id]);
        total = total - finalPrice;
        break;
      } else if (id === products[i].id  && products[i].discount === 0) {
        total = total - (products[i].price * selectedProducts[id]);
        break;
      }
    }

    // delete product from cart
    delete selectedProducts[id];

    // update state
    this.setState({
      inCart : selectedProducts,
      totalPrice : total,
    }) 
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AppBarIcon />
        <div className="wrapper">
          <div className="Grid">
            <BlouseGrid blouses={ this.state.blouses } addNewProduct={ this.addToCart }/>
          </div>
          <div className="Cart">
            <ShoppingCart blouses={ this.state.blouses } inCart={this.state.inCart } total={ this.state.totalPrice } delete={this.deleteItem}/>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}

export default App;
