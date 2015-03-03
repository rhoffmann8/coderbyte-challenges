function Consecutive(arr) { 

  // code goes here  
    arr = arr.sort(function(a,b){return a > b});
    var sum = 0;
    for (var i = arr.length-1; i > 0; i--) {
	sum += arr[i] - arr[i-1] - 1;
    }
    return sum; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
Consecutive(readline());           

