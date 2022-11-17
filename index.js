function sayHello() {
    console.log("Hello!");
  } 
  sayHello();

  function sayHelloToGuadalupe() {console.log ("Hello, Guadalupe!")}
  sayHelloToGuadalupe()

  function sayHelloToLiz() {console.log ("Hello, Liz!")}
  sayHelloToLiz()

  function sayHelloToSamip() {console.log ("Hello, Samip!")}
  sayHelloToSamip()

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();


function sayGoodbye (firstName) {console.log (`Goodbye, ${firstName}`)}
sayGoodbye(`johnny`)

function sayIngredients (vegetables) {
    console.log (`I need more ${vegetables}`)
}
sayIngredients(`turnips`+ " "+ `tomatoes`)

function say(greeting, firstName){
    console.log(`${greeting}, ${firstName}`)
}
say(`Goodbye`, `Julio`)
say ("Hello", "Julio")
say (`Julio`, `hello`)

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }

function add(x,y) {
    return x + y 
}
console.log(add(1,2));
console.log(add(80,9000008));

function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Liz"));
  
  function say(greeting, firstName) {
    console.log("I was called!");
    return `${greeting}, ${firstName}!`;
  }
 console.log (say(`Howdy` , `partner`))


 function add(w,y) {
    return w + y
 }
 console.log(add(7,1))