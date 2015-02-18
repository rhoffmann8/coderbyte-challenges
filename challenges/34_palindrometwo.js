function PalindromeTwo(str) { 

    if (str.length <= 1) return true;
  
  // code goes here  
    var a = str.match(/\w/g);
    for (var i = 0; i < a.length/2; i++) {
	if (a[i].toLowerCase() !== a[a.length-1-i].toLowerCase()) return false;
    }
    return true;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PalindromeTwo(readline());           
