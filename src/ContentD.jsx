import React from "react";
import Navigator from "./Navigator";
import "./ContentB.css";
import "./ContentD.css";

const ContentD = () => {
  return (
    <main className="container">
      <Navigator />

      <div className="card">
        <h1> Pick add-ons</h1>
        <p> Add-ons help enhance your gaming experience.</p>

        <div className="plansD">
          <button className="button">
            <div className="descD">
              <input type="checkbox" />
              <div className="Desc1">
                <p className="label">Online service</p>
                <p>Access to Multiplayer games</p>
              </div>
            </div>
            <p className="extraPay">+$1/mo</p>
          </button>
          <button className="button">
            <div className="descD">
              <input type="checkbox" />
              <div className="Desc2">
                <p className="label">Larger storage</p>
                <p> Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="extraPay"> +$2/mo</p>
          </button>
          <button className="button">
            <div className="descD">
              <input type="checkbox" />
              <div className="Desc1">
                <p className="label">Customizable profile</p>
                <p>Custom theme on your profile</p>
              </div>
            </div>
            <p className="extraPay">+$2/mo</p>
          </button>{" "}
        </div>
      </div>
    </main>
  );
};

export default ContentD;
