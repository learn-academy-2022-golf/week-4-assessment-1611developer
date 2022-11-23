// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest




// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


describe("shuffler", () => {
    it("removes the first item from the array and shuffles the remaining content", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        expect(shuffler(colors1)).toContain("yellow", "blue", "pink", "green")
        expect(shuffler(colors2)).toContain("saffron", "aquamarine", "periwinkle", "indigo", "ochre")
    })
  })

  // First test:
  // ReferenceError: shuffler is not defined

  // Second test:
  // Test Suites: 1 passed, 1 total
  // Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.

// Input: array
// Ouput: altered array 

// Create a function.
	// Pass in an array as parameter.
	// Use an array method to delete first item in array.
		// Use .shift()
		// Assign this to a variable to save altered array.
	// Use .sort() to iterate over array.
		// Return the altered array shuffled by finding a method that shuffles.
		// If no shuffling method is available in JavaScript, use Math.random() to return randomized contents of the array.
			// Math.random returns a number from 0 and 1. The sort method will take in a value from -.05 and .05.
			// This will 'shuffle' or randomize the output of elements in the array.

const shuffler = (array) => {
	array.shift()
	return array.sort((value) => Math.random() - 0.4)
}




// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

describe("tally", () => {
    it("returns the end tally", () => {
        const votes1 = {upVotes: 13, downVotes: 2}
        const expectedOutput1 = 11
        const votes2 = {upVotes: 2, downVotes: 33}
        const expectedOutput2 = -31
        expect(tally(votes1)).toEqual(expectedOutput1)
        expect(tally(votes2)).toEqual(expectedOutput2)
    })
  })

  // First test:
  // ReferenceError: tally is not defined

  // Second test:
  // Test Suites: 1 passed, 1 total
  // Tests:       2 passed, 2 total


// b) Create the function that makes the test pass.

// Input: object
// Output: number

// Create a function.
	// Pass in an object as the parameter.
	// Return subtracted upvotes from downvotes.
		// Use dot notation to access key from object and subtract upvotes from downvotes.

const tally = (object) => {
	return object.upVotes - object.downVotes
}







// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.


// a) Create a test with an expect statement using the variables provided.

//const dataArray1 = ["array", "object", "number", "string", "Boolean"]
//const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

describe("noDups", () => {
    it("returns one array with no duplicate values", () => {
        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
        const expectedOutput = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
      expect(noDups(dataArray1, dataArray2)).toEqual(expectedOutput)
    })
  })

  // First test:
  // ReferenceError: noDups is not defined

  // Second test:
  // TypeError: arr1 is not iterable
  // Test Suites: 1 failed, 1 total
  // Tests:       1 failed, 2 passed, 3 total

  // Third test:
  // Test Suites: 1 passed, 1 total
  // Tests:       3 passed, 3 total


// b) Create the function that makes the test pass.

// Input: two arrays
// Output: one array, no duplicate values

// Create a function.
	// Pass in arr1 and arr2 as the parameters.
	// Create a new variable to store the new array.
	// Use the spread operator to combine values.
		// Store this new array into a variable.
	// Use a method that can prevent dupilicate values.
		// We can use the spread operator with Set to create the new array and pass in the combined array variable.
			// Set will prevent duplicate values in the collection.
		// Store this new value into a new variable.
	// Return that new variable.

// 1 array, 1 object, 1 number, 3 string, 2 booleans, 1 null, 1 undefined

const noDups = (arr1, arr2) => {
	let combined = [...arr1,...arr2]
    // Here are some other ways to combine arrays.
    // let combined = [].concat(arr1, arr2)
    // let combined = arr1.push(...arr2)
	let preventDups = [...new Set(combined)]
	return preventDups
}
