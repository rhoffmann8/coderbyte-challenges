function StringReduction(str) { 

  // code goes here  
    var newStr = recurseStrReduce(str);
    return newStr.length; 
         
}

function recurseStrReduce(str) {
    var arr = str.split('');
    str = arr.reduce(function(prev,c) {
	var p = prev.slice(-1);
	if (prev == '') return c;
	if (p != c) {
	    prev = prev.substr(0,prev.length-1);
	    if (['ac', 'ca'].indexOf(p+c) !== -1) prev += 'b';
	    if (['bc', 'cb'].indexOf(p+c) !== -1) prev += 'a';
	    if (['ab', 'ba'].indexOf(p+c) !== -1) prev += 'c';
	} else {
	    prev += c;
	}
    
	return prev;
    }, '');
  
    for (var i = 1; i < str.length; i++) {
	if (str[i] != str[i-1]) { str = recurseStrReduce(str); break; }
    }
  
    return str;
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringReduction(readline());           
