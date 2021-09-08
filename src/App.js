import React, { useState } from "react";
import FrontPage from "./components/FrontPage/FrontPage";
import NameInput from "./components/NameInput/NameInput";
import ColorInput from "./components/ColorInput/ColorInput";
import Result from "./components/Result/Result";
import EmailCollect from "./components/EmailCollect/EmailCollect";

function App() {
  const [nameInput, setName] = useState("");
  const [colors, setColors] = useState(["#b6f4f4", "#d2f3f2", "#ffffff"]);
  const [route, setRoute] = useState("start");

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onColorChange = (event) => {
    let key = event.target.name * 1;
    let val = event.target.value;
    let newColors = [...colors];
    newColors[key] = val;
    setColors(newColors);
  };

  const onRouteChange = (route) => {
    setRoute(route);
  };

  return (
    <div className="App tc">
      {route === "start" ? (
        <FrontPage onRouteChange={onRouteChange} />
      ) : route === "name" ? (
        <NameInput
          onNameChange={onNameChange}
          onRouteChange={onRouteChange}
          username={nameInput}
        />
      ) : route === "color" ? (
        <ColorInput
          colors={colors}
          onColorChange={onColorChange}
          onRouteChange={onRouteChange}
        />
      ) : route === "email" ? (
        <EmailCollect onRouteChange={onRouteChange} />
      ) : (
        <Result username={nameInput} colors={colors} />
      )}
    </div>
  );
}

export default App;
