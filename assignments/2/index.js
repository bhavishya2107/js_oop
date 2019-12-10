/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 of 1 ***/

function makePerson(name, age) {
	// add code here
var obj = {}
obj.name = name
obj.age = age
return obj
}

var vicky = makePerson('Vicky', 29);


// /********* Uncomment these lines to test your work! *********/
console.log(vicky.name); // -> Logs 'Vicky'
console.log(vicky.age); // -> Logs 24





/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

var personStore = {
	// add code here
  greet: function() {
    console.log('hello')
  }

};

var hello = Object.create(personStore)
hello.greet()

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/
// Create a function `personFromPersonStore` that takes as input a `name` and an `age`. When called, the function will create person objects using the `Object.create` method on the `personStore` object.

function personFromPersonStore(name, age) {
  // add code here
  var hello = Object.create(personStore)
  hello.name = name
  hello.age = age
  return hello
}

var sandra = personFromPersonStore('Sandra', 26);




// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
// sandra.greet(); //-> Logs 'hello'


/*** CHALLENGE 3 of 3 ***/

// add code here
personStore.introduce = function(){
  console.log(`Hi, my name is ${this.name}`)
}

sandra.introduce(); // -> Logs 'Hi, my name is Sandra'





/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 1 of 3 ***/
// Create a function `PersonConstructor` that uses the `this` keyword to save a single property onto its scope called `greet`. `greet` should be a function that logs the string 'hello'.
function PersonConstructor() {
	// add code here
  this.greet = function(){
    console.log('hello')
  }
}



// /********* Uncomment this line to test your work! *********/
var simon = new PersonConstructor;
simon.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/
// Create a function `personFromConstructor` that takes as input a `name` and an `age`. When called, the function will create person objects using the `new` keyword instead of the Object.create method.

function personFromConstructor(name, age) {
  // add code here
  var person = new PersonConstructor(name, age);
  person.name = name;
  person.age = age;
  return person;
}

var mike = personFromConstructor('Mike', 30);


// /********* Uncomment these lines to test your work! *********/
console.log(mike.name); // -> Logs 'Mike'
console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'



/*** CHALLENGE 3 of 3 ***/
// add code here
PersonConstructor.prototype.introduce = function() {
  console.log(`Hi, my name is ${this.name}` )
}


mike.introduce(); // -> Logs 'Hi, my name is Mike'


/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 1 of 3 ***/

class PersonClass {
	constructor(name) {
    // add code here
    this.name = name

	}

  // add code here
  greet() {
    console.log('hello')
  }

}


// /********* Uncomment this line to test your work! *********/
var george = new PersonClass;
george.greet(); // -> Logs 'hello'



/*** CHALLENGE 2 of 3 ***/

// add code here
class DeveloperClass extends PersonClass {
  introduce() {
    console.log(`Hello World, my name is ${this.name}`)
  }
}


// /********* Uncomment these lines to test your work! *********/
var thai = new DeveloperClass('Thai', 32);
console.log(thai.name); // -> Logs 'Thai'
thai.introduce(); //-> Logs 'Hello World, my name is Thai'



/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

var userFunctionStore = {
  sayType: function() {
    console.log("I am a " + this.type);
  }
}

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

var adminFunctionStore = Object.create(userFunctionStore);

function adminFactory(name, score) {
  // Put code here
  var obj = new userFactory(name, score)
  obj.type = "Admin"
  return obj
}

/* Put code here for a method called sharePublicMessage*/
adminFactory().__proto__.sharePublicMessage = function() {
  console.log('Welcome Users')
}

var adminFromFactory = adminFactory("Eva", 5);


// /********* Uncomment these lines to test your work! *********/
adminFromFactory.sayType() // -> Logs "I am a Admin"
adminFromFactory.sharePublicMessage()
// userFactory.sharePublicMessage()
 // -> Logs "Welcome users!"
