//Declare and initialize an empty multidimensional array. (Array of arrays)

var twoDArray = [[], [], []];

twoDArray[0].push(1, 2);
twoDArray[1].push(2, 3);
twoDArray[2].push(3, 1);

document.write("<b>2 D Array : </b>" + twoDArray);



//Declare and initialize a multidimensional array representing the following matrix:

var matrix = [[], [], []];

matrix[0].push(0, 1, 2, 3);
matrix[1].push(1, 0, 1, 2);
matrix[2].push(2, 1, 0, 2);

document.write("<br><br><b>2 D Matrix : </b><br>");

for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
        document.write(matrix[i][j] + " ");
    }
    document.write("<br>");
}


//Write a program to print numeric counting from 1 to 10.

document.write("<hr><br><b>Counting from 1 to 10.</b><br>")
for (var k = 1; k <= 10; k++) {
    document.write(k + "<br>");
}



//Write a program to print multiplication table of a number using for loop. Table number & length should be taken as an input from user.

var tableNumber = +prompt("Enter Table number : ");
var till = +prompt("Enter Limit of Table :");

document.write("<hr><br><b>Table of " + tableNumber + "</b><br><br>");

for (var m = 1; m <= till; m++) {
    document.write(tableNumber + " X " + m + " = " + tableNumber * m + "<br>");
}
