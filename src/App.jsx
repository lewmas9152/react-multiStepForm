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

  const incrementCount = () => {
    if (count < 6) {
      setCount(count + 1);
    }
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const togglePages = () => {
    switch (count) {
      case 0:
        return <ContentA />;
      case 1:
        return <ContentB />;
      case 2:
        return <ContentC />;
      case 3:
        return <ContentD />;
      case 4:
        return <ContentE />;
      case 5:
        return <ContentF />;
      case 6:
        return <ContentG />;
      default:
        return null;
    }
  };

  return (
    <div>
      <button className="nav_btn" onClick={incrementCount}>
        Next Step
      </button>
      <button className="nav_btn back" onClick={decrementCount}>
        Go Back
      </button>

      {togglePages()}
    </div>
  );
}

export default App;
