/* Qs5. Write a JavaScript function to generate a random number within a range (start, end). */ 

// Write a JavaScript function to count the number of vowels in a String
// argument.

// function getRandomNO(start, end) {
//     const range = end - start + 1;

//     const randomNo = Math.floor(Math.random() * range) + start;

//     return randomNo;
// }

// let no = getRandomNO(5,10);
// console.log(no);


// Function to generate random number
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// console.log("Random Number between 1 and 5: ")

// // Function call
// console.log( randomNumber(10, 5) );


function Countstr(str) {
    
    // const count = str.match(/[aeiou]/gi).length;
    let vowelList = 'aeiouAEIOU';
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        if(vowelList.indexOf(str[i]) !== -1) {
            count += 1;
        }
    }
   
    return count;
}

const result = Countstr("Gajanan");

console.log(result);