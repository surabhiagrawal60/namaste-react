import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

// const heading = React.createElement("h1", {id:"heading"}, "Namaste react "); // core element using REACT

// console.log(heading);

//JSX - HTML like syntax

// JSX (transpiled before it reaches JS ) - PARCEL  -> BABEL

// JSX => React.createElement => ReactElement -JS object => HTML Element(render)

// const jsxHeading =<h1 className="head">Namaste React using JSX</h1>; // Element creation using JSX

const heading = (
    <h1 className="head" tabIndex="1">
        Namaste React using JSX
    </h1>
);
console.log(heading);




const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(heading);



root.render(heading);





