import { useState } from "react";
import { CompA, CompB, UserForm } from "./components";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>Form Example</h1>
      <UserForm></UserForm>
      <h1>Counter Example</h1>
      <CompA></CompA>
      <CompB></CompB>
    </>
  );
}

export default App;
