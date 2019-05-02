import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "something-important" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Crixus",
      animal: "Cat",
      breed: "Domestic Shorthair"
    }),
    React.createElement(Pet, {
      name: "Princess",
      animal: "Dog",
      breed: "Mixed"
    }),
    React.createElement(Pet, {
      name: "Jacob",
      animal: "Pig",
      breed: "Import"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
