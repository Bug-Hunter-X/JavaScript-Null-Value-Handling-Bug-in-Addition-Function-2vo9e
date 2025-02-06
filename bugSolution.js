function foo(a, b) {
  // Solution 1: Treat nulls as 0
  a = a === null ? 0 : a; 
  b = b === null ? 0 : b; 
  return a + b; 
}

// Alternative Solution 2: Throw an error for null inputs
function foo2(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b;
}

console.log(foo(null, 1)); //Output: 1
console.log(foo(1, null)); //Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 2)); //Output: 3

console.log(foo2(1,2)); // Output: 3
//console.log(foo2(null,1)); // throws an error