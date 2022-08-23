// Declare variables and assign objects from the DOM
//register an event listener on the form object.
//create an async function that create a POST request to the server and handles a response.

//const { format } = require("sequelize/types/utils");

//const { format } = require("sequelize/types/utils");



//const login = document.getElementById('login-btn');
const form = document.getElementById('login-form');
//const loader = document.getElementById('loader');
const contentText = document.getElementById('content');
//const user = document.getElementById('username');
//const pwd = document.getElementById('password');


form.addEventListener('submit', login);

async function login(e) {
//    spinnyWheel.style.display = "block";
    e.preventDefault();//prevents refresh
  let payload = {
     username: form.elements[0].value,
     password: form.elements[1].value,
  };
  let response = await fetch('http://localhost:3000', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    //mode: "cors", //added to allow to pass login
    body: JSON.stringify(payload),
    
  });
  let output = await response.json();
  console.log(output)
  //console.log(await response.json())
  //spinnyWheel.style.display = "none";
  // TODO display and offer a chance to register if user not found
 //(output.firstName) ? contentText.innerText = "Welcome back " + output.firstName : (output.loggedIn === false) ? contentText.innerText = 'Incorrect Password, please retry' : contentText.innerText = 'User not found, please register' 
}