function LetterCount(str) { 

  // code goes here
    var ret = -1, tmp;
    var a = str.split(' ');
    var maxWord, maxAll = 1;
  
    for (var i = 0; i < a.length; i++) {
	tmp = {};
	maxWord = 0;
	for (var j = 0; j < a[i].length; j++) {
	    if (!tmp[a[i][j]]) tmp[a[i][j]] = 1;
	    else tmp[a[i][j]]++;
	}
    
	for (var prop in tmp) {
	    if (tmp[prop] > maxWord) maxWord = tmp[prop];
	}
    
	if (maxWord > maxAll) { maxAll = maxWord; ret = a[i]; }
    }
    return ret; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCount(readline());           
