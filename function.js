//1.Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function sort(){
    let arr1 = ["mango", "orange", "banana", "apple"];
    console.log(arr1.sort());
    console.log(arr1.reverse());
}
sort()

//2.Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
let arr =arr.forEach(element => {
    if (element > 0) {
      console.log("positive");
    } else if (element < 0) {
      console.log("negative");
    } else {
      console.log("zero");
    }
 });




//3.Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.



//4.Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
function multiply(numbers) {
    numbers.forEach((number) => {
       console.log(number * 2);
    });
   }

   multiply([6, 7, 8, 9]);

//5.Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values

