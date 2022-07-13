import React from "react";

const Result = () => {
  return (
    <div>
      <section className="result">
        <article className="est-usd-price">
          <label htmlFor="est-usd-price">What is the est USD price</label>
          <input type="number" />
        </article>
        <article className="total-saving">
          <h1>Total Saving/Losses</h1>
          <p>$200</p>
        </article>
      </section>
    </div>
  );
};

export default Result;
