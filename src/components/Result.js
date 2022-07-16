import React from "react";
import { useState } from "react";

const Result = () => {
  const [output, setOutput] = useState(30);
  const [estUsd, setEstUsd] = useState(4);

  // setOutput(estUsd);
  // console.log(estUsd);

  return (
    <div>
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
  );
};

export default Result;
