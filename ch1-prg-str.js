//Looping a triangle
/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.*/

// Your code here.
let abc = "#";
let num_triangles = "#######".length
while (abc.length < num_triangles){
	console.log( abc );
  	abc += "#";
}
// test answer
console.log(abc === "#######" ? true: false)

//FizzBuzz
/*WritWrite a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed outignificant percentage of programmer candidates. So if you solved it, your labor market value just went up.)up.)*/

// Your code here.

//method 1:
let num = 1;
let printing = "";
while (num < 101){
  printing = num;
  if (num % 3==0 && num % 5==0){
    printing = "FizzBuzz";
    
  } else if (num % 3==0){
    printing = "Fizz";
    
  } else if (num % 5==0){
    printing = "Buzz";
    
  }
  console.log(printing);
  num ++;
}

//method 2:
// Your code here.
let num = 1;
let printing = "";
while (num < 101){
  	if (num % 3==0){
    printing += "Fizz";
    } 
  	if (num % 5==0){
        printing += "Buzz";
    }
  	console.log(printing.length == 0 ? num : printing);
  	num ++, printing = "";
}

//method 3:
// Your code here.
let printing = "";
for( num = 1; num < 101; num ++){
  printing = "";
	if (num % 3==0){
		printing += "Fizz";
    } 
  if (num % 5==0){
    printing += "Buzz";
    }
  console.log(printing.length == 0 ? num : printing)
} 


//Chessboard
/*Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.*/

// Your code here.
let i = 1;
let bSize = 8;
while(i<bSize + 1){
	if (i % 2 == 0) console.log("# # # # ");
  	else console.log(" # # # #");
  	i++;
}