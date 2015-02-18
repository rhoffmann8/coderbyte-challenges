function SecondGreatLow(arr) { 

  // code goes here  
  
    arr = arr.sort(function(a,b){return a>b;});
  
    arr = arr.reduce(function(prev, cur) {
	if (prev.indexOf(cur) === -1) prev.push(cur);
    
	return prev;
    },[]);
  
    if (arr.length <= 2) {
	return arr.slice(-1) + ' ' + arr.slice(0,1);
    }
  
    return arr.slice(1,2) + ' ' + arr.slice(arr.length-2, arr.length-1);
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SecondGreatLow(readline());           
