
//Generate the following series in your browser.

document.write("<br><hr><b>Counting : </b>");
for(var p = 1; p <= 15; p++){
    document.write(p+" ");
}

document.write("<br><b>Reverse : </b>");
for(var q = 10; q >= 1; q-- ){
    document.write(q+" ");
}

document.write("<br><b>Even : </b>");
for(var r = 0; r <= 20; r++){
    if(r % 2 === 0){
        document.write(r + " ");
    }
}

document.write("<br><b>Odd : </b>");
for(var r = 0; r <= 20; r++){
    if(r % 2 !== 0){
        document.write(r + " ");
    }
}

document.write("<br><b>Series : </b>");
for(var q = 2; q <= 20; q+2){
    document.write(q+"k ");
}
