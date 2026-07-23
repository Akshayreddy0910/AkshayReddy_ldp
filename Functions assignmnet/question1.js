function greet(name) { 
         return "Hello, " + name + "!"; 
}
function displayMessage(callback, name) { 
              console.log(callback(name));
}
displayMessage(greet, "Akshay"); 
