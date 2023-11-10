// Manipulate the HTML DOM using Javscript
const heading = document.createElement("h1");
heading.innerHTML = "Hello World!";
const root = document.getElementById("root");
root.appendChild(heading);

// Manipulate the HTML DOM using React
const heading1 = React.createElement("h1", {
    id: "title",
    style: {
        background: "red",
    },
    className: "title"
}, "Heading 1");

const heading2 = React.createElement("h4", {
    id: "title",
    style: {
        background: "blue",
    },
    className: "title"
}, "Heading 2");

const container = React.createElement("div", {
    id: "container",
}, [heading1, heading2]);

// create root using createRoot
const root1 = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root1.render(container);
