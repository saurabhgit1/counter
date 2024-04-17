import { useState } from "react";
import { CompA, CompB } from "./components";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter Example</h1>
      <CompA ></CompA>
      <CompB></CompB>
    </>
  );
}

export default App;
