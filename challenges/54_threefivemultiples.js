function ThreeFiveMultiples(num) { 

  // code goes here  
  // sure sounds a lot like FizzBuzz
    var sum = 0;
    for (var i = 0; i < num; i++) {
	if (!(i % 5) || !(i % 3)) sum += i;
    }
  
    return sum; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ThreeFiveMultiples(readline());           
