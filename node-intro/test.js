//puts the interperater into strict mode
//if var is mistyped, then it won't make a new var
'use strict';

var x = 1;
function doubleIt(x){
	x = x * 2;
}

var name = 'Dave';

function getHello(name){
	return function(){
		console.log(name);
	}
}

var sayHello = getHello(name);
name = 'Fred';

doubleIt(x);
console.log(x);