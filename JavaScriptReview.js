/* Task 1: Generate Random Array
Generate an array consisting of 20 random numbers between 0 and 100. */

let RandomArray = []; //create a blank array

for(let x=0; x<20; x++){ //starts at zero and goes to 20 to get your 20 random numbers, x++ is shorthand to increase by one each time
    let y = Math.random()* 100; //math.random generates the random numbers, * 100 keeps the range between zero and 100
    RandomArray.push(y); //my array name . push adds in the new number to the array
}

//displaying it so I can see if it is correct
console.log("Part One");
console.log(RandomArray); 


/* Task 2: Find Maximum Element
Write a JavaScript function to find the maximum element in the generated array.
Utilize concepts like loops (for), conditionals (if), and functions. */

function MaxElement(RandomArray){ //function to find the max element of the generated array from part one
    let m = RandomArray[0]; //m is for max, RandomArray[0] is accessing the array from part one at the first index (so it starts at the beginning)

    for(let z = 1; z < RandomArray.length; z++){ //for loop to go through the array and go through it's entire length and increasing the index by one each time
        if(RandomArray[z] > m){ //if the random array index is greater than the previous max element (first one checks element one against element zero)
            m = RandomArray[z]; //updates the max as it goes
        }  
    }
    return m; //returns the max element from the function once it is done through the length
}

//displaying it so I can see if it is correct
console.log("Part Two");
console.log(MaxElement(RandomArray)); 


/* Task 3: Find Position of Minimum Element
Implement a function that identifies the position (index) of the minimum element in the array. */

function MinElement(RandomArray){ //function to find the index of the minimum element of the generated array from part one, similar structure to part two
    let MinVal = RandomArray[0]; //MinVal is for finding the minimum value, RandomArray[0] is accessing the array from part one at the first index (so it starts at the beginning)
    let min = 0; //min is for finding the minimum index, set it to zero to start at the first index

    for(let a = 1; a < RandomArray.length; a++){ //for loop to go through the array and go through it's entire length and increasing the index by one each time
        if(RandomArray[a] < MinVal){ //if the random array index is less than the previous min value (first one checks element one against element zero)
            MinVal = RandomArray[a]; //sets the new min value
            min = a; //updates the min to that index
        }  
    }
    return min; //returns the min index from the function once it is done through the length
}

//displaying it so I can see if it is correct
console.log("Part Three");
console.log(MinElement(RandomArray)); 

/* Task 4: Sort Array in Descending Order
Use the sort() method to arrange the elements of the array in descending order. */

RandomArray.sort((a, b) => (b - a)); //array name . sort is what sorts the array, it compares a and b and then puts the bigger number before the smaller number (descending order)

//displaying it so I can see if it is correct
console.log("Part Four");
console.log(RandomArray); 


/* Task 5: Calculate Average of Object Values
Create an object with key-value pairs representing student names and their grades.
Write a function that computes the average of all grades. */

const Students = [ //creating objects in an array
    {Name: "Lauren", Grade: 100},
    {Name: "Kate", Grade: 50},
    {Name: "Drew", Grade: 80},
    {Name: "Sav", Grade: 90},
    {Name: "Cole", Grade: 30}
];

function AvgGrades(Students){ //function to find the average
    let total = 0; //start at zero

    for(let n = 0; n < Students.length; n++){ //this goes through the array of objects
        total = total + Students[n].Grade; //total is the total from before plus the new grade
        //console.log(total); //checking each step
    }

    let avg = total / Students.length; //average is the total divided by the number of objects, this should be 70, (100+50+80+90+30)/5

    return avg; //returns the average
}

//displaying it so I can see if it is correct
console.log("Part Five");
console.log(AvgGrades(Students)); 