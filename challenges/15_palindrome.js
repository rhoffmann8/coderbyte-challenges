function Palindrome(str) { 

  // code goes here  
    str = str.replace(/\s/g, '');
  
    for (var i = 0; i < str.length/2; i++) {
	if (str[i] != str[str.length-1-i]) return "false";
    }
    return "true";
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Palindrome(readline());           
