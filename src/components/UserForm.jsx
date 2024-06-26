import React, { useState } from "react";
import useInput from "../hooks/useInput";

export default function UserForm() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");

  const submitHandler = (e) => {
    e.preventDefault();
    resetFirstName();
    resetLastName();
    alert("hello" + firstName + "" + lastName);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" {...bindFirstName} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...bindLastName} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
