"use strict"

function hello($hello = 'Hello world'){
	console.log($hello);
}

hello('Hi Steven');
hello();

let args1 = [1, 2, 3];
let args2 = [4, 5, 6];

function test(){
	console.log(args1 + ',' + args2);
}

test(...args1, ...args2);