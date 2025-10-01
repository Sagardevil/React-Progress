import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter > 20) {
    } else {
      setCounter((prevcounter) => prevcounter + 1);
      setCounter((prevcounter) => prevcounter + 1);
      setCounter((prevcounter) => prevcounter + 1);
      setCounter((prevcounter) => prevcounter + 1);
    }
  };
  const decValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur sagar</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={decValue}>Decrease Value</button>
    </>
  );
}

export default App;
