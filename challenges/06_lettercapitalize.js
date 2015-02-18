function LetterCapitalize(str) { 

  // code goes here 
    var a = str.split(' ');
    for (var i = 0; i < a.length; i++) {
	a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1); 
    }
    return a.join(' '); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterCapitalize(readline());           
