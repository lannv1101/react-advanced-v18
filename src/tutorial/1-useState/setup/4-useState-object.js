import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: "23",
    message: "random message",
  });

  const [name, setName] = useState('petter');
  const [age, setAge] = useState(23);
  const [message, setMessage] = useState("Random Message"
  )
  const changeMessage = () => {
    setMessage("ABC");
    setAge(30);
    setName("Lan vu Nguyen")
  }
  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{message}</h2>
      <button className="btn" onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
