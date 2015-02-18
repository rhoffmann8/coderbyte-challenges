function SimpleSymbols(str) { 

  // code goes here 
    for (var i = 0; i < str.length; i++) {
	if (i == 0 && str[i].match(/[a-z]/i)) return false;
	if (str[i].match(/[a-z]/)) {
	    if (str[i-1] != '+' || str[i+1] != '+') return false; 
	}
    }
    return true; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleSymbols(readline());           
