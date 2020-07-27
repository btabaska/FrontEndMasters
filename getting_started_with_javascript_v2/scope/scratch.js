console.log("this is a test")

var teacher = "Kyle";

function otherClass() {
    teacher = "Suzy";
    topic = "React";
    console.log("Welcome!");
}

otherClass()

console.log(teacher);
console.log(topic);


//Function Expressions

//a function that is assigned as a value somewhere

//anonymous 
var clickHandler = function() {
    //...
};

//named
var keyHandler = function keyHandler() {
    //...
};

//Closure

function ask(question) {
    setTimeout(function waitASec() {
        console.log(question);
    }, 100);
}

ask("what is closure?");


//this aware functions

var workshop = {
    teacher: "Kyle",
    ask(question) {
        console.log(this.teacher,question);
    },
};

workshop.ask("What is implicit binding")

//class system