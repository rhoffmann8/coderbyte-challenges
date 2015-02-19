function MeanMode(arr) { 

  // code goes here  
  
    if (arr.length === 1) return 1;
  
    var mode = null, nums = {};
  
    var sum = arr.reduce(function(p,c) {
	if (!nums[c]) nums[c] = 1;
	else nums[c]++;
    
	return p + c;
    });
    var avg = sum / arr.length;
  
    var max = 0;
    for (var prop in nums) {
	if (nums[prop] > max) {
	    mode = prop;
	    max = nums[prop];
	}
    }
  
    return mode == avg ? 1 : 0;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
MeanMode(readline());           
