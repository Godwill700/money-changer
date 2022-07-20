import "./App.scss";
import React from "react";
const { useState, useEffect } = React;

function App() {
  const [blackRate, setBlackRate] = useState(0);
  const [chargeRate, setChargeRate] = useState(6);
  const [charges, setCharges] = useState(0);
  const [savingOrLoss, setSavingOrLoss] = useState((0).toFixed(2));
  const [zwPrice, setZwPrice] = useState(0);
  const [zwPlusCharge, setZwPlusCharge] = useState(0);
  const [ratedUsdPrice, setRatedUsdPrice] = useState((0).toFixed(2));
  const [saving, setSaving] = useState("Saving");

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
    setZwPrice(parseFloat(e.target.value));
    setCharges(zwPrice * chargeRate);
    setZwPlusCharge(zwPrice + charges);
    setRatedUsdPrice((zwPlusCharge / blackRate).toFixed(2));
    console.log(zwPlusCharge);
    console.log(charges);
    console.log(zwPrice);
    console.log(e.target.value);
  };

  /****************************
   * CALCULATE SAVING OR LOSS *
   ****************************/
  const calcSaving = (e) => {
    if (e.target.value > "0") {
      setSavingOrLoss((ratedUsdPrice - e.target.value).toFixed(2));
    }
    if (savingOrLoss > 0) {
      setSaving("Loss");
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
            Take a break from doing crazy mental calculations on which currency
            to use to make your next purchase. Relax, let the Money Changer
            handle that for you.
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
              <span className="currency">(USD)</span>
              <span className="equiv-price">${ratedUsdPrice}</span>
            </h1>
          </article>
        </section>
        <section className="result">
          <article className="est-usd-price">
            <label htmlFor="est-usd">What is the est USD price</label>
            <input type="number" id="est-usd" onChange={calcSaving} />
          </article>
          <article className="total-saving">
            <h1>Total {saving}</h1>
            <p>${savingOrLoss}</p>
          </article>
        </section>
      </div>
    </div>
  );
}

export default App;
