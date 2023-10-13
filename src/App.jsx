import { useState } from "react";
import ContentA from "./ContentA";
import ContentB from "./ContentB";
import ContentC from "./ContentC";
import ContentD from "./ContentD";
import ContentE from "./ContentE";
import ContentF from "./ContentF";
import ContentG from "./ContentG";
import "./App.css";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ContentA/> */}
      {/* <ContentB/> */}
      {/* <ContentC /> */}
      {/* <ContentD/> */}
      {/* <ContentE/> */}
      {/* <ContentF/> */}
      <ContentG/>

      <button className="nav_btn">Next Step</button>
      <button className="nav_btn back">Go Back</button>
    </>
  );
}

export default App;
