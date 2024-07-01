//Declare and initialize an empty multidimensional array. (Array of arrays)

var twoDArray = [[],[],[]];

twoDArray[0].push(1,2);
twoDArray[1].push(2,3);
twoDArray[2].push(3,1);

document.write("<b>2 D Array : </b>" + twoDArray);



//Declare and initialize a multidimensional array representing the following matrix:

var matrix = [[],[],[]];

matrix[0].push(0,1,2,3);
matrix[1].push(1,0,1,2);
matrix[2].push(2,1,0,2);

document.write("<br><br><b>2 D Matrix : </b><br>");

for(var i = 0; i < matrix.length; i++){
    for(var j = 0; j < matrix[i].length; j++){
        document.write(matrix[i][j]+ " ");
    }
    document.write("<br>");
}


