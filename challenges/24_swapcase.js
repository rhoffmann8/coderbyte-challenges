function SwapCase(str) { 

    var ret = '';
    for (var i = 0; i < str.length; i++) {
	if (str[i].toUpperCase() == str[i]) ret += str[i].toLowerCase();
	else ret += str[i].toUpperCase();
    }
  // code goes here  
    return ret; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SwapCase(readline());           
