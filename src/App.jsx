import { useState } from "react";
import ContentA from "./ContentA";
import ContentB from "./ContentB";
import ContentC from "./ContentC";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ContentA/> */}
      {/* <ContentB/> */}
      <ContentC />

      <button className="nav_btn">Next Step</button>
      <button className="nav_btn back">Go Back</button>
    </>
  );
}

export default App;
