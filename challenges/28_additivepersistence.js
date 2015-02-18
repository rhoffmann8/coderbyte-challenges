function AdditivePersistence(num, count) { 

    if (typeof count === 'undefined') count = 1;
  // code goes here  
    var str = num.toString();
    var next = 0;
  
    if (count === 1 && str.length <= 1) return 0;
  
    for (var i = 0; i < str.length; i++) {
	next += parseInt(str[i]);
    }
  
    if (next.toString().length <= 1) return count;
    
    return AdditivePersistence(next, count+1);
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
AdditivePersistence(readline());           
