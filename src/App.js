import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Crixus" animal="Cat" breed="Domestic Shorthair" />
      <Pet name="Princess" animal="Dog" breed="Mixed" />
      <Pet name="Jacob" animal="Pig" breed="Import" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
