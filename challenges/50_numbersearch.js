function NumberSearch(str) { 

  // code goes here  
    var letterCount = str.match(/[a-zA-Z]/g).length,
    numbers = str.match(/\d/g);
    sum = 0;
  
    if (!numbers) {
	return 0;
    }
  
    for (var i = 0; i < numbers.length; i++) {
	sum += parseInt(numbers[i]);
    }
  
    return Math.round(sum / letterCount);
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
NumberSearch(readline());           
