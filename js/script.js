var justin = "nice guy";

function sayHello(){
    console.log("Hello " + justin);
    justin = "Awesome guy";
    console.log("Justin is a " + justin);
}

sayHello();

var sayBye = function(){
    var talk = "Bye Bye!";
    console.log(talk);
        //functions are NOT connected to an object
};

sayBye();


sayHello();
var myArray = [2,3,4,5];
var dog = {
    legs: 4,
    goodDog: true,
    color: "brown",
    bark: function(numBarks){
        for (var x = 0; x < numBarks; x++){
        console.log("Woof");
        }
        //methods are connected to an object
        //bark is a method; the only method here
        //x++ = "x = x + 1"
    },
    ears: "Floppy"
};

var cat = {};
cat.paws = 4;
cat.furry = true;
cat.meow = function(){
    console.log(cat.furry);
};

console.log(cat.furry);
cat.meow();


dog.bark(3);
console.log(dog.legs);
console.log(dog.color);
//when calling a function and method, you out them in "", but when calling/using a property, don't use ""
