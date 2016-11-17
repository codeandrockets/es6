"use strict"

//Both consoles will print 50
function testVar(){
	var a = 30;
	if(true) {
		var a = 50;
		console.log(a);
	}
	console.log(a);
}
testVar();

//50 and 30 will be logged
function testLet() {
	let a = 30;
	if(true) {
		let a = 50;
		console.log(a);
	}
	console.log(a);
} 
testLet();

//1 through 9 will be logged i is not defined
for ( let i = 0; i < 10; i++ ){
	console.log(i)
}
console.log(i);

//This will error
const colours = [];
colours.push('purple');
colours.push('green');
console.log(colours);
colours = "blue;"