/**
 * <div id="parent">
 *       <div id="child">
 *              <h1>I'm h1 tag</h1>
 *              <h2>I'm h1 tag</h2>
 *
 * </div>
 * </div>
 * 
 * 
 * 
 */



const parent = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I'm H1 tag"), React.createElement("h2", {}, "I'm H2 tag")]),React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "I'm H1 tag"), React.createElement("h2", {}, "I'm H2 tag")])]);


// JSX that exists

console.log(parent);


// const heading = React.createElement("h1", {id: "heading", xyz:"abd"}, "Hello World from React!");
// console.log(heading);
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

