function DistinctList(arr) { 

  // code goes here  
    var dupes = 0;
    var newarr = [];
    arr.map(function(cur) {
	if (newarr.indexOf(cur) === -1) newarr.push(cur);
	else dupes++;
    });
    return dupes; 
         
} 
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DistinctList(readline());           
