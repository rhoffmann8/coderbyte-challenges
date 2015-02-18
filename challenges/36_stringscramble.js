function StringScramble(str1,str2) { 

  // code goes here  
    var achars = {}, bchars = {};
    for (var i = 0; i < str1.length; i++) {
	if (!achars[str1[i]]) achars[str1[i]] = 1;
	else achars[str1[i]]++;
    }
  
    for (var i = 0; i < str2.length; i++) {
	if (!bchars[str2[i]]) bchars[str2[i]] = 1;
	else bchars[str2[i]]++;
    }
  
    for (var prop in bchars) {
	while (bchars[prop] > 0) {
	    if (!achars[prop]) return false;
	    achars[prop]--;
            bchars[prop]--;
	}
    }
  
    return true;
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
StringScramble(readline());           
