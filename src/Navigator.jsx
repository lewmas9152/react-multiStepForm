import React from "react";
import "./App.css";

const Navigator = () => {
  return (
    <div>
      <nav className="nav_elements">
        <label className="form_control">
          <input type="radio" name="radio" value={1} />
          <pre>1</pre>
          <p className="label_nav">Step 1 <span>Your info</span></p>
        </label>

        <label className="form_control">
          <input type="radio" name="radio" value={2} />
          <pre>2</pre>
          <p className="label_nav">Step 2 <span>Select plan</span></p>
        </label>

        <label className="form_control">
          <input type="radio" name="radio" value={3} />
          <pre>3</pre>
          <p className="label_nav">Step  <span>Add-ons</span></p>
        </label>

        <label className="form_control">
          <input type="radio" name="radio" value={4} />
          <pre>4</pre>
          <p className="label_nav">Step 4 <span>Summary</span></p>
        </label>
      </nav>
    </div>
  );
};

export default Navigator;
