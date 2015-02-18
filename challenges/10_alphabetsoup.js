function AlphabetSoup(str) { 

  // code goes here  
    return str.replace(' ', '').split('')
	.sort(function(a,b) { return a > b; }).join('');
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AlphabetSoup(readline());           
