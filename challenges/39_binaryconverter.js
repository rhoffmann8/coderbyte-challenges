function BinaryConverter(str) { 

  // code goes here  
    var bit = 1, sum = 0;
    for (var i = str.length - 1; i >= 0; i--) {
	if (parseInt(str[i]) !== 0) sum += bit;
	bit *= 2;
    }
    return sum; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BinaryConverter(readline());           
