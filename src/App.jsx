import { useState } from "react";
import ContentA from "./ContentA";
import ContentC from "./ContentC";
import ContentD from "./ContentD";
import ContentB from "./ContentB";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ContentA/>
      {/* <ContentB/> */}
      {/* <ContentC /> */}
      {/* <ContentD/> */}

      <button className="nav_btn">Next Step</button>
      <button className="nav_btn back">Go Back</button>
    </>
  );
}

export default App;
