import React, { useContext, useState, useEffect, useCallback } from "react";
import { InputContext } from "../context/inputcontext";
import { useNavigate } from "react-router-dom";
import "./screen2.css";
function Screen2() {
  const { inputValue, setInputValue } = useContext(InputContext);
  const navigate = useNavigate();
  const [originalString, setOriginalString] = useState(
    inputValue.replace(/[^A-Za-z]/g, "")
  );

  const [resultantString, setResultantString] = useState(
    inputValue.replace(/[^A-Za-z]/g, "")
  );

  const characters = [...resultantString];

  function colorizeString(str) {
    const colors = {}; // object to store color assignments
    let colorIndex = 0; // initialize color index
    let result = []; // initialize result string

    // loop through each character in the input string
    for (let i = 0; i < str.length; i++) {
      const char = str[i]; // get current character

      // if character already has a color assignment, use that color
      if (colors[char]) {
        result.push(` ${colors[char]}`);
      } else {
        // otherwise, assign a new color to the character
        const color = getRandomColor(); // generate a random color
        colors[char] = color; // store the color assignment
        result.push(`${color}`);
        colorIndex++; // increment color index
      }
    }

    return result;
  }
  function removeDuplicates(name, char, index) {
    const newArr = [];
    for (let i = 0; i < name.length; i++) {
      if (name[i] === char) {
        if (i !== index) {
          continue;
        } else {
          newArr.push(name[i]);
        }
      } else {
        newArr.push(name[i]);
      }
    }

    console.log("hello");
    // return newArr;
    return setResultantString(newArr);
  }

  // function to generate a random color
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  const coloredString = colorizeString(characters);

  const hasDuplicates = characters.some(
    (char) => characters.indexOf(char) !== characters.lastIndexOf(char)
  );

  const handleBack = () => {
    navigate("/");
    setInputValue("");
    setOriginalString("");
    setResultantString("");
  };

  return (
    <div className="screen2">
      <div className="card">
        {characters &&
          characters.map((c, i) => (
            <div className="main" style={{ backgroundColor: coloredString[i] }}>
              {/* {console.log(characters, c, i)} */}
              <button onClick={() => removeDuplicates(characters, c, i)}>
                delete
              </button>
              <h1>{characters[i]}</h1>
            </div>
          ))}
      </div>
      {!hasDuplicates && (
        <>
          <h1>Success!</h1>
          <p>Original String: {originalString}</p>
          <p>Resultant String: {characters.join("")}</p>
        </>
      )}
      <button onClick={handleBack}>Go back</button>
    </div>
  );
}

export default Screen2;
