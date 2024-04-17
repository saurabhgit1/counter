import React, { useState } from "react";

export default function useCounter(initValue=0,counterBy=1) {
  const [count, setCount] = useState(initValue);

  function increment() {
    setCount(count + counterBy);
  }
  function decrement() {
    setCount(count - counterBy);
  }
  function reset() {
    setCount(0);
  }
  return [count, increment, decrement, reset];
}
