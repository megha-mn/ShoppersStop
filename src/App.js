import React,{ Component } from 'react';
import Grocery from './Components/Grocery';
import ShoppingBag from './Components/ShoppingBag';
import Stats from './Components/Stats'
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Grocery />
        <ShoppingBag />
        <Stats />
      </div>
    );
  }
}

export default App;
