function DashInsertII(num) { 

  // code goes here  
    return num.toString().replace(/([13579])(?=[13579])/g,'$1-')
	.replace(/([2468])(?=[2468])/g,'$1*');
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
DashInsertII(readline());           
