# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is object-oriented programming? How is it different than functional programming?

Your answer:
Object oriented programming is a type of programming language paradigm where developers write code using objects (and methods). Whereas functional programming is a type of programming language paradigm where developers write code using functions (and variables). The main difference between the two is that in OOP, everything is an object. 

Researched answer:
In the programming world, a paradigm is way in which developers will go about programming something in a given language. Functional and Object Oriented Programming (OOP) are two such programming language paradigms. Functional Programming is centered around functions. Object Oriented Programming (OOP) is centered around objects. OOP works with mutable data or data that can be changed. Functional Programming works immutable data that can't be changed. In OOP, data is manipulated by objects and methods. While in functional programming, data is manipulated with functions and variables.



2. What is the difference between a Float and an Integer in Ruby?

Your answer: If a number has no decimal, in the Ruby language it is considered to be an integer. If a number has a decimal, it is considered to be a float.

Researched answer:
There are five number types in Ruby. There are Integer, Float, Complex, Rational, and Big Decimal. The difference been an Integer and a Float has to deal with whether a number is a whole number or an imperfect or impercise number like a decimal. Whole numbers are integers, while decimal numbers are considered Floats. In Ruby, the sum of two decimal numbers are considered false. While the sum of two integers are considered true.


3. Ruby has an implicit return. What does that mean?

Your answer: In other languages like JavaScript, every function needs a return or else it won't print anything to the screen or display for the end-user. However, in Ruby returns are implicit in that if a method is being executed, the Ruby method already implies it is there. The return method is also optional. You can put one if you like but it is against the Ruby language convention.

Researched answer:
Whether or not you provide a return statement in a Ruby block of code, the interpreter will imply you meant to because the Ruby language has implicit returns. A block in Ruby implies that there is a return statement in there. In other languages like JavaScript, an explicit return is required for the function to execute and get the desired outcome, otherwise an undefined will be returned.


4. What is a block in Ruby?

Your answer:
A block in Ruby is a chunk of code where you can execute some sort of action. Typically, you use a block of code with a method. A Ruby block is characterized by its 'def' and 'end' statements, anagolous to JavaScript's opening and closing curly braces.

Researched answer:
A Ruby block is a piece or block of code that is an anonymous function that gets passed to methods. Such a function can get passed into a method and is characterized by the 'do' and 'end' keywords. While in JavaScript curly braces are used. It should be noted that you can use curly braces in blocks, typically Rubyists will only use curly brackets in single-line statments per Ruby's styling convention. Also, a Ruby Block is similar to a JavaScript Closure.


5. How do you extract a value in a Ruby hash?

Your answer:
In order to extract a value in a hash in Ruby you need to reference the hash name and then in brackets with a colon the Ruby key/symbol. For example, if there was a person hash with a key name and a value of "philip", you could get the value with 
p person[:name]
// Output: "philip"

Researched answer:
In Ruby, in order to get the value from a hash you use bracket notation. If you only want to extract one value from a hash you call on the hash and the desired key:
person[:name]

in order to get all the values from a given hash you can just call

person.values

and retrieve all values in an output of an array.

## Looking Ahead: Terms for Next Week

1. Class Inheritance:
Sometimes it is beneficial if you have multiple classes that have like attributes to make another class that will have all the shared attributes of those two or more classes. The way in Ruby in which we can do this is by making a superclass. A superclass can then send information to a lower class or subclass. In this case, the subclass will then inherit all the attributes or behaviors from the superclass.

2. RSpec:
Many JavaScript developers use the Jest framework, among others, to test their code. In Ruby, Rubyists will use the unit testing framework called RSpec.

3. CRUD:
In the programming world, CRUD is the acronym for Create, Read, Update, Delete. These four actions represent a typical application whereby you create data, read data, update that date, or delete it. Making a CRUD app is a great way to undestand how data manipulation works in computer programming.

4. Test-driven development:
Test-driven development or TDD for short is a way in which developers will write code. Instead of just first writing out the logic first and testing edge cases afterward and hoping there are no bugs present in the code, practicing TDD will make it so that you must first pass your initial tests before you actually write out the logic of the code. Once you got your test environment setup, you can write the logic and test it against the inputs and outputs your provided. TDD is essential because you can really save a lot of time testing while writing out your program and avoiding bugs in the future.

5. HTTP:
HTTP or Hypertext Transfer Protocol is way information is passed around the web. This is the basis of how the world wide web works. All communication on the web for the end user has to deal with HTTP requests and responses, from web clients (the browser) and web servers. HTTP specifies how files should be transfered over from the server to the client and the client to the server.
