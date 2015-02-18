function PermutationStep(num) { 

  // code goes here  
    if (num.length <= 1) return -1;
  
    var a = num.toString().split(''),
    b = [];
    for (var i = a.length-2; i >= 0; i--) {
	if (a[i] < a[i+1]) {
	    var before = a.slice(0,i),
            swap = a[i+1],
            after = a.slice(i+2,a.length),
            tmp = a[i];
	    b = before.concat(swap,after.sort(),tmp);
	    break;
	}
    }
  
    if (!b.length || b.join('') == num.toString()) return -1;
  
    return parseInt(b.join(''));
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
PermutationStep(readline());           
