function MultipleBrackets(str) { 

  // code goes here
    var parenStack = [], brackStack = [],
    parenCount = 0, brackCount = 0;
  
    if (!str.match(/[\(\)\[\]]/g)) return 1;
  
    for (var i = 0; i < str.length; i++) {
	if (str[i] == '(') { parenStack.push(str[i]); last = '('; }
	if (str[i] == '[') { brackStack.push(str[i]); last = '['; }
    
	if (str[i] == ')') {
	    if (last == '[' || !parenStack.pop()) return 0;
            parenCount++;
	    last = ')';
	}
  
	if (str[i] == ']') {
	    if (last == '(' || !brackStack.pop()) return 0; 
            brackCount++;
	    last = ']';
	}
    }

    if (parenStack.length || brackStack.length) return 0;
  
    return '1 ' + (parenCount + brackCount);
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultipleBrackets(readline());           
