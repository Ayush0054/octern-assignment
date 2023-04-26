import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { InputContext } from "./context/inputcontext";
import Screen1 from "./pages/screen1";
import Screen2 from "./pages/screen2";

function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Screen1 />} />
          <Route path="/screen2" element={<Screen2 />} />
        </Routes>
      </div>
    </InputContext.Provider>
  );
}

export default App;
