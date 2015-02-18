function ABCheck(str) { 

  // code goes here  
    return str.match(/(a.{3}b)|(b.{3}a)/) !== null; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ABCheck(readline());           
