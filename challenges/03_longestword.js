function LongestWord(sen) { 

  // code goes here 
    var matches = sen.match(/\b(\w*)/g);
    var max = "";
    for (var i = 0; i < matches.length; i++) {
	if (matches[i].length > max.length) max = matches[i];
    }
    return max; 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LongestWord(readline());           
