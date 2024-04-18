import React, { useState } from "react";

export default function useInput(initValue = "") {
  const [value, setValue] = useState(initValue);
  const bindObj = {
    value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };
  const resetValue = () => {
    setValue(initValue);
  };

  return [value, bindObj, resetValue];
}
