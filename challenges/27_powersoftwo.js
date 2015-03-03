function PowersofTwo(num) { 

  // code goes here  
    while (!(num % 2)) {
	num /= 2; 
    }
  
    if (num == 1) return "true";
  
    return "false";

}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PowersofTwo(readline());           
