function BracketMatcher(str) { 

  // code goes here
  //if (!str.match(/[\(\)]/g) return 1;
  
    var stack = [];
  
    for (var i = 0; i < str.length; i++) {
	if (str[i] == '(') {  
	    stack.push(str[i]);
	}
    
	if (str[i] == ')') {
	    if (!stack.pop()) return 0;
	}
    }
  
    return !stack.length ? 1 : 0; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
BracketMatcher(readline());           
