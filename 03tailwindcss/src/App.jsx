import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Cards from "./Cards";

function App() {
  let myobg = {
    username: "sagar",
    age: 21,
  };
  let newArry = [1, 2, 3, 4];
  const [count, setCount] = useState(0);

  return (
    <>
      <Cards username="sagar aur afar" btntext="click me" />
      <Cards username="chai aur code" btntext="hit me" />
      <Cards />
    </>
  );
}

export default App;
