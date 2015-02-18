function SimpleMode(arr) { 

  // code goes here  
    var nums = {},
    ret = -1,
    maxCount = 1;
    for (var i = 0; i < arr.length; i++) {
	if (!nums[arr[i]]) nums[arr[i]] = 1;
	else nums[arr[i]]++;
    }
  
    for (var prop in nums) {
	if (nums[prop] > maxCount) { maxCount = nums[prop]; ret = prop;}
    }
  
    return ret; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleMode(readline());           
