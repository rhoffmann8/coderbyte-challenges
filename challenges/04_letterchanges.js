function LetterChanges(str) { 

  // code goes here
  
    var newStr = [];
  
    for (var i = 0; i < str.length; i++) {
	if (str[i].match(/[^a-zA-Z]/)) { newStr.push(str[i]); continue; }
    
	if (str[i] == 'z') newStr.push('a');
	else if (str[i] == 'Z') newStr.push('A');
	else newStr.push(String.fromCharCode(str[i].charCodeAt()+1));
    }
  
    for (var i = 0; i < str.length; i++) {
	if (['a','e','i','o','u'].indexOf(newStr[i]) !== -1) newStr[i] = newStr[i].toUpperCase();
    }
  
    return newStr.join(''); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());           
