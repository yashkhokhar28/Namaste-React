import React from "react";
import ReactDOM from "react-dom";
import logo from "./Icon/logo.png";
import userIcon from "./Icon/user icon.png";
// Q1: Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I'm h1 Tag"),
  React.createElement("h2", {}, "I'm h2 Tag"),
  React.createElement("h3", {}, "I'm h3 Tag"),
]);
// Q: Create the same element using JSX
const jsxHeader = (
  <div className="title">
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
    <h3>I'm h3 Tag</h3>
  </div>
);
// Q2: Create a functional component of the same with JSX
const HeaderComponent = () => (
  <div className="title">
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
    <h3>I'm h3 Tag</h3>
  </div>
);
// Q3: Pass attribute into the tag in JSX
const jsxHeaderWithAttribute = (
  <div className="title">
    <h1 style={{ color: "blue" }}>I'm h1 Tag</h1>
    <h2 style={{ color: "red" }}>I'm h2 Tag</h2>
    <h3 style={{ color: "yellow" }}>I'm h3 Tag</h3>
  </div>
);
// Q4: Composition of Component (Add a component inside another)
const FirstComponent = () => <h1>I'm First Component</h1>;

const SecondComponent = () => (
  <>
    <FirstComponent />
    <h1>I'm Second Component</h1>
  </>
);
// Q5: `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX.
const element = <h1>This Is React Element</h1>;
const TitleComponent = () => <h1>This Is React Title Component</h1>;
const SecondHeaderComponent = () => (
  <>
    {element}
    <h1>I'm h1 Tag</h1>
    <TitleComponent />
    <h2>I'm h2 Tag</h2>
    <TitleComponent></TitleComponent>
    <h3>I'm h3 Tag</h3>
  </>
);

/*
Q6: Create a Header Component from scratch using Functional Component with JSX
- Add a Logo on Left
- Add a search bar in middle
- Add User icon on right
- Add CSS to make it look nice
*/

const FinalHeaderComponent = () => (
  <>
    <header className="header">
      <div className="left">
        <img src={logo} alt="Logo" />
      </div>
      <div className="center">
        <input
          className="input"
          type="text"
          placeholder="Search anything you want..."
        />
        <button type="submit">Submit</button>
      </div>
      <div className="right">
        <img src={userIcon} alt="User Icon" />
      </div>
    </header>
  </>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FinalHeaderComponent />);
