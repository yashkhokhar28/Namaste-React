import React from "react";
import ReactDOM from "react-dom/client";

// React Element (It is not html element it is object and after render in DOM it becomes html element)
const heading = React.createElement("h1", { id: "heading" }, "Hii");

// JSX => it not html inside javascript it is html like/XML like syntax
// it first transpiled before it reaches the JS Engine by Pracel => (Babel)
const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>;

// React Components
// Class Based Components - OLD
// Functional Components - NEW
// Component Composition
const HeadingComponent = () => (
  <div id="container">
    {/* we can also use <Title()> */}
    {/* we can also use <Title></Title> */}
    <TitleComponent />
    <h1 className="header">Namaste React Functional Components</h1>
  </div>
);

const TitleComponent = () => <h1>Title Component</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <HeadingComponent />
    <TitleComponent />
  </>
);
