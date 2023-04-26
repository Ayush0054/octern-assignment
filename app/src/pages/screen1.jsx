import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputContext } from "../context/inputcontext";

const Screen1 = () => {
  const { inputValue, setInputValue } = useContext(InputContext);
  const navigate = useNavigate();
  // const { setInput } = useContext(InputContext);
  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      navigate("/screen2");
    } else {
      alert("Please provide a non-empty value");
    }
  };

  return (
    <InputContext.Provider value={{ inputValue }}>
      <div style={{ display: "grid", justifyItems: "center", gap: "10px" }}>
        <h2>submit a string</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </InputContext.Provider>
  );
};

export default Screen1;
