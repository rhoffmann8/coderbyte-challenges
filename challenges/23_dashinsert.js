function DashInsert(str) { 

  // code goes here 
    return str.replace(/([13579])(?=[13579])/g, '$1-');
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsert(readline());           
