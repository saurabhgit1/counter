import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

export default function CompB() {
  //   const [count, setCount] = useState(0);
  //   function increment() {
  //     setCount(count + 1);
  //     // console.log("cc", count);
  //   }
  //   function decrement() {
  //     setCount(count - 1);
  //     // console.log("cc", count);
  //   }
  //   function reset() {
  //     setCount(0);
  //     // console.log("cc", count);
  //   }
  const [count, increment, decrement, reset] = useCounter(0,5);

  return (
    <>
      <h1>Comp B</h1>
      <h3>Count = {count}</h3>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
