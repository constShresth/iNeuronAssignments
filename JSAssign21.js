// 1. Select an <h2> tag with id of text and change its inner text to
// “Hello World”.

document.getElementById("text").innerHTML = "Hello World";

// 2. Apply following style to the same h2 using Javascript DOM
// Method.
// colour: red,
// fontWeight: bold,
// textTransform: uppercase

document.getElementById("text").style.color = "red";
document.getElementById("text").style.fontWeight = "bold";
document.getElementById("text").style.textTransform = "uppercase";

// 3. Create a simple calculator that takes the input from
// input1, input 2 and add them together.

const submit = document.getElementById("submit"); //this is a button with id submit
submit.addEventListener("click", add);

function add(event) {
  const input1 = document.getElementById("input1").value; //value from first input
  const input2 = document.getElementById("input2").value; //value from second input
  const h3 = document.getElementById("result"); //h3 tag with id result
  const result = parseInt(input1) + parseInt(input2); //result after addition
  h3.innerText = result; //displaying the result
  event.preventDefault();
}

// 4. What is the error in the following code?

// < !DOCTYPE html >
// <html >

// <body>
// <p className="text">Hello World!</p>
// <script>
// document.getElementById("text").innerHTML = "Hi JS DOM!";
// </script>
// </body>
// </html>

// ----answer----

// Id "text" does not exist, it's class "text".

// 5. Using JS Dom select a button and set its onclick event to
// logging hello in the console.

//First we will add id="btn" to the button that we want to select.
const button = document.getElementById("btn");
button.addEventListener("click", () => console.log("hello"));

// 6. Using alert, prevent a person from leaving the screen using JS
// DOM.
// Output -
//there is a picture in the question.

window.onbeforeunload = () => {
  const msg = "do not leave this page";
  return msg;
};
//we can also use addEventListener with "beforeunload" as an event.

// 7. Select all the h2 tags on screen and change their colour to
// purple.

const h2 = document.querySelectorAll("h2");
for (let i = 0; i < h2.length; i++) {
  h2[i].style.color = "purple";
}

// 8. Create a new <h4> tag on the screen using JS DOM.

let elem = document.createElement("h4");
elem.innerText = "Created a new h4 tag using dom";
document.body.appendChild(elem);

// 9. Remove an element from the screen using js dom.

const para = document.getElementsByTagName("p");
document.body.removeChild(para[0]);

// 10. Get the number of <p> tags on the screen using JS DOM.

const p = document.getElementsByTagName("p");
console.log(p.length);

// 11. Fetch the value of name from the following form.

// < !DOCTYPE html >
// <html><head>
// <meta charset="UTF-8">
// </head><body>
// <form id="form1" onsubmit="getFormvalue(event)">  // passing event as an argument
//     Name: <input type="text" id="name" /><br />
//     <button type="submit">Submit</button>
// </form>
// </body>
// </html>

//passed event as an argument (onsubmit = "getFormvalue(event)")/.
function getFormvalue(event) {
  const name = document.getElementById("name").value;
  console.log(name);
  console.log(event);
  event.preventDefault();
}
