import "./App.scss";
import React from "react";
const { useState, useEffect } = React;

function App() {
  const [blackRate, setBlackRate] = useState(0);
  const [chargeRate, setChargeRate] = useState(6);
  const [charges, setCharges] = useState(0);
  const [output, setOutput] = useState(30);
  const [zwPlusCharge, setZwPlusCharge] = useState(0);
  const [ratedUsdPrice, setRatedUsdPrice] = useState(0);

  /*********************************
   * SETTING THE BLACK MARKET RATE *
   *********************************/
  const handleRate = (e) => {
    if (e.target.value != 0) {
      setBlackRate(e.target.value);
    }
  };

  /*********************************
   * CALCULATING THE CHARGES*
   *********************************/

  // useEffect(() => {
  //   calcUsdEquiv();
  // }, []);

  const calcUsdEquiv = (e) => {
    if (e.target.value > 0) {
      setCharges((e.target.value * chargeRate) / 10);
      setZwPlusCharge(parseInt(e.target.value) + parseInt(charges));
      // setZwPlusCharge(e.target.value + charges);
      setRatedUsdPrice(zwPlusCharge / blackRate);
      console.log(zwPlusCharge);
      console.log(charges);
      console.log(blackRate);
    }
  };

  return (
    <div className="app-container">
      <div className="main">
        <header className="logo">
          <h1>Money Changer</h1>
        </header>
        <section className="intro">
          <p>
            Forget about doing crazy math in your head about which currency to
            use to make a purchase as we level the playing field with Money
            Changer
          </p>
        </section>
        <section className="rate-charge">
          <article className="rate">
            <label htmlFor="rate">Black Market Rate</label>
            <input
              type="number"
              name="rate"
              id="rate"
              min={0}
              onChange={handleRate}
            />
          </article>
          <section className="main-charges">
            <label htmlFor="charge">Charges</label>
            <div className="range-btn">
              <button
                className="increase"
                onClick={() => {
                  setChargeRate(chargeRate - 1);
                }}
              >
                -
              </button>
              <span className="percent">{chargeRate}%</span>
              <button
                className="decrease"
                onClick={() => {
                  setChargeRate(chargeRate + 1);
                }}
              >
                +
              </button>
            </div>
          </section>
        </section>
        <section className="product-price">
          <article className="in-zw">
            <label htmlFor="zw-price">
              Product price <span className="currency">(RTGS)</span>
            </label>
            <input type="number" min="0" id="rate" onChange={calcUsdEquiv} />
          </article>
          <article className="in-usd">
            <label htmlFor="in-usd">Equiv price</label>
            <h1>
              <span className="currency">(USD)$</span>
              <span className="equiv-price">{ratedUsdPrice}</span>
            </h1>
          </article>
        </section>
        <section className="result">
          <article className="est-usd-price">
            <label htmlFor="est-usd">What is the est USD price</label>
            <input type="number" id="esd-usd" />
          </article>
          <article className="total-saving">
            <h1>Total Saving/Losses</h1>
            <p>{output}</p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
