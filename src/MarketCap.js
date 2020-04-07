import React, { Component } from "react";
import axios from 'axios';
 
class MarketCap extends Component {
        state = {
          coins: []
        }
      
        componentDidMount() {
          axios.get('https://api.coincap.io/v2/assets/bitcoin')
            .then(res => {
              const coins = res.data.data;
              this.setState({ coins });
            })
        }
      
        render() {
            const coins = this.state.coins
            return (
                <div className="content1">
                <h2>{coins.name}: ${coins.priceUsd}</h2>
                </div>
            )
        }    
}
 
export default MarketCap;