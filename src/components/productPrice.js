import React from "react";
import { useState } from "react";

const ProductPrice = () => {
  const [rate, setRate] = useState(0);

  const take = () => {
    setRate(2);
    console.log(rate);
  };

  return (
    <div>
      <section className="product-price">
        <article className="in-zw">
          <label htmlFor="zw-price">
            Product price <span className="currency">(RTGS)</span>
          </label>
          <input type="number" min="0" id="rate" />
        </article>
        <article className="in-usd">
          <label htmlFor="in-usd">Equiv price</label>
          <h1>
            <span className="currency">(USD)$</span>
            <span className="equiv-price">245</span>
          </h1>
        </article>
      </section>
    </div>
  );
};

export default ProductPrice;
