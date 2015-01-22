//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  var isTheName=function(name){
if(name==="Tyler"){
console.log("This is the name");
}
else
console.log("is not the name");
}


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  var getTheName=function(){
 prompt('name');

}





//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  var welcome=function(){
 return getTheName()
}


//Next problem




//What is the difference between arguments and parameters?

  
/*Parameter:

A parameter represents a value that the procedure expects you to pass when you call it.
The procedure's declaration defines its parameters.

Argument:

An argument represents the value you pass to a procedure parameter when you call the procedure.
The calling code supplies the arguments when it calls the procedure.*/

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?

/*false, 0, Null, NaN.*/
  //Answer Here



//Next Problem



//Create a function called myName that returns your name

  //Code Here
  var myName=function(){
  	  var name='Jigmei';

  	return (name);
  }

//Now save the function definition of myName into a new variable called newMyName

	 var newMyName=myName();


  //Code Here

//Now alert the result of invoking newMyName

alert (newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.
var outerFn=function(){
     var anonymous=function(){
     	return "jigmei";
     }
	return anonymous();
}

  //Code Here

//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn=outerFn();

  //Code Here

//Now invoke innerFn.
innerFn;