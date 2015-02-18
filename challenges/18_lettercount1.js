function LetterCountI(str) { 

    str = str.replace(/[^a-z\s]/ig, '');
    var a = str.split(' ');
  
    var maxAll = 1, maxWord;
    var ret = -1;
  
    for (var i = 0; i < a.length; i++) {
	maxWord = 1;
	var tmp = {};
	var curstr = a[i];
    
	for (var j = 0; j < curstr.length; j++) {
            tmp[curstr[j]] = tmp[curstr[j]] ? tmp[curstr[j]] + 1 : 1;
	}
	for (var prop in tmp) {
	    if (tmp[prop] > maxWord) maxWord = tmp[prop]; 
	}
    
	if (maxWord > maxAll) { maxAll = maxWord; ret = a[i];}
    }
  
  // code goes here  
    return ret; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCountI(readline());           
