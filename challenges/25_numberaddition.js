function NumberAddition(str) { 

  // code goes here  
    var a = str.match(/(\d+)/g)
    if (!a) return 0;
    return eval(a.join('+'));
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberAddition(readline());           
