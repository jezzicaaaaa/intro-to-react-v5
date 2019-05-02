const Pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};

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

ReactDOM.render(React.createElement(App), document.getElementById("root"));
