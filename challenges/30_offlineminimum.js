function OffLineMinimum(strArr) { 

  // code goes here  
  
    var tmpArr = [];
    strArr.reduce(function(prev, cur) {
	if (cur == 'E') {
	    var tmp = prev.sort().splice(0,1);
	    tmpArr.push(tmp[0]);
	} else {
	    prev.push(cur);
	}
    
	return prev;
    },[]);
  
    return tmpArr.join(','); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
OffLineMinimum(readline());           
