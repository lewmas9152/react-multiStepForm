import React from "react";
import Navigator from "./Navigator";
import "./ContentB.css";
import "./ContentD.css";
import "./ContentF.css";

const ContentF = () => {
  return (
    <main className="container">
      <Navigator />

      <div className="card">
        <h1> Finishing up</h1>
        <p> Double-check everything looks OK before confirming</p>

        <div className="choice">
          <div className="selections">
            <p className="label">
              Arcade(Monthly)
              <p className="change">Change</p>
            </p>
            <p className="priceChoice pay">$9/mo</p>
            <hr />
            <p>Online service</p>
            <p className="extraPay pay">+$1/mo</p>

            <p>Larger Storage</p>
            <p className="extraPay pay">+$2/mo</p>

            <p>Total (per month)</p>
            <p className="Total pay">+$12/mo</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContentF;
