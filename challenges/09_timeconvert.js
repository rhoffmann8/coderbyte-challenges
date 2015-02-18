function TimeConvert(num) { 

  // code goes here  
    var hours = Math.floor(num/60);
    var minutes = num % 60;
    return hours + ':' + minutes;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
TimeConvert(readline());           
