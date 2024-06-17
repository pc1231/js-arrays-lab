/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

// excercise 2
// Initialize an empty array


// Add 'pizza' and 'cheeseburger' to the array
foods.push('pizza');
foods.push('cheeseburger');

// Output the result
console.log('Exercise 2 result:', foods);
// excersise 3
// Assuming `foods` array already exists from Exercise 2

// Insert 'taco' at the beginning of the array
foods.unshift('taco');

// Output the result
console.log('Exercise 3 result:', foods);
//excersise 4
// Assuming `foods` array exists from previous exercises


// Retrieve 'pizza' from the array and assign it to `favFood`
let favFood = foods[1]; // Index 1 corresponds to 'pizza'

// Output the result
console.log('Exercise 4 result:', favFood);
// excersise 5
// Insert 'tofu' between 'pizza' and 'cheeseburger'
foods.splice(2, 0, 'tofu');

// Output the result
console.log('Exercise 5 result:', foods);
//excersise 6
// Assuming `foods` array exists from previous exercises

// Find the index of 'pizza' in the array
let pizzaIndex = foods.indexOf('pizza');

// Replace 'pizza' with 'sushi' and 'cupcake'
foods.splice(pizzaIndex, 1, 'sushi', 'cupcake');

// Output the result
console.log('Exercise 6 result:', foods);
// excersise 7
// Use slice() to create a new array containing 'sushi' and 'cupcake'
let yummy = foods.slice(1, 3); // Starts at index 1 (inclusive) and ends at index 3 (exclusive)

// Output the result
console.log('Exercise 7 result:', yummy);
//excersise 8
// Assuming `foods` array exists from previous exercises

// Find the index of 'tofu' in the array
let soyIdx = foods.indexOf('tofu');

// Output the result
console.log('Exercise 8 result:', soyIdx);
// excersise 9
let allFoods = foods.join(' -> ');

// Output the result
console.log('Exercise 9 result:', allFoods);
// excersice 9
let hasSoup = foods.includes('soup');

// Output the result
console.log('Exercise 10 result:', hasSoup);
// excerise 10
const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Initialize an empty array `odds` to store odd numbers
let odds = [];

// Iterate through the `nums` array
nums.forEach(num => {
    // Check if the number is odd (using modulus operator)
    if (num % 2 !== 0) {
        odds.push(num); // Push the odd number to the `odds` array
    }
});

// Output the result
console.log('Exercise 11 result:', odds);
// excerise 11
const nums1 = [1, 3, 5, 7, 9, 10, 15, 30, 45, 50];

// Initialize empty arrays to store numbers based on rules
let fizz = [];
let buzz = [];
let fizzbuzz = [];

// Iterate through the `nums` array
nums1.forEach(num => {
    if (num % 3 === 0 && num % 5 === 0) {
        fizzbuzz.push(num); // Divisible by both 3 and 5
    } else if (num % 3 === 0) {
        fizz.push(num); // Divisible by 3
    } else if (num % 5 === 0) {
        buzz.push(num); // Divisible by 5
    }
});

// Output the results
console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);
