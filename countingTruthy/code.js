let array = 
[true , true, false, false, false, true, false, false, true];

document.querySelector("#myArray").innerHTML = array;

document.querySelector("#counter").innerHTML = array.filter(Boolean).length;
