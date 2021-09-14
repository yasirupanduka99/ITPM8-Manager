import React, { Component } from 'react';

export default class SideBar extends Component {




  render() {
    return (

                
              <div className="dash_container">	
                <div className="dashbtnbox">
                    <p id="date"></p>
                    <button type="button" className="dashbtn01"><a style={{textDecoration:'none', color:'white'}} href="/">Dashboard</a></button>
                    <button type="button" className="dashbtn02">Inventry Control</button>
                    <button type="button" className="dashbtn03"><a style={{textDecoration:'none', color:'white'}} href="/FoodItems">Food Items</a></button>
                    <button type="button" className="dashbtn04">Discount/Offers</button>
                    <button type="button" className="dashbtn05">Costing</button>
                    <button type="button" className="dashbtn06">User Account</button>
                    <button type="button" className="dashbtn07">Staff</button>
                    <button type="button" className="dashbtn08">Payment</button>
                    <button type="button" className="dashbtn09">Order</button>
                </div>
              </div>

    )
  }
}