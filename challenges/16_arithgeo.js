function ArithGeo(arr) { 

  // code goes here  
    var diff = arr[1] - arr[0],
    quot = arr[1] / arr[0],
    ret = '';
  
    for (var i = 2; i < arr.length; i++) {
	if (arr[i] - arr[i-1] == diff) {
	    if (ret == 'g') return -1;
	    ret = 'a';
	} else if (arr[i] / arr[i-1] == quot) {
	    if (ret == 'a') return -1;
	    ret = 'g';
	} else {
	    return -1;
	}
    }
  
    if (ret == 'a') return 'Arithmetic';
    else if (ret == 'g') return 'Geometric';
    else return -1;   
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
ArithGeo(readline());           
