function ExOh(str) { 

  // code goes here  
    var x = 0, o = 0;
    for (var i = 0; i < str.length; i++) {
	if (str[i] == 'x') x++; else o++;
    }
  
    return x == o;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ExOh(readline());           
