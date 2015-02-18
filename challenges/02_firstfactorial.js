function FirstFactorial(num) { 

  // code goes here 
    if (num === 0) return 1;
  
    var product = num;
    while (--num > 0) product *= num;
    return product; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());           
