import './ExchangeCalculator.css';
import React from 'react';

class  ExchangeCalculator extends React.Component {

  constructor(props){
    super(props);
    this.state={
      cur1:"USD",
      cur2:"EUR",
      amount:0,
      rate:0,
      signboard:'',
      signboard2:''
    }
  }
  // write you own wxchange-api.com api key below
  FetchTheRate(){
    fetch(`https://v6.exchangerate-api.com/v6/your_apikey_comes_here/latest/${this.state.cur1}`)
    .then(res=>res.json())
    .then((data)=>{
      this.setState(()=>{
        return{
          rate:data.conversion_rates[this.state.cur2]
        }
      })
    })
  }


  componentDidMount(){
    this.FetchTheRate()
    this.signBoard()
  }

  setCur1=(e)=>{
    const cur1 = e.target.value
    this.setState(()=>{
      return{
        cur1:cur1
      }
    })

    setTimeout(()=>{this.FetchTheRate()},100)
    setTimeout(()=>{this.signBoard()},250)

  }

  setCur2=(e)=>{
    const cur2 = e.target.value
    this.setState(()=>{
      return{
        cur2:cur2
      }
    })
    setTimeout(()=>{this.FetchTheRate()},100)
    setTimeout(()=>{this.signBoard()},250)

  }

  patchAmount =(e)=>{
    const amount1 = e.target.value

    this.setState(()=>{
      return{
        amount:amount1
      }
    })
    setTimeout(()=>{this.FetchTheRate()},100)
    setTimeout(()=>{this.signBoard()},250)


  }
  

  signBoard = () => {
    const txt = +this.state.rate*+this.state.amount
    const txt2 = +this.state.amount/+this.state.rate
    this.setState(()=>{
      return{
        signboard:txt.toFixed(2),
        signboard2:txt2.toFixed(2),

      }
    })
  }





  render(){

    return (
      <div className="mainFrame">
        <h1>Exchange Calculator</h1>
        <div id="pic-div">
          <img src="img/pexels-oleg-magni.jpg" id="pic" alt=""/>
        </div>
        <div id="controls">
          <select id="currency-1" value={this.state.cur1} onChange={this.setCur1}>
                  <option value="AED">AED</option>
                  <option value="ARS">ARS</option>
                  <option value="AUD">AUD</option>
                  <option value="BGN">BGN</option>
                  <option value="BRL">BRL</option>
                  <option value="BSD">BSD</option>
                  <option value="CAD">CAD</option>
                  <option value="CHF">CHF</option>
                  <option value="CLP">CLP</option>
                  <option value="CNY">CNY</option>
                  <option value="COP">COP</option>
                  <option value="CZK">CZK</option>
                  <option value="DKK">DKK</option>
                  <option value="DOP">DOP</option>
                  <option value="EGP">EGP</option>
                  <option value="EUR">EUR</option>
                  <option value="FJD">FJD</option>
                  <option value="GBP">GBP</option>
                  <option value="GTQ">GTQ</option>
                  <option value="HKD">HKD</option>
                  <option value="HRK">HRK</option>
                  <option value="HUF">HUF</option>
                  <option value="IDR">IDR</option>
                  <option value="ILS">ILS</option>
                  <option value="INR">INR</option>
                  <option value="ISK">ISK</option>
                  <option value="JPY">JPY</option>
                  <option value="KRW">KRW</option>
                  <option value="KZT">KZT</option>
                  <option value="MXN">MXN</option>
                  <option value="MYR">MYR</option>
                  <option value="NOK">NOK</option>
                  <option value="NZD">NZD</option>
                  <option value="PAB">PAB</option>
                  <option value="PEN">PEN</option>
                  <option value="PHP">PHP</option>
                  <option value="PKR">PKR</option>
                  <option value="PLN">PLN</option>
                  <option value="PYG">PYG</option>
                  <option value="RON">RON</option>
                  <option value="RUB">RUB</option>
                  <option value="SAR">SAR</option>
                  <option value="SEK">SEK</option>
                  <option value="SGD">SGD</option>
                  <option value="THB">THB</option>
                  <option value="TRY">TRY</option>
                  <option value="TWD">TWD</option>
                  <option value="UAH">UAH</option>
                  <option value="USD">USD</option>
                  <option value="UYU">UYU</option>
                  <option value="VND">VND</option>
                  <option value="ZAR">ZAR</option>
          </select>
  
          <span><i className="fas fa-arrows-alt-h fa-4x"></i></span>
  
          <select id="currency-1" value={this.state.cur2} onChange={this.setCur2}>
                  <option value="AED">AED</option>
                  <option value="ARS">ARS</option>
                  <option value="AUD">AUD</option>
                  <option value="BGN">BGN</option>
                  <option value="BRL">BRL</option>
                  <option value="BSD">BSD</option>
                  <option value="CAD">CAD</option>
                  <option value="CHF">CHF</option>
                  <option value="CLP">CLP</option>
                  <option value="CNY">CNY</option>
                  <option value="COP">COP</option>
                  <option value="CZK">CZK</option>
                  <option value="DKK">DKK</option>
                  <option value="DOP">DOP</option>
                  <option value="EGP">EGP</option>
                  <option value="EUR">EUR</option>
                  <option value="FJD">FJD</option>
                  <option value="GBP">GBP</option>
                  <option value="GTQ">GTQ</option>
                  <option value="HKD">HKD</option>
                  <option value="HRK">HRK</option>
                  <option value="HUF">HUF</option>
                  <option value="IDR">IDR</option>
                  <option value="ILS">ILS</option>
                  <option value="INR">INR</option>
                  <option value="ISK">ISK</option>
                  <option value="JPY">JPY</option>
                  <option value="KRW">KRW</option>
                  <option value="KZT">KZT</option>
                  <option value="MXN">MXN</option>
                  <option value="MYR">MYR</option>
                  <option value="NOK">NOK</option>
                  <option value="NZD">NZD</option>
                  <option value="PAB">PAB</option>
                  <option value="PEN">PEN</option>
                  <option value="PHP">PHP</option>
                  <option value="PKR">PKR</option>
                  <option value="PLN">PLN</option>
                  <option value="PYG">PYG</option>
                  <option value="RON">RON</option>
                  <option value="RUB">RUB</option>
                  <option value="SAR">SAR</option>
                  <option value="SEK">SEK</option>
                  <option value="SGD">SGD</option>
                  <option value="THB">THB</option>
                  <option value="TRY">TRY</option>
                  <option value="TWD">TWD</option>
                  <option value="UAH">UAH</option>
                  <option value="USD">USD</option>
                  <option value="UYU">UYU</option>
                  <option value="VND">VND</option>
                  <option value="ZAR">ZAR</option>
          </select>
        </div>
        
        <p id="rate"></p>

        <div className="signboard">
          <input type="number" id="amount" placeholder="0" value={this.state.amount} onInput={this.patchAmount}/>
          <p>{this.state.cur1} is equal to <strong>{this.state.signboard}</strong> {this.state.cur2}</p>
          
        </div>
        <small className="reverse">{this.state.amount} {this.state.cur2} is equal to <strong>{this.state.signboard2}</strong> {this.state.cur1}</small>

      </div>

    );
  }
  
}

export default ExchangeCalculator;

