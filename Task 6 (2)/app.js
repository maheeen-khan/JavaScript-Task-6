
//Generate the following series in your browser.

document.write("<br><hr><b>Counting : </b>");
for (var p = 1; p <= 15; p++) {
    document.write(p + " ");
}

document.write("<br><b>Reverse : </b>");
for (var q = 10; q >= 1; q--) {
    document.write(q + " ");
}

document.write("<br><b>Even : </b>");
for (var r = 0; r <= 20; r++) {
    if (r % 2 === 0) {
        document.write(r + " ");
    }
}

document.write("<br><b>Odd : </b>");
for (var r = 0; r <= 20; r++) {
    if (r % 2 !== 0) {
        document.write(r + " ");
    }
}

document.write("<br><b>Series : </b>");
for (var q = 1; q <= 20; q++) {
    if (q % 2 === 0) {
        document.write(q + "k ");
    }

}


//You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var userInput = prompt("Welcome to ABC Bakery! What do you want to order ?");
var check = A.indexOf(userInput.toLowerCase());

document.write("<br><hr>");

if (check === -1) {
    document.write("We are Sorry!. " + userInput + " is <b>not available</b> in our Bakery.");

}
else {
    document.write(userInput + " is <b>available</b> at index " + check + " in our Bakery.");
}



//Write a program to identify the largest number in the given array.

var arr = [24, 53, 78, 91, 12];
document.write("<br><hr>Array item is : " + arr);
document.write("<br>The largest number is : " + Math.max(...arr)); // let's use the Math.max() and Math.min() methods and use the spread operator on the array like this.




//Write a program to identify the smallest number in the given array.

var arr = [24, 53, 78, 91, 12];

document.write("<br><hr>Array item is : " + arr);
document.write("<br>The smallest number is : " + Math.min(...arr));


//Write a program to print multiples of 5 ranging 1 to 100.

document.write("<hr><b>Multiples of 5</b><br>");
for (var j = 1; j <= 20; j++) {
    document.write("<br>" + j * 5);
}
