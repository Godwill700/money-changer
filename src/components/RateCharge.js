import React from "react";

const { useState } = React;

const RateCharge = () => {
  const [percent, setPercent] = useState(6);

  // increaseIt()=> {
  // setPercent(++)
  // }
  // const increaseIt = () => {
  //   // const count
  //   setPercent(percent + 1);
  // };

  return (
    <div>
      <section className="rate-charge">
        <article className="rate">
          <label htmlFor="rate">Black Market Rate</label>
          <input type="number" name="rate" id="rate" min={0} />
        </article>
        <section className="main-charges">
          <label htmlFor="charge">Charges</label>
          <div className="range-btn">
            <button
              className="increase"
              onClick={() => {
                setPercent(percent + 1);
              }}
            >
              +
            </button>
            <span className="percent">{percent}%</span>
            <button
              className="decrease"
              onClick={() => {
                setPercent(percent - 1);
              }}
            >
              -
            </button>
          </div>
        </section>
      </section>
    </div>
  );
};

export default RateCharge;
