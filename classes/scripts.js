"use strict"

class User{
	constructor(username, email, password) {
		this.username = username;
		this.email = email;
		this.password = password;
	}

	static countUsers(){
		console.log('There are 50 users');
	}

	register() {
		console.log(this.username+' is now registered');
	}
}

let steven = new User('steven', 'steven@email.com', '32324');

steven.register();
User.countUsers();

class Member extends User {
	constructor(username, email, password, memberPackage) {
		super(username, email, password);
		this.package = memberPackage;
	}

	getPackage(){
		console.log(this.username+' is subscribed to the '+this.package+' package')
	}
}

let john = new Member('john', 'john@xtra.co.nz', '351355135', 'Premium');
john.getPackage();


