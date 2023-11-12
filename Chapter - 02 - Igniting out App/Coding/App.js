import React from "react";
import ReactDOM from "react-dom/client";

// Manipulate the HTML DOM using Javscript
const heading = document.createElement("h1");
heading.innerHTML = "Hello World!";
const root = document.getElementById("root");
root.appendChild(heading);

// Manipulate the HTML DOM using React
/*
<div id="parent">
<div id="child">
<h1>I'am H1 Tag</h1>
<h2>I'am H2 Tag</h2>
</div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'am H1 Tag"),
    React.createElement("h2", {}, "I'am H2 Tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'am H1 Tag"),
    React.createElement("h2", {}, "I'am H2 Tag"),
  ]),
]);

// create root using createRoot
const root1 = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root1.render(parent);
