function LookSaySequence(num) { 

  // code goes here  
    var str = num.toString(),
    nums = [], i,
    currentDigit = null, counter = 1;
  
    for (i = 0; i < str.length; i++) {
	if (currentDigit === null) { currentDigit = str[i]; continue; }
	if (str[i] !== str[i-1]) {
	    nums.push({digit: currentDigit, count: counter});
      
	    currentDigit = str[i];
	    counter = 1;
	} else {
	    counter++; 
	}
    }
  
  //trim the rest
    nums.push({digit: currentDigit, count: counter});
  
    var ret = '';
    for (i = 0; i < nums.length; i++) {
	ret += nums[i].count + nums[i].digit;
    }
  
    return ret; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LookSaySequence(readline());           
