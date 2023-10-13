import React from "react";
import Navigator from "./Navigator";
import "./ContentB.css";
import "./ContentD.css";
import "./ContentG.css";

const ContentG = () => {
  return (
    <main className="container">
      <Navigator />

      <div className="card">
     <div className="thanks">
     <img
          src="assets/images/icon-thank-you.svg"
          alt="thnkyou_icon"
          className="thank_img"
        />
        <h1>Thank you!</h1>
        <p>
          Thank you for confirming yor subscription! We hope you have fun using
          our platform. If you ever need support,please feel free to email us at
          support@loremgaming.com
        </p>
     </div>
      </div>
    </main>
  );
};

export default ContentG;
