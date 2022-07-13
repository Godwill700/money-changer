import React from "react";
import Charges from "./charges";

const RateCharge = () => {
  return (
    <div>
      <section className="rate-charge">
        <article className="rate">
          <label htmlFor="rate">Black Market Rate</label>
          <input type="number" name="rate" id="rate" min={0} />
        </article>
        <Charges />
      </section>
    </div>
  );
};

export default RateCharge;
