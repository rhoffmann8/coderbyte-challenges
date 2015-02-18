function VowelCount(str) { 

  // code goes here  
    var v = str.match(/[aeiou]/ig);
    return v && v.length ? v.length : 0;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
VowelCount(readline());           
