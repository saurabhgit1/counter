import React, { useState } from "react";

export default function CompA() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
    // console.log("cc", count);
  }
  function decrement() {
    setCount(count - 1);
    // console.log("cc", count);
  }
  function reset() {
    setCount(0);
    // console.log("cc", count);
  }
  return (
    <>
      <h1>CompA</h1>
      <h3>Count = {count}</h3>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
