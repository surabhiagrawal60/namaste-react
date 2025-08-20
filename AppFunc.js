import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
    <h1 className="head" tabIndex="1">
        Namaste React using Functional Components
    </h1>
);

//make one more functional Component
const Title = () =>(
     <h1 className="heading" tabIndex="1">
        Namaste React using Functional Components1
    </h1>
);

//converting TITLE into a normal function
const Title2 = function(){
    return (
         <h1 className="head" tabIndex="1">
        Namaste React using Functional Components using NORMAL 
    </h1>
    );
}

// using Title functional component inside any other functional component
// Also called as COMPONENT COMPOSITION
const HeadingComponent4= () =>(
<div id="container">
    <Title2 />
    <h1 className="heading">Namaste React Functional Component 3</h1>
</div>
);



// React Functional Component
const HeadingComponent= () =>{
    return <h1>Namaste React Functional Components</h1>
}

const HeadingComponent1 = () => <h1>Namaste React Functional Components</h1>;

const HeadingComponent2 = () => (
    <h1>Namaste React Functional Components</h1>
);

const HeadingComponent3= () =>(
<div id="container">
    <h1 className="heading">Namaste React Functional Component 3</h1>
</div>
);


// same thing Heading Component, HeadingComponent1 and HeadingComponent2 are same JSX react element

const root = ReactDOM.createRoot(document.getElementById("root"));


// rending a react element
// root.render(heading);

// rendering a functional Compnenent
root.render(<HeadingComponent4 />);