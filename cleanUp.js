// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?")
};

nameQuestion();
//For the above example I added two semicolons: one after the close squiggly bracket,
//and the other after the function was declared.

// EX 2:
function addThreeNums(first, second, third) {
  var sum = first + second + third;
console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);
//I had to add a semicolon in line 21.
//(IDK the technical term for that part of the function.
//I think it's argument.) I also tabbed line 21 over one.


// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
}

makeFreshPesto();
//I put the squiggly bracket on a new line just to clean it up.
//I completed the word 'function.

//  EX 4:
function average(num1, num2){
  var sum = num1 + num2;
  var avg = sum / 2;
console.log(`the average is: ${avg}`);
  }
//I moved the squiggly bracket up a line, to line 43.
//I straightened out the lines by tabbing line 46.
//I removed a random period . 
