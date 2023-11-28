// simply demonstrating the event propagation

// Here when button gets clicked the event triggered will get propagated to the parent div element

// const button = document.querySelector("#button");

// button.addEventListener("click", () => {
//   console.log("button gets clicked");
// });
// const parent = document.querySelector("#main");

// parent.addEventListener("click", () => {
//   console.log("parent gets clicked");
// });

// demonstrating the stopPropagation effect

const button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  e.stopPropagation();                       // e.stopPropagation uncomment this when we want to see the event trigger behaviour
  console.log("button gets clicked");
});
const parent = document.querySelector("#main");

parent.addEventListener("click", () => {
  console.log("parent gets clicked");
}, true);


parent.addEventListener("click", (e) => {
    if(e.target.tagName==="BUTTON"){
        alert('Button Clicked');
    }
  console.log("parent gets clicked");
});
