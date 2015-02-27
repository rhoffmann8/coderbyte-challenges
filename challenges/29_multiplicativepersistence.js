function MultiplicativePersistence(num) { 

  // code goes here  
    var str = num.toString(),
    count = 0,
    arr;
    while (str.length > 1) {
	count++;
	arr = str.split('');
	str = arr.reduce(function(p,c) { return p*c; },1).toString();
    }
    return count; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MultiplicativePersistence(readline());           
