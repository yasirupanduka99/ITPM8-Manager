//In here we are create Browser routers

import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import FoodItemHome from './components/FoodItemHome';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import FoodItemDetails from './components/FoodItemDetails';
import FoodItemEdit from './components/FoodItemEdit';
import DashBoard from './components/DashBoard';

export default class App extends Component {                     // <--------------this APP class we extends using Component class
  render() {
    return (

      <BrowserRouter>
        
        <div className="container1">
          <SideBar/>
          <Route path="/" exact component = {DashBoard}></Route>
          <Route path="/FoodItems/edit/:id" component = {FoodItemEdit}></Route>
          <Route path="/FoodItems" exact component = {FoodItemHome}></Route>
          <Route path="/FoodItems/Details/:id" component = {FoodItemDetails}></Route>
          
        </div>
        <Footer/>
      </BrowserRouter>

    )
  }
}