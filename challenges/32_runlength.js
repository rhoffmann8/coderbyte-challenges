function RunLength(str) { 

  // code goes here  
    var ret = '',
    count = 1,
    cur = str[0];
  
    for (var i = 1; i < str.length; i++) {
	if (str[i] !== cur) {
	    ret += count + cur;
      
	    cur = str[i];
	    count = 1;
	} else {
	    count++; 
	}
    }
  
    ret += count + cur;
  
    return ret;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
RunLength(readline());           
